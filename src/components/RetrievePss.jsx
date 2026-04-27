import { Button } from "./ui/Button";
import React, { useState } from "react";

function RetrievePss({ handleCancel }) {
  const [mail, setMail] = useState("");

  return (
    <div className="card w-full">
      <div className="flex flex-col gap-9">
        <h2 className="text-2xl">Recuperación de contraseña</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-sm font-medium text-gray-700">
            Introduce tu electrónico
          </label>
          <input
            id="username"
            type="email"
            placeholder="Ingresa aquí tu correo electrónico"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
            onKeyPress={(e) => { if (e.key === "Enter") { alert("enviar"); } }}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button variation="primary">Enviar</Button>
          <Button onClick={handleCancel}>Cancelar</Button>
        </div>
      </div>
    </div>
  );
}

export default RetrievePss;
