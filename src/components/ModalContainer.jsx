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
const ModalContainer = ({ 
  cardData = {
    name: "Zurita Robles Kadir",
    id: "2786036",
    organization: "Organización Bimbo Brasil",
    position: "Key Position",
    positionClass: "ELDP Class 26",
    role: "Supervisor production",
    avatarUrl: null
  },
  modalData = {
    mainCollaborator: {
      name: "Zurita Robles Kadir",
      id: "12345678",
      organization: "Organización Bimbo Brasil",
      role: "Supervisor Production",
      age: "42 años",
      avatarUrl: null
    },
    teamMembers: []
  }
}) => {
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
        />
      </div>
    </div>
  );

  return (
    <div className="modal-container">
      {/* Tarjeta de colaborador con función para abrir el modal al hacer clic en la flecha */}
      <EmployeeCard 
        name={cardData.name}
        id={cardData.id}
        organization={cardData.organization}
        position={cardData.position}
        positionClass={cardData.positionClass}
        role={cardData.role}
        avatarUrl={cardData.avatarUrl}
        onArrowClick={openModal}
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

