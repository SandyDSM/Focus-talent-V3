import CollaboratorsContext from "./index";
import useTranslations from "../../hooks/useTranslations";
import useAuth from "../../hooks/useAuth";
import useCollaborators from "../../hooks/useCollaborators";

export default function CollaboratorsProvider({ children, signOut }) {
  const translations = useTranslations();
  const auth = useAuth({ onUserResolved: translations.fetcLanguage, signOut });
  const collabs = useCollaborators({
    usuarioActualDatos: auth.usuarioActualDatos,
    setIsLoading: auth.setIsLoading,
  });

  const value = { ...auth, ...translations, ...collabs };

  return (
    <CollaboratorsContext.Provider value={value}>
      {children}
    </CollaboratorsContext.Provider>
  );
}
