import {
  TextField,
  PasswordField,
} from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { Login } from "../../ui-components";

const SignIn = ({ onSignIn }) => {
  const userContext = useContext(UserContext);

  const { user, updateCurrentUser } = userContext;

  const federatedSignInUpdateUser = async () => {
    try {
      const newUser = await Auth.federatedSignIn({
        customProvider: "AzureSAML",
      });
      await updateCurrentUser(newUser);
    } catch (error) {
      console.log("no manda",error);
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const signIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      setError(false);
      onSignIn();
    } catch (error) {
      console.log("there was an error logging in", error);
      setError(true);
    }
  };
  

  const sendOverridesLogin = {
    logoImg: {
      src: "https://pruebabucketsawspruebas.s3.amazonaws.com/EN_logo_Slogan+GB.png",
    },
    ButtonSingAzure: { onClick: () => federatedSignInUpdateUser() },
    ButtonSingIn: { onClick: () => signIn() },
    FrameImage:{ height:"150px"}
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
      <div className="bg-scroll hidden md:block col-span-1 lg:col-span-2 bg-right" style={{ backgroundImage: "url(https://pruebabucketsawspruebas.s3.amazonaws.com/FondoG.jpg)", height: "100vh", width:"100%", backgroundRepeat: "no-repeat" }}>
      </div>
      <div className="flex items-center justify-center m-auto"> 
        <Login justifyContent="center" overrides={sendOverridesLogin} frameInputs={
            <div className="flex flex-col self-stretch gap-4">
              <TextField
                id="username"
                label="Correo electrónico"
                placeholder="Ingresa aquí tu correo electrónico"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                isRequired={true}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    signIn();
                  }}
                }
              />
              <PasswordField
                id="password"
                label="Contraseña"
                placeholder="Ingresa aquí tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRequired={true}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    signIn();
                  }}
                }
              />
              { error &&
              <div className="mt-2">
                <p className="text-sm	italic text-red-600	">El usuario o la contraseña son incorrectos</p>
              </div>

              }
            </div>
          }
 />
      </div>
    </div>
  );
 
};
export default SignIn;
