import BannerUser from "../components/BannerUser";

import { useContext, useEffect, useState, useRef } from "react";
import CardCompetencias from '../components/CardCompetencias';
import CollaboratorsContext from "../context/collaborators";
import CardMapa from '../components/CardMapa';
import { useParams, useNavigate } from "react-router-dom";

import ModalContainer from '../components/ModalContainer';
import './Organigrama.css'; // Importar los estilos específicos
import { Move, Trophy, Triangle } from 'lucide-react';

// Importar nuevos componentes y hooks
import { DataProvider, useDataContext, useOrganizationContext, useTalentContext, usePerformanceContext, useSuccessionContext } from '../context/organigram/DataProvider';
import { LoadingOverlay, SkeletonLoader } from '../components/LoadingSpinner';
import { DataErrorWrapper } from '../components/ErrorBoundary';

// Importar componentes de breadcrumbs
import BreadcrumbOrg from '../components/BreadcrumbOrg';
import useBreadcrumbs from '../hooks/useBreadcrumbs';

//Componente para traducción
import { useTranslation } from 'react-i18next';

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

  console.log("PARAMA", mainCollaborator)

  // Estado para controlar el nivel de zoom
  const [zoomLevel, setZoomLevel] = useState(1);
  // Estados para controlar si las tarjetas están minimizadas
  const [isCardMapaMinimized, setIsCardMapaMinimized] = useState(false);
  const [isPerformanceCardMinimized, setIsPerformanceCardMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  // Referencia al contenedor del organigrama
  const chartContainerRef = useRef(null);
  // Referencia al contenedor de scroll
  const scrollContainerRef = useRef(null);

  // useEffect para agregar el colaborador actual a los breadcrumbs
  useEffect(() => {
    if (mainCollaborator && mainCollaborator.IDCOLABORADOR) {
      addBreadcrumb({
        id: mainCollaborator.IDCOLABORADOR,
        name: `${mainCollaborator.NOMBRE} ${mainCollaborator.APELLIDOS}`,
        position: mainCollaborator.PUESTO
      });
    }
  }, [mainCollaborator?.IDCOLABORADOR, addBreadcrumb]); // Solo depender del ID del colaborador

  // Función para manejar la navegación del equipo con breadcrumbs
  const handleTeamNavigation = (collaboratorData) => {
    console.log('handleTeamNavigation called with:', collaboratorData);
    
    // Agregar el colaborador a los breadcrumbs
    addBreadcrumb({
      id: collaboratorData.id,
      name: collaboratorData.name,
      position: collaboratorData.position
    });
    
    console.log('Navigating to:', `/org/${collaboratorData.id}`);
    
    // Navegar a la vista del organigrama con el nuevo colaborador
    navigate(`/org/${collaboratorData.id}`);
  };

  //console.log("AQUI",successionCandidates)

  // Datos para los colaboradores que aparecen en el modal (usar datos de sucesión si están disponibles)
  const modalTeamMembers = successionCandidates.length > 0 ? successionCandidates : [
    {
      name: "Ricardo Fernández",
      id: "3456789",
      organization: "Marketing Digital",
      location: "MEX",
      age: "35 años",
      companyAntiquity: "8/10/2019",
      positionAntiquity: "8/10/2019",
      potential: "Talento promesa",
      performanceConclusion: "Supera",
      leadershipSkills: "Gran trabajo",
      businessContribution: "Sobresaliente",
      assessmentKF: "2023",
      profileMatch: "-",
      pid: "85%",
      pidColor: "#36B37E",
      avatarUrl: null,
      borderColor: "#9254DE"
    },
    {
      name: "Laura Mendoza",
      id: "4567890",
      organization: "Finanzas Corporativas",
      location: "COL",
      age: "42 años",
      companyAntiquity: "3/5/2018",
      positionAntiquity: "3/5/2018",
      potential: "Alto potencial",
      performanceConclusion: "Sobresaliente",
      leadershipSkills: "Sobresaliente",
      businessContribution: "Por encima de lo esperado",
      assessmentKF: "2024",
      profileMatch: "-",
      pid: "92%",
      pidColor: "#36B37E",
      avatarUrl: null,
      borderColor: "#F759AB"
    },
    {
      name: "Carlos Vega",
      id: "5678901",
      organization: "Operaciones Logísticas",
      location: "ARG",
      age: "39 años",
      companyAntiquity: "12/7/2020",
      positionAntiquity: "12/7/2020",
      potential: "Talento Esencial",
      performanceConclusion: "Gran trabajo",
      leadershipSkills: "Supera",
      businessContribution: "Gran trabajo",
      assessmentKF: "2023",
      profileMatch: "-",
      pid: "78%",
      pidColor: "#36B37E",
      avatarUrl: null,
      borderColor: "#13C2C2"
    }
  ];

  // Crear datos para el modal del colaborador principal
  const mainModalData = mainCollaborator ? {
    mainCollaborator: {
      name: `${mainCollaborator.NOMBRE} ${mainCollaborator.APELLIDOS}`,
      id: mainCollaborator.IDCOLABORADOR,
      organization: mainCollaborator.ORGANIZACION,
      role: mainCollaborator.PUESTO,
      age: mainCollaborator.EDAD,
      avatarUrl: `data:image/jpg;base64,${mainCollaborator?.FOTO}`,
      perf_text: mainCollaborator.PERFORMANCE,
    },
    teamMembers: modalTeamMembers
  } : null;

  // Crear datos para los modales de los colaboradores secundarios
  const teamMemberModals = teamMembers.map(member => ({
    mainCollaborator: {
      name: `${member.NOMBRE} ${member.APELLIDOS}`,
      id: member.IDCOLABORADOR,
      organization: member.ORGANIZACION,
      role: member.PUESTO,
      age: member.EDAD, // Valor por defecto
      avatarUrl: `data:image/jpg;base64,${member?.FOTO}`
    },
    teamMembers: modalTeamMembers
  }));

  // Funciones para alternar el estado de las tarjetas
  const toggleCardMapa = () => {
    setIsCardMapaMinimized(!isCardMapaMinimized);
  };

  const togglePerformanceCard = () => {
    setIsPerformanceCardMinimized(!isPerformanceCardMinimized);
  };

    // Manejadores de eventos para el arrastre del mouse
  const handleMouseDown = (e) => {
    // Evitar arrastrar si el clic se originó en el modal
    if (e.target.closest(".fixed.inset-0.z-\\[9999\\]")) {
      return;
    }
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setStartY(e.pageY - scrollContainerRef.current.offsetTop);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setScrollTop(scrollContainerRef.current.scrollTop);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const y = e.pageY - scrollContainerRef.current.offsetTop;
    const walkX = (x - startX); // Ajusta la velocidad de arrastre si es necesario
    const walkY = (y - startY); // Ajusta la velocidad de arrastre si es necesario
    scrollContainerRef.current.scrollLeft = scrollLeft - walkX;
    scrollContainerRef.current.scrollTop = scrollTop - walkY;
  };

  // Función para centrar el organigrama después del zoom
  const centerOrganigram = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;

      const leftX = 100;
      const dynamicPaddingTop = 150 * zoomLevel;
      const topY = Math.max(0, dynamicPaddingTop - 100);

      container.scrollTo({
        left: leftX,
        top: topY,
        behavior: 'smooth'
      });
    }
  };

  // Calcular el tamaño del contenedor del organigrama basado en el zoom
  const chartWidth = 1400 * zoomLevel;
  const chartHeight = 800 * zoomLevel;

  // Calcular padding dinámico basado en el nivel de zoom
  const dynamicPaddingTop = 150 * zoomLevel;
  const dynamicPaddingBottom = 150 * zoomLevel;

  const cardWidth = 320; // Ancho aproximado de cada tarjeta EmployeeCard (w-80 = 320px)
  const cardSpacing = 32; // Espacio entre tarjetas (space-x-8 = 32px)
  const minChartWidth = 1200; // Ancho mínimo para el organigrama
  const extraPadding = 400; // Padding extra para asegurar scroll completo
  
  // Calcular el ancho necesario para todas las tarjetas
  const calculatedChartWidth = teamMembers.length > 0 
    ? (teamMembers.length * cardWidth) + ((teamMembers.length - 1) * cardSpacing) + extraPadding
    : minChartWidth;
  
  // El ancho del organigrama debe considerar el zoom
  const orgChartWidth = Math.max(minChartWidth, calculatedChartWidth);
  
  // El ancho del contenedor debe ser el ancho del organigrama multiplicado por el zoom
  const containerWidth = orgChartWidth * zoomLevel;

  // useEffect para ajustar el scroll cada vez que cambie el zoom
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const currentScrollLeft = container.scrollLeft;
      const currentScrollTop = container.scrollTop;
      const oldZoomLevel = parseFloat(container.dataset.prevZoom || 1);

      const zoomRatio = zoomLevel / oldZoomLevel;

      // Calcular el punto central actual de la vista
      const centerX = currentScrollLeft + container.clientWidth / 2;
      const centerY = currentScrollTop + container.clientHeight / 2;

      // Calcular la nueva posición del centro después del zoom
      const newCenterX = centerX * zoomRatio;
      const newCenterY = centerY * zoomRatio;

      // Calcular la nueva posición de scroll para mantener el centro
      const newScrollLeft = newCenterX - container.clientWidth / 2;
      const newScrollTop = newCenterY - container.clientHeight / 2;

      // Aplicar los nuevos valores de scroll con límites apropiados
      container.scrollLeft = Math.max(0, Math.min(newScrollLeft, container.scrollWidth - container.clientWidth));
      container.scrollTop = Math.max(0, Math.min(newScrollTop, container.scrollHeight - container.clientHeight));

      container.dataset.prevZoom = zoomLevel.toString();
    }
  }, [zoomLevel, orgChartWidth]);

  // Función para aumentar el zoom
  const handleZoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 0.2, 2.5));
  };

  // Función para disminuir el zoom
  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 0.2, 0.7));
  };

  // Estilos para el contenedor del organigrama con zoom
  const orgChartStyle = {
    transform: `scale(${zoomLevel})`,
    transformOrigin: 'center top',
    transition: 'transform 0.3s ease',
    width: `${orgChartWidth}px`,
    height: '600px',
  };

  //Para realizar traducciones
  const { t } = useTranslation();
  
  // Mostrar overlay de carga mientras se cargan los datos
  if (isLoading) {
    return (
      <LoadingOverlay 
        loading={true} 
        progress={progress}
        message="Cargando datos del organigrama..."
      >
        <div className="h-screen flex flex-col bg-gray-100">
          <div className="z-40">
            <SkeletonLoader className="h-16 bg-gray-200" />
          </div>
          <div className="z-20 bg-gray-100 flex justify-between items-center p-6">
            <SkeletonLoader className="h-6 w-64" />
            <SkeletonLoader className="h-10 w-20" />
          </div>
          <div className="flex-grow">
            <SkeletonLoader className="h-full w-full" />
          </div>
        </div>
      </LoadingOverlay>
    );
  }

  // Mostrar error si hay problemas cargando los datos
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

  // Verificar que tenemos los datos mínimos necesarios
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

  return (
    <div className="h-screen flex flex-col">
      {/* Primer Header - BannerUser */}
      <div className="z-40">
        <BannerUser />
      </div>
      
      {/* Tercer Header - Header del Organigrama */}
      <div className="z-20 bg-gray-100 flex justify-between items-center p-6" style={{ top: '120px' }}>
        <BreadcrumbOrg 
          breadcrumbs={breadcrumbs}
          onBreadcrumbClick={(breadcrumb, index) => {
            navigateToBreadcrumb(index);
          }}
        />
        <div className="controls flex space-x-2">
          <button 
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"
            onClick={handleZoomOut}
            aria-label="Zoom Out"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
          <button 
            className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-100"
            onClick={handleZoomIn}
            aria-label="Zoom In"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Contenedor principal del organigrama */}
      <div className="organization-chart-wrapper bg-gray-100 flex-grow" style={{ paddingTop: '10px' }}>
        {/* Mapa de talento - esquina superior izquierda */}
        <div 
          className="fixed left-6 transition-all duration-300 ease-in-out z-50" 
          style={{ top: '220px' }}
        >
          {isCardMapaMinimized ? (
            <div 
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer flex items-center justify-center"
              onClick={toggleCardMapa}
              title={t('Expandir_Mapa_Talento')}
            >
              <Triangle strokeWidth={3} className="w-6 h-6 text-blue-800" />
            </div>
          ) : (
            <div className={`relative ${!isCardMapaMinimized ? 'animate-fadeIn' : ''}`}>
              <CardMapa 
                title="Mapa de talento" 
                levels={talentLevels} 
              />
              <div 
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer shadow-sm hover:shadow transition-all duration-200"
                onClick={toggleCardMapa}
                title={t('Minimizar_Mapa_Talento')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Tarjeta de desempeño - esquina superior derecha */}
        <div 
          className="fixed right-6 transition-all duration-300 ease-in-out z-50" 
          style={{ top: '220px' }}
        >
          {isPerformanceCardMinimized ? (
            <div 
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer flex items-center justify-center"
              onClick={togglePerformanceCard}
              title={t('Expandir_Calif_Desemp')}
            >
              <Trophy strokeWidth={3} className="w-6 h-6 text-blue-800" />
            </div>
          ) : (
            <div className={`relative ${!isPerformanceCardMinimized ? 'animate-fadeIn' : ''}`}>
              <CardCompetencias 
                title={t('Clasif_Desempeno')} 
                categories={performanceCategories} 
              />
              <div 
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer shadow-sm hover:shadow transition-all duration-200"
                onClick={togglePerformanceCard}
                title={t('Minimizar_Calif_Desemp')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Contenedor con scroll para el organigrama */}
        <div 
          ref={scrollContainerRef}
          className="chart-scroll-container overflow-auto h-full w-full"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the container
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ 
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '20px',
            scrollBehavior: 'auto'
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
            <div 
              ref={chartContainerRef}
              className="organization-chart-container relative"
              style={orgChartStyle}
            >
              {/* Colaborador principal */}
              <div className="main-collaborator absolute" style={{ top: '-50px', left: '50%', transform: 'translateX(-50%)' }}>
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
              <svg className="connection-lines absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                {mainCollaborator && teamMembers.length > 0 && (
                  <>
                    {/* Línea vertical desde el colaborador principal */}
                    <line 
                      x1="50%" 
                      y1="150" 
                      x2="50%" 
                      y2="280" 
                      stroke="#E5E7EB" 
                      strokeWidth="2" 
                    />
                    {/* Línea horizontal que conecta a los teamMembers */}
                    <line 
                      x1={`${50 - (teamMembers.length - 1) * 10}%`} 
                      y1="280" 
                      x2={`${50 + (teamMembers.length - 1) * 10}%`} 
                      y2="280" 
                      stroke="#E5E7EB" 
                      strokeWidth="2" 
                    />
                    {/* Líneas verticales a cada teamMember */}
                    {teamMembers.map((_, index) => {
                      const xPosition = 50 - (teamMembers.length - 1) * 10 + (index * 20);
                      return (
                        <line 
                          key={index} 
                          x1={`${xPosition}%`} 
                          y1="280" 
                          x2={`${xPosition}%`} 
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
              <div className="team-members absolute flex justify-center space-x-8" style={{ top: '350px', left: '50%', transform: 'translateX(-50%)', width: `${orgChartWidth}px` }}>
                {teamMembers.map((member, index) => (
                  <div key={member.id || index} className="team-member">
                    <ModalContainer 
                      cardData={member}
                      modalData={teamMemberModals[index]}
                      jefe={false}
                      onTeamNavigation={handleTeamNavigation}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
         {/* Botón de navegación en la esquina inferior derecha (fijo) */}
        <div className="navigation-button fixed bottom-6 right-6 z-30">
          <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100">
            <Move/>
          </button>
        </div>

        {/* Indicador de nivel de zoom */}
        <div className="zoom-level-indicator fixed bottom-6 left-6 z-30">
          <span className="text-sm font-medium">{Math.round(zoomLevel * 100)}%</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Componente principal del organigrama con proveedor de datos
 * @param {Object} props - Propiedades del componente
 * @param {string} props.organizationId - ID de la organización
 * @param {string} props.collaboratorId - ID del colaborador principal
 * @returns {JSX.Element} Componente de organigrama
 */
const OrganizationChart = () => {
  const { usuarioActualDatos } = useContext(CollaboratorsContext);

  const idioma = usuarioActualDatos?.IDIOMA;
  const collaboratorId = usuarioActualDatos?.ID_COLABORADOR;

  const { idteam } = useParams();

  const collaboratorIdToUse = idteam !== undefined ? idteam : collaboratorId;

  console.log('OrganizationChart - Params:', { idteam, collaboratorId, collaboratorIdToUse });
  console.log('OrganizationChart - usuarioActualDatos:', usuarioActualDatos);

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
    <DataProvider 
      idioma={idioma}
      collaboratorId={collaboratorIdToUse}
    >
      <OrganizationChartContent />
    </DataProvider>
  );
};

export default OrganizationChart;

