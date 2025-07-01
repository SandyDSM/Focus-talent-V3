
import BannerUser from "../components/BannerUser";
import HeadTeam from "../components/HeadTeam";

import { useContext, useEffect, useState, useRef } from "react";
import CardCompetencias from '../components/CardCompetencias';
import CollaboratorsContext from "../context/collaborators";
import CardMapa from '../components/CardMapa';

import ModalContainer from '../components/ModalContainer';
import './Organigrama.css'; // Importar los estilos específicos
import { Move, Trophy, Triangle } from 'lucide-react';

/**
 * Componente que muestra un organigrama con un colaborador principal y sus colaboradores secundarios
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.mainCollaborator - Datos del colaborador principal
 * @param {Array} props.teamMembers - Array de colaboradores secundarios
 * @param {Array} props.talentLevels - Array de niveles de talento para el mapa de talento
 * @param {Array} props.performanceCategories - Array de categorías de desempeño
 * @param {string} props.headerTitle - Título del encabezado
 * @param {string} props.banerSearch - Título para el HeadTeam
 * @returns {JSX.Element} Componente de organigrama
 */
const OrganizationChart = ({
  mainCollaborator = {
    name: "Zurita Robles Kadir",
    id: "2786036",
    organization: "Organización Bimbo Brasil",
    position: "Key Position",
    positionClass: "ELDP Class 26",
    role: "Supervisor production",
    avatarUrl: null
  },
  teamMembers = [],
  talentLevels = [],
  performanceCategories = [],
  headerTitle = "Daniel Jones / Zurita Robles Kadir",
  banerSearch = "Equipo de Trabajo"
}) => {
  // Estado para controlar el nivel de zoom
  const [zoomLevel, setZoomLevel] = useState(1);
  // Estados para controlar si las tarjetas están minimizadas
  const [isCardMapaMinimized, setIsCardMapaMinimized] = useState(false);
  const [isPerformanceCardMinimized, setIsPerformanceCardMinimized] = useState(false);
  // Referencia al contenedor del organigrama
  const chartContainerRef = useRef(null);
  // Referencia al contenedor de scroll
  const scrollContainerRef = useRef(null);

  // Si no se proporcionan colaboradores secundarios, usar datos por defecto
  const defaultTeamMembers = [
    {
      name: "Connor O'Malley",
      id: "2786036",
      organization: "Organización Bimbo Brasil",
      position: "Key Position",
      positionClass: "ELDP Class 26",
      role: "Supervisor production",
      avatarUrl: null,
      borderColor: "#36B37E" // Verde
    },
    {
      name: "Mateo Ríos",
      id: "2786036",
      organization: "Organización Bimbo Brasil",
      position: "Key Position",
      positionClass: "D Class 26",
      role: "Supervisor production",
      avatarUrl: null,
      borderColor: "#FFAB00" // Amarillo
    },
    {
      name: "Sofia Dimitrova",
      id: "2786036",
      organization: "Organización Bimbo Brasil",
      position: "Key Position",
      positionClass: "D Class 26",
      role: "Supervisor production",
      avatarUrl: null,
      borderColor: "#00B8D9" // Azul claro
    },
    {
      name: "Alejandro Guzmán",
      id: "2786036",
      organization: "Organización Bimbo Brasil",
      position: "Key Position",
      positionClass: "D Class 26",
      role: "Supervisor production",
      avatarUrl: null,
      borderColor: "#FF5630" // Rojo
    }
  ];

  // Si no se proporcionan niveles de talento, usar datos por defecto
  const defaultTalentLevels = [
    { name: 'Alto Potencial', percentage: 20, color: '#0052CC' },
    { name: 'Talento promesa', percentage: 20, color: '#00B8D9' },
    { name: 'Talento Esencial', percentage: 20, color: '#36B37E' },
  ];

  // Si no se proporcionan categorías de desempeño, usar datos por defecto
  const defaultPerformanceCategories = [
    { name: 'Sobresaliente', percentage: 20, color: '#0052CC' },
    { name: 'Supera', percentage: 20, color: '#00B8D9' },
    { name: 'Gran trabajo', percentage: 20, color: '#36B37E' },
    { name: 'Necesita mejora', percentage: 20, color: '#FFAB00' },
    { name: 'Por debajo de lo esperado', percentage: 20, color: '#FF8B00' },
    { name: 'Salida', percentage: 0, color: '#FF5630' },
  ];

  const displayTeamMembers = teamMembers.length > 0 ? teamMembers : defaultTeamMembers;
  const displayTalentLevels = talentLevels.length > 0 ? talentLevels : defaultTalentLevels;
  const displayPerformanceCategories = performanceCategories.length > 0 ? performanceCategories : defaultPerformanceCategories;

  // Datos para los colaboradores que aparecen en el modal (diferentes a los del organigrama)
  const modalTeamMembers = [
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
      pidColor: "#36B37E", // Verde
      avatarUrl: null,
      borderColor: "#9254DE" // Púrpura
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
      pidColor: "#36B37E", // Verde
      avatarUrl: null,
      borderColor: "#F759AB" // Rosa
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
      pidColor: "#36B37E", // Verde
      avatarUrl: null,
      borderColor: "#13C2C2" // Turquesa
    }
  ];

  // Crear datos para el modal del colaborador principal
  const mainModalData = {
    mainCollaborator: {
      name: mainCollaborator.name,
      id: mainCollaborator.id,
      organization: mainCollaborator.organization,
      role: mainCollaborator.role,
      age: "42 años", // Valor por defecto
      avatarUrl: mainCollaborator.avatarUrl
    },
    teamMembers: modalTeamMembers // Usar los colaboradores diferentes para el modal
  };

  // Crear datos para los modales de los colaboradores secundarios
  const teamMemberModals = displayTeamMembers.map(member => ({
    mainCollaborator: {
      name: member.name,
      id: member.id,
      organization: member.organization,
      role: member.role,
      age: "38 años", // Valor por defecto
      avatarUrl: member.avatarUrl
    },
    teamMembers: modalTeamMembers // Usar los colaboradores diferentes para el modal
  }));

  // Funciones para alternar el estado de las tarjetas
  const toggleCardMapa = () => {
    setIsCardMapaMinimized(!isCardMapaMinimized);
  };

  const togglePerformanceCard = () => {
    setIsPerformanceCardMinimized(!isPerformanceCardMinimized);
  };

  // Función para centrar el organigrama después del zoom
  const centerOrganigram = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;

      // Calcular la posición para el scroll horizontal
      // Usar un valor fijo más pequeño para permitir ver el contenido izquierdo
      const leftX = 100; // Valor fijo para permitir ver el contenido izquierdo
      
      // Posición vertical mejorada
      const dynamicPaddingTop = 150 * zoomLevel;
      const topY = Math.max(0, dynamicPaddingTop - 100);

      // Aplicar el scroll con animación suave
      container.scrollTo({
        left: leftX,
        top: topY,
        behavior: 'smooth'
      });
    }
  };

  // useEffect para centrar el organigrama cada vez que cambie el zoom
  useEffect(() => {
    // Usar setTimeout para asegurar que el DOM se haya actualizado después del cambio de zoom
    const timer = setTimeout(() => {
      centerOrganigram();
    }, 150); // Aumentar el delay para permitir que termine completamente la transición

    return () => clearTimeout(timer);
  }, [zoomLevel]); // Se ejecuta cada vez que cambia el zoomLevel

  // Función para aumentar el zoom
  const handleZoomIn = () => {
    setZoomLevel(prevZoom => Math.min(prevZoom + 0.2, 2.5)); // Limitar el zoom máximo a 2.5
  };

  // Función para disminuir el zoom
  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 0.2, 0.7)); // Cambiar el zoom mínimo a 0.7 para evitar problemas de texto
  };

  // Calcular el tamaño del contenedor del organigrama basado en el zoom
  const chartWidth = 1400 * zoomLevel; // Ancho base del organigrama
  const chartHeight = 800 * zoomLevel; // Aumentar el alto base del organigrama para más espacio vertical

  // Calcular padding dinámico basado en el nivel de zoom
  const dynamicPaddingTop = 150 * zoomLevel; // Padding superior que crece con el zoom
  const dynamicPaddingBottom = 150 * zoomLevel; // Padding inferior que crece con el zoom

  // Estilos para el contenedor del organigrama con zoom
  const orgChartStyle = {
    transform: `scale(${zoomLevel})`,
    transformOrigin: 'center top', // Cambiar a 'center top' para mejor centrado
    transition: 'transform 0.3s ease',
    width: '1400px', // Ancho fijo del organigrama
    height: '600px', // Alto fijo del organigrama
  };

  return (
    <div className="h-screen flex flex-col"> {/* Solo esta página sin scroll */}
      {/* Primer Header - BannerUser */}
      <div className=" z-40">
        <BannerUser />
      </div>
      {/* Tercer Header - Header del Organigrama */}
      <div className="z-20 bg-gray-100 flex justify-between items-center p-6" style={{ top: '120px' }}>
        <h1 className="text-xl font-semibold text-gray-800">{headerTitle}</h1>
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
      <div className="organization-chart-wrapper  bg-gray-100 flex-grow" style={{ paddingTop: '10px' }}>
        {/* Cards laterales con funcionalidad de minimizar/maximizar */}
        
        {/* Mapa de talento - esquina superior izquierda */}
        <div 
          className= "fixed left-6 transition-all duration-300 ease-in-out z-50" 
          style={{ top: '220px' }}
        >
          {isCardMapaMinimized ? (
            // Versión minimizada - icono
            <div 
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer flex items-center justify-center"
              onClick={toggleCardMapa}
              title="Expandir mapa de talento"
            >
              <Triangle strokeWidth={3} className="w-6 h-6 text-blue-800" />
            </div>
          ) : (
            // Versión expandida - tarjeta completa
            <div className={`relative ${!isCardMapaMinimized ? 'animate-fadeIn' : ''}`}>
              <CardMapa 
                title="Mapa de talento" 
                levels={displayTalentLevels} 
              />
              {/* Indicador de que se puede minimizar */}
              <div 
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer shadow-sm hover:shadow transition-all duration-200"
                onClick={toggleCardMapa}
                title="Minimizar mapa de talento"
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
            // Versión minimizada - icono
            <div 
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer flex items-center justify-center"
              onClick={togglePerformanceCard}
              title="Expandir calificación de desempeño"
            >
              <Trophy strokeWidth={3} className="w-6 h-6 text-blue-800" />
            </div>
          ) : (
            // Versión expandida - tarjeta completa
            <div className={`relative ${!isPerformanceCardMinimized ? 'animate-fadeIn' : ''}`}>
              <CardCompetencias 
                title="Calificación de desempeño" 
                categories={displayPerformanceCategories} 
              />
              {/* Indicador de que se puede minimizar */}
              <div 
                className="absolute top-2 left-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 cursor-pointer shadow-sm hover:shadow transition-all duration-200"
                onClick={togglePerformanceCard}
                title="Minimizar calificación de desempeño"
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
          style={{ 
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '20px',
            scrollBehavior: 'smooth' // Añadir scroll suave
          }}
        >
          {/* Contenedor que define el área scrolleable con padding dinámico */}
          <div 
            style={{
              width: `${chartWidth}px`,
              height: `${chartHeight + dynamicPaddingTop + dynamicPaddingBottom}px`, // Altura total incluyendo padding dinámico
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-center',
              paddingTop: `${dynamicPaddingTop}px`, // Padding superior dinámico
              paddingBottom: `${dynamicPaddingBottom}px` // Padding inferior dinámico
            }}
          >
            {/* Organigrama con zoom (solo esta parte se escala) */}
            <div 
              ref={chartContainerRef}
              className="org-chart-content"
              style={orgChartStyle}
            >
              {/* Contenido del organigrama */}
              <div className="flex flex-col items-center">
                {/* Colaborador principal */}
                <div className="main-collaborator mb-8">
                  <div className="w-80">
                    <ModalContainer 
                      cardData={mainCollaborator}
                      modalData={mainModalData}
                    />
                  </div>
                </div>

                {/* Línea vertical desde el colaborador principal */}
                <div className="vertical-line h-16 w-0.5 bg-gray-300 mb-0"></div>

                {/* Línea horizontal para los colaboradores secundarios */}
                 <div className="horizontal-line relative w-full max-w-7xl h-0.5 bg-gray-300 mb-8">
                  {/* Líneas verticales para cada colaborador secundario */}
                  <div className="vertical-lines flex justify-between absolute w-full">
                    {displayTeamMembers.map((_, index) => (
                      <div key={index} className="vertical-line h-16 w-0.5 bg-gray-300"></div>
                    ))}
                  </div>
                </div>

                {/* Colaboradores secundarios */}
                <div className="team-members-container grid grid-cols-4 gap-4 w-full max-w-full">
                  {displayTeamMembers.map((member, index) => (
                    <div key={index} className="team-member-card w-80">
                      <ModalContainer 
                        cardData={member}
                        modalData={teamMemberModals[index]}
                      />
                    </div>
                  ))}
                </div>

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

export default OrganizationChart;

