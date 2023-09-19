import React from "react";
import { Amplify, Auth } from "aws-amplify";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { useEffect, useState, useContext } from "react";

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
import ForgotPss from "./containers/ForgotPss"

import ScrollToTop from "./components/ScrollToTop";
import Validations from "./components/Validations";
import Forbidden from "./containers/Forbidden";
import { ProtectedRoutes } from "./context/ProtectRoutes";
import Permissions from "./containers/Permissions";

Amplify.configure(awsExports);

function App() {

  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem('logged'));

  const assessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then((sess) => {
        console.log("logged in");
        setLoggedIn(true);
        window.localStorage.setItem("logged", true)
      })
      .catch(() => {
        console.log("not logged in");
        setLoggedIn(false);
        window.localStorage.setItem("logged", false)
        console.log({ setLoggedIn });
      });
  };
  useEffect(() => {
    assessLoggedInState();
  }, [loggedIn]);
  

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };


  return (
    <>
        <BrowserRouter>
          <ScrollToTop />
          <CollaboratorsProvider signOut={signOut} >
          <div>{loggedIn && <NavHeader/>}</div>
            <Routes>
              <Route exact path="/" element={ loggedIn ? <Validations/> : <SignIn onSignIn={assessLoggedInState} />}/>
              <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
              <Route exact path="/home" element={<HomeAdmin signOut={signOut}/>} />
                <Route exact path="/test" element={<Test /> } />
                <Route exact path="/tags" element={<Tags /> }/>
                <Route exact path="/notif" element={<Notif />}/>
                <Route exact path="/permissions" element={<Permissions />}/>
                <Route exact path="/myteam" element={<SearchTeam /> } />
                <Route exact path="/myteam/:id" element={<TeamSub /> } />
                <Route exact path="/test/:id" element={<TeamTestDetail /> } />
              </Route>
              <Route exact path="/forgotpassword" element={ <ForgotPss/>}/>
              <Route exact path="/forbidden" element={ <Forbidden/>}/>
            </Routes>
          </CollaboratorsProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
