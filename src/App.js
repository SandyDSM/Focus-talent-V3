import React from "react";
import { Amplify, Auth } from "aws-amplify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";

import CollaboratorsProvider from "./context/collaborators/Provider";

import HomeAdmin from "./containers/HomeAdmin";
import SignIn from "./components/SignIn";
import Test from "./containers/Test";
import Tags from "./containers/Tags";
import Notif from "./containers/Notif";
import MyTeam from "./containers/MyTeam";
import NavHeader from "./components/NavHeader";
import TeamTestDetail from "./containers/TeamTestDetail";
import TeamSub from "./containers/TeamSub";
import ForgotPss from "./containers/ForgotPss"

import ScrollToTop from "./components/ScrollToTop";
import Validations from "./components/Validations";
Amplify.configure(awsExports);

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const assessLoggedInState = () => {
    Auth.currentAuthenticatedUser()
      .then((sess) => {
        console.log("logged in");
        setLoggedIn(true);
      })
      .catch(() => {
        console.log("not logged in");
        setLoggedIn(false);
        console.log({ setLoggedIn });
      });
  };
  useEffect(() => {
    assessLoggedInState();
  }, []);

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
              <Route exact path="/home" element={loggedIn ? <HomeAdmin signOut={signOut}/> : <SignIn onSignIn={assessLoggedInState} /> } />
              <Route exact path="/test" element={loggedIn ? <Test /> : <SignIn onSignIn={assessLoggedInState} /> } />
              <Route exact path="/tags" element={loggedIn ? <Tags /> : <SignIn onSignIn={assessLoggedInState} />} />
              <Route exact path="/notif" element={loggedIn ? <Notif /> : <SignIn onSignIn={assessLoggedInState} />} />
              <Route exact path="/myteam" element={loggedIn ? <MyTeam /> : <SignIn onSignIn={assessLoggedInState} />} />
              <Route exact path="/myteam/:id" element={loggedIn ? <TeamSub /> : <SignIn onSignIn={assessLoggedInState} />} />
              <Route exact path="/test/:id" element={loggedIn ? <TeamTestDetail /> : <SignIn onSignIn={assessLoggedInState} />} />
              <Route exact path="/forgotpassword" element={ loggedIn ? <Validations/> : <ForgotPss/>}/>
            </Routes>
          </CollaboratorsProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
