import { Button, TextField } from "@aws-amplify/ui-react";
import React, { useState } from "react";


function RetrievePss({handleCancel}) {
  const [username, setUsername] = useState("");

  return (
    <div className="card w-full">
      <div className="flex flex-col gap-9">
      <h2 className="text-2xl">Recuperación de contraseña</h2>
        <TextField
          id="username"
          label="Introduce tu electrónico"
          placeholder="Ingresa aquí tu correo electrónico"
          errorMessage="Este campo es obligatorio"
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
        <Button variation="primary">Enviar</Button>
        <Button onClick={handleCancel}>Cancelar</Button>
        </div>
      </div>
    </div>
  );
}

export default RetrievePss;
