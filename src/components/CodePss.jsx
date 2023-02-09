import { Button, TextField, PasswordField } from "@aws-amplify/ui-react";
import React, { useState } from "react";

function RetrievePss({handleCancel}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card w-full">
      <div className="flex flex-col gap-9">
        <h2 className="text-2xl">Nueva contraseña</h2>
        <TextField
          id="username"
          label="Ingresa el código que se envió a tu email"
          placeholder="Ingresa el código"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          isRequired={true}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              alert("enviar");
            }
          }}
        />
        <div className="flex flex-col gap-4">
        <PasswordField
          id="password"
          label="Nueva contraseña"
          placeholder="Ingresa tu nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isRequired={true}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              alert("enviar");
            }
          }}
        />
        <PasswordField
          id="password"
          label="Repite contraseña"
          placeholder="Ingresa tu nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isRequired={true}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              alert("enviar");
            }
          }}
        />
        </div>
        <div className="flex flex-col gap-4">
        <Button variation="primary">Cambiar contraseña</Button>
        <Button onClick={handleCancel}>Cancelar</Button>
        </div>
      </div>
    </div>
  );
}

export default RetrievePss;
