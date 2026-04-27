import { Button } from "./ui/Button";
import React, { useState } from "react";

function RetrievePss({ handleCancel }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card w-full">
      <div className="flex flex-col gap-9">
        <h2 className="text-2xl">Nueva contraseña</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-sm font-medium text-gray-700">
            Ingresa el código que se envió a tu email
          </label>
          <input
            id="username"
            type="text"
            placeholder="Ingresa el código"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            onKeyPress={(e) => { if (e.key === "Enter") { alert("enviar"); } }}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Nueva contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Ingresa tu nueva contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              onKeyPress={(e) => { if (e.key === "Enter") { alert("enviar"); } }}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password2" className="text-sm font-medium text-gray-700">
              Repite contraseña
            </label>
            <input
              id="password2"
              type="password"
              placeholder="Ingresa tu nueva contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              onKeyPress={(e) => { if (e.key === "Enter") { alert("enviar"); } }}
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-bmb-blue"
            />
          </div>
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
