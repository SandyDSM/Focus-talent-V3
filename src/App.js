import React, { useEffect, useState } from "react";
import { Amplify, Auth } from "aws-amplify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import CollaboratorsProvider from "./context/collaborators/Provider";
import HomeAdmin from "./containers/HomeAdmin";
import SignIn from "./components/SignIn";
import Test from "./containers/Test";
import Tags from "./containers/Tags";
import Notif from "./containers/Notif";
import MyTeam from "./containers/MyTeam";
import SearchTeam from "./containers/SearchTeam";
import NavHeader from "./components/NavHeader";
import TeamTestDetail from "./containers/TeamTestDetail";
import TeamSub from "./containers/TeamSub";
import ForgotPss from "./containers/ForgotPss";

import ScrollToTop from "./components/ScrollToTop";
import Validations from "./components/Validations";
import Forbidden from "./containers/Forbidden";
import { ProtectedRoutes } from "./context/ProtectRoutes";
import Permissions from "./containers/Permissions";
import ReportLogin from "./containers/ReportLogin";
import Organigrama from "./containers/Organigrama";

Amplify.configure(awsExports);

function App() {
  const [loggedIn, setLoggedIn] = useState(null); // 'null' al iniciar para manejar estado no determinado
  const [loading, setLoading] = useState(true);   // Estado de carga

  const assessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setLoggedIn(true);
        window.localStorage.setItem("logged", true);
      })
      .catch(() => {
        setLoggedIn(false);
        window.localStorage.setItem("logged", false);
      })
      .finally(() => {
        setLoading(false); // Termina el estado de carga
      });
  };

  useEffect(() => {
    const logged = window.localStorage.getItem("logged");
    if (logged === "true") {
      setLoggedIn(true);
      setLoading(false);
    } else {
      assessLoggedInState(); // Solo llamamos si no se ha autenticado en localStorage
    }
  }, []);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
      window.localStorage.removeItem("logged");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  if (loading) {
    return <div>Cargando...</div>; // Indicador mientras verifica autenticación
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <CollaboratorsProvider signOut={signOut}>
        <div>{!loading && loggedIn && <NavHeader />}</div>
          <Routes>
            <Route exact path="/" element={loggedIn ? (<Validations />) : (<SignIn onSignIn={assessLoggedInState} />)}/>
            <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
              <Route exact path="/home" element={<HomeAdmin signOut={signOut} />} />
              <Route exact path="/test" element={<Test />} />
              <Route exact path="/tags" element={<Tags />} />
              <Route exact path="/notif" element={<Notif />} />
              <Route exact path="/permissions" element={<Permissions />} />
              <Route exact path="/reportlogin" element={<ReportLogin />} />
              <Route exact path="/myteam" element={<MyTeam />} />
              <Route exact path="/myteam/:id" element={<TeamSub />} />
              <Route exact path="/test/:id" element={<TeamTestDetail />} />
              <Route exact path="/org" element={<Organigrama />} />
            </Route>
            <Route exact path="/forgotpassword" element={<ForgotPss />} />
            <Route exact path="/forbidden" element={<Forbidden />} />
          </Routes>
        </CollaboratorsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
