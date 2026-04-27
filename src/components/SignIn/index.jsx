import { Auth } from "aws-amplify";
import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { Login } from "../../ui-components";
import { useNavigate } from "react-router-dom";


const SignIn = ({ onSignIn }) => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const { user, updateCurrentUser } = userContext;

  const federatedSignInUpdateUser = async () => {
    try {
      const newUser = await Auth.federatedSignIn({
        customProvider: "focusprod",
      });
      await updateCurrentUser(newUser);
    } catch (error) {
      console.log("no manda", error);
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
    ButtonSingAzure: { onClick: () => federatedSignInUpdateUser(),
      children:"SSO Login" },
    ButtonSingIn: { onClick: () => signIn() },
    ButtonForgot:{onClick: () => navigate("/forgotpassword")},
    FrameImage: { height: "150px" },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
      <div
        className="bg-scroll hidden md:block col-span-1 lg:col-span-2 bg-right"
        style={{
          backgroundImage:
            "url(https://pruebabucketsawspruebas.s3.amazonaws.com/FondoG.jpg)",
          height: "100vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex items-center justify-center m-auto">
      <Login
        justifyContent="center"
        overrides={sendOverridesLogin}
        frameInputs={
          <div className="flex flex-col self-stretch gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">Correo electrónico</label>
              <input
                id="username"
                type="email"
                placeholder="Ingresa aquí tu correo electrónico"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                onKeyPress={(e) => { if (e.key === "Enter") { signIn(); } }}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Contraseña</label>
              <input
                id="password"
                type="password"
                placeholder="Ingresa aquí tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                onKeyPress={(e) => { if (e.key === "Enter") { signIn(); } }}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
              />
            </div>
            {error && (
              <div className="mt-2">
                <p className="text-sm	italic text-red-600	">
                  El usuario o la contraseña son incorrectos
                </p>
              </div>
            )}
          </div>
        }
      />
      </div>
    </div>
  );
};
export default SignIn;
