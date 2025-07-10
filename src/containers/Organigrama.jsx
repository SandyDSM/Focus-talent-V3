import BannerUser from "../components/BannerUser";

import { useContext, useEffect, useState, useRef } from "react";
import CardCompetencias from "../components/CardCompetencias";
import CollaboratorsContext from "../context/collaborators";
import CardMapa from "../components/CardMapa";
import { useParams, useNavigate } from "react-router-dom";

import ModalContainer from "../components/ModalContainer";
import "./Organigrama.css"; // Importar los estilos específicos
import { Move, Trophy, Triangle, Crosshair } from "lucide-react";

// Importar nuevos componentes y hooks
import {
  DataProvider,
  useDataContext,
  useOrganizationContext,
  useTalentContext,
  usePerformanceContext,
  useSuccessionContext,
} from "../context/organigram/DataProvider";
import { LoadingOverlay, SkeletonLoader } from "../components/LoadingSpinner";
import { DataErrorWrapper } from "../components/ErrorBoundary";

// Importar componentes de breadcrumbs
import BreadcrumbOrg from "../components/BreadcrumbOrg";
import useBreadcrumbs from "../hooks/useBreadcrumbs";

// Componente para traducción
import { useTranslation } from "react-i18next";

/**
 * Componente interno del organigrama que usa los datos del contexto
 */
const OrganizationChartContent = () => {
  // Hooks para obtener datos de diferentes contextos
  const { isLoading, isError, error, reloadData, progress } = useDataContext();
  const { mainCollaborator, teamMembers } = useOrganizationContext();
  const { levels: talentLevels } = useTalentContext();
  const { categories: performanceCategories } = usePerformanceContext();
  const { candidates: successionCandidates } = useSuccessionContext();

  // Hook para manejar breadcrumbs
  const { breadcrumbs, addBreadcrumb, navigateToBreadcrumb } = useBreadcrumbs();

  // Hook para navegación
  const navigate = useNavigate();

  // Estado de zoom y drag
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isCardMapaMinimized, setIsCardMapaMinimized] = useState(false);
  const [isPerformanceCardMinimized, setIsPerformanceCardMinimized] =
    useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // Refs
  const chartContainerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // useEffect para agregar el colaborador actual a los breadcrumbs
  useEffect(() => {
    if (mainCollaborator && mainCollaborator.IDCOLABORADOR) {
      addBreadcrumb({
        id: mainCollaborator.IDCOLABORADOR,
        name: `${mainCollaborator.NOMBRE} ${mainCollaborator.APELLIDOS}`,
        position: mainCollaborator.PUESTO,
      });
    }
  }, [mainCollaborator?.IDCOLABORADOR, addBreadcrumb]);

  // Función para la navegación del equipo
  const handleTeamNavigation = (collaboratorData) => {
    addBreadcrumb({
      id: collaboratorData.id,
      name: collaboratorData.name,
      position: collaboratorData.position,
    });
    navigate(`/org/${collaboratorData.id}`);
  };

  // Datos para modales
  const modalTeamMembers =
    successionCandidates.length > 0
      ? successionCandidates
      : [
          /* ... mismos datos de prueba que tenías ... */
        ];

  const mainModalData = mainCollaborator
    ? {
        mainCollaborator: {
          name: `${mainCollaborator.NOMBRE} ${mainCollaborator.APELLIDOS}`,
          id: mainCollaborator.IDCOLABORADOR,
          organization: mainCollaborator.ORGANIZACION,
          role: mainCollaborator.PUESTO,
          age: mainCollaborator.EDAD,
          avatarUrl: `data:image/jpg;base64,${mainCollaborator?.FOTO}`,
          perf_text: mainCollaborator.PERFORMANCE,
        },
        teamMembers: modalTeamMembers,
      }
    : null;

  const teamMemberModals = teamMembers.map((member) => ({
    mainCollaborator: {
      name: `${member.NOMBRE} ${member.APELLIDOS}`,
      id: member.IDCOLABORADOR,
      organization: member.ORGANIZACION,
      role: member.PUESTO,
      age: member.EDAD,
      avatarUrl: `data:image/jpg;base64,${member?.FOTO}`,
    },
    teamMembers: modalTeamMembers,
  }));

  // Toggle de tarjetas
  const toggleCardMapa = () => setIsCardMapaMinimized(!isCardMapaMinimized);
  const togglePerformanceCard = () =>
    setIsPerformanceCardMinimized(!isPerformanceCardMinimized);

  // Drag handlers
  const handleMouseDown = (e) => {
    if (e.target.closest(".fixed.inset-0.z-\\[9999\\]")) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setStartY(e.pageY - scrollContainerRef.current.offsetTop);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setScrollTop(scrollContainerRef.current.scrollTop);
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const y = e.pageY - scrollContainerRef.current.offsetTop;
    scrollContainerRef.current.scrollLeft = scrollLeft - (x - startX);
    scrollContainerRef.current.scrollTop = scrollTop - (y - startY);
  };

  // Función para centrar manualmente (botón y efectos)
