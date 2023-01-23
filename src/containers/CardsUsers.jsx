import CardColaborador from "../components/CardColaborador";

const CardsUsers = ({ collaborators }) => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {collaborators?.map((colaborator) => (
        <div key={colaborator.id}>
          {colaborator.EQUIPO == "1" ? (
            <CardColaborador
             idCol={colaborator.id}
              type="More"
              width={"100%"}
              height={"100%"}
              overrides={{
                idEmploy: { children: colaborator.ID_COLABORADOR },
                NameCol: {
                  children: `${colaborator.NOMBRE} ${colaborator.APELLIDOS}`,
                },
                Job: { children: colaborator.PUESTO },
                Organitation: { children: colaborator.ORGANIZACION },
                profile: {
                  src: colaborator?.img ?? "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png",
                },
                FramePhoto: {
                  style: { cursor: "pointer" },
                },
              }}
            />
          ) : (
            <CardColaborador
            idCol={colaborator.id}
              width={"100%"}
              height={"100%"}
              overrides={{
                idEmploy: { children: colaborator.ID_COLABORADOR },
                NameCol: {
                  children: `${colaborator.NOMBRE} ${colaborator.APELLIDOS}`,
                },
                Job: { children: colaborator.PUESTO },
                Organitation: { children: colaborator.ORGANIZACION },
                profile: {
                  src: colaborator?.img ?? "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png",
                },
                FramePhoto: {
                  style: { cursor: "pointer" },
                },
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsUsers;
