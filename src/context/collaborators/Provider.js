import CollaboratorsContext from "./index";
import useAuth from "../../hooks/useAuth";
import useCollaborators from "../../hooks/useCollaborators";

export default function CollaboratorsProvider({ children, signOut }) {
  const auth = useAuth({ signOut });
  const collabs = useCollaborators({
    usuarioActualDatos: auth.usuarioActualDatos,
    setIsLoading: auth.setIsLoading,
  });

  const value = { ...auth, ...collabs };

  return (
    <CollaboratorsContext.Provider value={value}>
      {children}
    </CollaboratorsContext.Provider>
  );
}
