import React, { useState } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import DetailSucesion from '../components/DetailSucesion';


import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

/**
 * Componente contenedor que maneja la lógica para mostrar/ocultar el modal
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.cardData - Datos para la tarjeta de colaborador
 * @param {Object} props.modalData - Datos para el modal de colaborador
 * @returns {JSX.Element} Componente contenedor
 */
const ModalContainer = ({ cardData, modalData, jefe, language = 'Spanish (Latin America)'  }) => {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
  const ModalContent = () => (
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
    >
      <div className="relative w-full max-w-6xl animate-fade-in">
        {/* Botón para cerrar el modal */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Cerrar"
        >
          <X size={24} className="text-gray-600" />
        </button>
        
        {/* Contenido del modal */}
        <DetailSucesion 
          mainCollaborator={modalData.mainCollaborator}
          teamMembers={modalData.teamMembers}
          borde = {borde}
          propiedad = {propiedad}
          PERF_ID = {cardData?.PERF_ID}

        />
      </div>
    </div>
  );

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
        onArrowClick={openModal}
        jefe={jefe}
        PERF_ID = {cardData?.PERF_ID}
        borde = {borde}
        propiedad = {propiedad}
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