const centerOrganigram = () => {
  setZoomLevel(1); // Restaurar zoom al 100%

  // Esperar a que el zoom se actualice antes de centrar
  setTimeout(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const contentWidth = container.scrollWidth;
    const containerWidth = container.clientWidth;

    container.scrollTo({
      left: (contentWidth - containerWidth) / 2,
      top: Math.max(0, 150 * 1 - 100), // Top con zoom 1
      behavior: "smooth",
    });
  }, 300); // Esperar a que la transición de zoom termine
};


  // Cálculos de tamaño
  const cardWidth = 320;
  const cardSpacing = 32;
  const minChartWidth = 1200;
  const extraPadding = 400;

  const calculatedChartWidth =
    teamMembers.length > 0
      ? teamMembers.length * cardWidth +
        (teamMembers.length - 1) * cardSpacing +
        extraPadding
      : minChartWidth;

  // ⬅️ Se agrega +400 extra para evitar “cortes” al hacer zoom
  const orgChartWidth = Math.max(minChartWidth, calculatedChartWidth + 400);
  const containerWidth = orgChartWidth * zoomLevel;
  const chartHeight = 800 * zoomLevel;
  const dynamicPaddingTop = 150 * zoomLevel;
  const dynamicPaddingBottom = 150 * zoomLevel;

// Centrar solo una vez al cargar colaborador (no al cambiar zoom)
useEffect(() => {
  if (mainCollaborator) {
    setTimeout(() => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const contentWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;

      container.scrollLeft = (contentWidth - containerWidth) / 2;
      container.scrollTop = Math.max(0, 150 * zoomLevel - 100);
    }, 300);
  }
}, [mainCollaborator]);

