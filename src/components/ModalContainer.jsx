import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import EmployeeCard from '../components/EmployeeCard';
import DetailSucesion from '../components/DetailSucesion';
import SuccessionService from '../service/successionService';


import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

/**
 * Componente contenedor que maneja la lógica para mostrar/ocultar el modal
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.cardData - Datos para la tarjeta de colaborador
 * @param {Object} props.modalData - Datos para el modal de colaborador
 * @param {Function} props.onTeamNavigation - Función para manejar la navegación del equipo
 * @returns {JSX.Element} Componente contenedor
 */
const ModalContainer = ({ cardData, modalData, jefe, language, onTeamNavigation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successionData, setSuccessionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = async () => {
    setIsModalOpen(true); 
    setIsLoading(true); // Iniciar estado de carga
    try {
      const service = new SuccessionService();
      const data = await service.getSuccessionData(cardData?.IDCOLABORADOR);
      setSuccessionData(data);
    } catch (error) {
      console.error("Error al obtener datos de sucesión:", error);
      setIsModalOpen(false); 
    } finally {
      setIsLoading(false); // Finalizar estado de carga
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessionData(null); // Limpiar los datos al cerrar el modal
  };

  //console.log("DATA---",cardData)

      const borde = {
      '1': 'border-[#0561F4]',
      '2': 'border-[#00CDFF]',
      '3': 'border-[#99C570]',
      '4': 'border-[#FFFE03]',
      '5': 'border-[#FCBF04]',
      '6': 'border-[#FE0003]'
    };
  
    const variantes = {
    es: {
      1: 'S-AP',
      2: 'S-TP',
      3: 'S-TE',
      4: 'S-0',
      5: 'S-0'
    },
    en: {
      1: 'E-HP',
      2: 'E-PT',
      3: 'E-ET',
      4: 'E-0',
      5: 'E-0'
    }
  };
  const idioma = (language === 'Spanish (Latin America)' || language === 'Spanish (Spain)') ? 'es' : 'en';
  const propiedad = variantes[idioma][cardData?.POT_MAP_ID];

  // Componente del modal que se renderizará en el portal
  const ModalContent = () => {
    const handleOverlayClick = (e) => {
      // Cierra el modal solo si se hace clic directamente en el overlay
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };
    if (isLoading) {
      return (
        <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh'
        }}
      onClick={handleOverlayClick}>
            <LoadingSpinner size="large" />
        </div>
      );
    }

    if (!successionData) {
      return null; // O mostrar un mensaje de error si no hay datos después de la carga
    }

    return (
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh'
        }}
        onClick={handleOverlayClick}
      >
        <div className="relative w-full max-w-6xl animate-fade-in top-20 scroll-smooth"onClick={(e) => e.stopPropagation()}>
          {/* Botón para cerrar el modal */}
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 bg-blue-800 rounded-full shadow-md hover:bg-blue-900 transition-colors"
            aria-label="Cerrar"
          >
            <X size={24} className="text-white" />
          </button>
          
          {/* Contenido del modal */}
          <DetailSucesion 
            mainCollaborator={successionData?.mainCollaborator || modalData.mainCollaborator}
            teamMembers={successionData?.data || modalData.teamMembers}
            borde = {borde}
            propiedad = {propiedad}
            PERF_ID = {cardData?.PERF_ID}
            perf_text ={cardData?.PERFORMANCE}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="modal-container">
      {/* Tarjeta de colaborador con función para abrir el modal al hacer clic en la flecha */}
      <EmployeeCard 
        name={`${cardData.NOMBRE} ${cardData.APELLIDOS}`}
        id={cardData?.IDCOLABORADOR}
        organization={cardData?.ORGANIZACION}
        position={cardData?.KEY_POSITION}
        ELDP={cardData?.ELDP}
        role={cardData?.PUESTO}
        avatarUrl={`data:image/jpg;base64,${cardData?.FOTO}`}
        equipo={cardData?.EQUIPO}
        pais={cardData?.PAIS}
        onArrowClick={openModal}
        onTeamNavigation={onTeamNavigation}
        jefe={jefe}
        idjefe={cardData?.IDJEFE}
        PERF_ID = {cardData?.PERF_ID}
        borde = {borde}
        propiedad = {propiedad}
        expandir= {cardData?.DATOS_SUCESION}
      />

      {/* Modal renderizado en un portal para que se expanda en toda la página */}
      {isModalOpen && createPortal(
        <ModalContent />,
        document.body
      )}
    </div>
  );
};

export default ModalContainer;

// Añadir animación de fade-in al CSS global
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }
`;
document.head.appendChild(style);

