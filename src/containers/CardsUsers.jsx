import CardColaborador from "../components/CardColaborador";

const AVATAR = "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png";

const CardsUsers = ({ collaborators, sub }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {collaborators?.map((colaborator) => (
        <CardColaborador
          key={colaborator.INTERNAL_ID}
          idcol={colaborator.INTERNAL_ID}
          type={colaborator.EQUIPO === "1" && !sub ? "More" : "Default"}
          foto={colaborator.FOTO ? `data:image/jpg;base64,${colaborator.FOTO}` : AVATAR}
          idEmpleado={colaborator.ID_COLABORADOR}
          nombre={`${colaborator.NOMBRE} ${colaborator.APELLIDOS}`}
          puesto={colaborator.PUESTO}
          organizacion={colaborator.ORGANIZACION}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default CardsUsers;