// Solo mantener el centro relativo al hacer zoom (sin centrar todo)
useEffect(() => {
  if (!scrollContainerRef.current) return;
  const container = scrollContainerRef.current;
  const oldZoom = parseFloat(container.dataset.prevZoom || 1);
  const ratio = zoomLevel / oldZoom;

  const centerX = container.scrollLeft + container.clientWidth / 2;
  const centerY = container.scrollTop + container.clientHeight / 2;

  container.scrollLeft = centerX * ratio - container.clientWidth / 2;
  container.scrollTop = centerY * ratio - container.clientHeight / 2;

  container.dataset.prevZoom = zoomLevel.toString();
}, [zoomLevel]);


  // Estilos del organigrama
  const orgChartStyle = {
    transform: `scale(${zoomLevel})`,
    transformOrigin: "top center", // cambiado
    transition: "transform 0.3s ease",
    width: `${orgChartWidth}px`,
    height: "600px",
  };

  // Traducción
  const { t } = useTranslation();

  /* ---------- Estados de carga / error ---------- */

 // Mostrar overlay de carga mientras se cargan los datos
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando usuarios...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <DataErrorWrapper
          loading={false}
          error={error}
          onRetry={reloadData}
        />
      </div>
    );
  }

  if (!mainCollaborator) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <DataErrorWrapper
          loading={false}
          error="No se pudieron cargar los datos del colaborador principal"
          onRetry={reloadData}
        />
      </div>
    );
  }

  /* ---------- Render principal ---------- */

  return (
    <div className="h-screen flex flex-col">
      {/* Header 1 */}
      <div className="z-40">
        <BannerUser />
      </div>

      {/* Header 3 (zoom + centrar) */}
      <div
        className="z-20 bg-gray-100 flex justify-between items-center p-6"
        style={{ top: "120px" }}
      >
        <BreadcrumbOrg
          breadcrumbs={breadcrumbs}
          onBreadcrumbClick={(breadcrumb, index) =>
            navigateToBreadcrumb(index)
          }
        />

        {/* Controles */}
        <div className="controls flex space-x-2">
          {/* Botón Centrar */}
          <button
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"
            onClick={centerOrganigram}
            aria-label="Centrar"
            title={t("Centrar")}
          >
            <Crosshair className="w-5 h-5 text-gray-600" />
          </button>

          {/* Zoom - */}
          <button
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"
            onClick={() =>
              setZoomLevel((prev) => Math.max(prev - 0.2, 0.7))
            }
            aria-label="Zoom Out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>

          {/* Zoom + */}
          <button
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"
            onClick={() =>
              setZoomLevel((prev) => Math.min(prev + 0.2, 1.5))
            }
            aria-label="Zoom In"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Contenedor principal */}
      <div
        className="organization-chart-wrapper bg-gray-100 flex-grow"
        style={{ paddingTop: "10px" }}
      >
        {/* --- MAPA DE TALENTO (ESQ. SUP. IZQ.) --- */}
        <div
          className="fixed left-6 transition-all duration-300 ease-in-out z-50"
          style={{ top: "220px" }}
        >
          {isCardMapaMinimized ? (
            <div
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center"
              onClick={toggleCardMapa}
              title={t("Expandir_Mapa_Talento")}
            >
              <Triangle strokeWidth={3} className="w-6 h-6 text-blue-800" />
            </div>
          ) : (
            <div className="relative animate-fadeIn">
              <CardMapa title="Mapa de talento" levels={talentLevels} />
              <div
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer shadow-sm"
                onClick={toggleCardMapa}
                title={t("Minimizar_Mapa_Talento")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* --- TARJETA DE DESEMPEÑO (ESQ. SUP. DER.) --- */}
        <div
          className="fixed right-6 transition-all duration-300 ease-in-out z-50"
          style={{ top: "220px" }}
        >
          {isPerformanceCardMinimized ? (
            <div
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center"
              onClick={togglePerformanceCard}
              title={t("Expandir_Calif_Desemp")}
            >
              <Trophy strokeWidth={3} className="w-6 h-6 text-blue-800" />
            </div>
          ) : (
            <div className="relative animate-fadeIn">
              <CardCompetencias
                title={t("Clasif_Desempeno")}
                categories={performanceCategories}
              />
              <div
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer shadow-sm"
                onClick={togglePerformanceCard}
                title={t("Minimizar_Calif_Desemp")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* --- CONTENEDOR CON SCROLL --- */}
        <div
          ref={scrollContainerRef}
          className="chart-scroll-container overflow-auto h-full w-full"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
            scrollBehavior: "auto",
          }}
        >
          <div
            style={{
              width: `${containerWidth}px`,
              height: `${chartHeight + dynamicPaddingTop + dynamicPaddingBottom}px`,
              paddingTop: `${dynamicPaddingTop}px`,
              paddingBottom: `${dynamicPaddingBottom}px`,
            }}
          >
            {/* -------- ORGANIGRAMA EN SÍ -------- */}
            <div
              ref={chartContainerRef}
              className="organization-chart-container relative"
              style={orgChartStyle}
            >
              {/* Colaborador principal */}
              <div
                className="main-collaborator absolute"
                style={{
                  top: "-50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {mainModalData && (
                  <ModalContainer
                    cardData={mainCollaborator}
                    modalData={mainModalData}
                    jefe={true}
                    onTeamNavigation={handleTeamNavigation}
                  />
                )}
              </div>

              {/* Líneas de conexión */}
              <svg
                className="connection-lines absolute inset-0 pointer-events-none"
                style={{ width: "100%", height: "100%" }}
              >
                {mainCollaborator && teamMembers.length > 0 && (
                  <>
                    {/* Línea vertical */}
                    <line
                      x1="50%"
                      y1="150"
                      x2="50%"
                      y2="280"
                      stroke="#E5E7EB"
                      strokeWidth="2"
                    />
                    {/* Línea horizontal */}
                    <line
                      x1={`${50 - (teamMembers.length - 1) * 10}%`}
                      y1="280"
                      x2={`${50 + (teamMembers.length - 1) * 10}%`}
                      y2="280"
                      stroke="#E5E7EB"
                      strokeWidth="2"
                    />
                    {/* Líneas a cada miembro */}
                    {teamMembers.map((_, index) => {
                      const xPos =
                        50 - (teamMembers.length - 1) * 10 + index * 20;
                      return (
                        <line
                          key={index}
                          x1={`${xPos}%`}
                          y1="280"
                          x2={`${xPos}%`}
                          y2="350"
                          stroke="#E5E7EB"
                          strokeWidth="2"
                        />
                      );
                    })}
                  </>
                )}
              </svg>

              {/* Colaboradores secundarios */}
              <div
                className="team-members absolute flex justify-center space-x-8 px-40"
                style={{
                  top: "350px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: `${orgChartWidth}px`,
                }}
              >
                {teamMembers.map((member, idx) => (
                  <div key={member.id || idx} className="team-member">
                    <ModalContainer
                      cardData={member}
                      modalData={teamMemberModals[idx]}
                      jefe={false}
                      onTeamNavigation={handleTeamNavigation}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Botón navegación (puedes usarlo para otra acción) */}
        <div className="navigation-button fixed bottom-6 right-6 z-30">
          <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100">
            <Move />
          </button>
        </div>

        {/* Indicador de zoom */}
        <div className="zoom-level-indicator fixed bottom-6 left-6 z-30">
          <span className="text-sm font-medium">
            {Math.round(zoomLevel * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------------- */
/* Componente principal con DataProvider    */
/* ---------------------------------------- */
const OrganizationChart = () => {
  const { usuarioActualDatos } = useContext(CollaboratorsContext);

  const idioma = usuarioActualDatos?.IDIOMA;
  const collaboratorId = usuarioActualDatos?.ID_COLABORADOR;

  const { idteam } = useParams();
  const collaboratorIdToUse =
    idteam !== undefined ? idteam : collaboratorId;

  if (!collaboratorIdToUse) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Inicializando organigrama...</p>
        </div>
      </div>
    );
  }

  return (
    <DataProvider idioma={idioma} collaboratorId={collaboratorIdToUse}>
      <OrganizationChartContent />
    </DataProvider>
  );
};

export default OrganizationChart;
