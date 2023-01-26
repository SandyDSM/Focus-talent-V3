import React from "react";
import { Amplify, Auth } from "aws-amplify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import { Button } from "@aws-amplify/ui-react";
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

import ScrollToTop from "./components/ScrollToTop";
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
            <Route exact path="/" element={
              loggedIn ? (
                <>
                  <HomeAdmin />
                  <Button onClick={signOut} color="primary">Log Out</Button>
                </>
              ) : <SignIn onSignIn={assessLoggedInState} />
            }
          />
              <Route exact path="/test" element={loggedIn ? <Test /> : <SignIn onSignIn={assessLoggedInState} /> } />
              <Route exact path="/tags" element={loggedIn ? <Tags /> : <SignIn onSignIn={assessLoggedInState} />} />
              <Route exact path="/notif" element={loggedIn ? <Notif /> : <SignIn onSignIn={assessLoggedInState} />} />
              <Route exact path="/myteam" element={loggedIn ? <MyTeam /> : <SignIn onSignIn={assessLoggedInState} />} />
              <Route exact path="/myteam/:id" element={loggedIn ? <TeamSub /> : <SignIn onSignIn={assessLoggedInState} />} />
              <Route exact path="/test/:id" element={loggedIn ? <TeamTestDetail /> : <SignIn onSignIn={assessLoggedInState} />} />
            </Routes>
          </CollaboratorsProvider>
        </BrowserRouter>
     
    </>
  );
}

export default App;
