import React from 'react';
import CardSerchOrg from './CardSerchOrg';
import { useTranslation } from "react-i18next";

function GridSearch({ users = [] }) {
  const { t } = useTranslation();

  if (!users || users.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        {t("No_results")}
      </div>
    );
  }

  console.log(users)
  return (
    <div className="w-full">
      {/* Encabezado de resultados */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800">
          {t("Find_results2")} ({users.length})
        </h4>
      </div>

      {/* Grid responsivo de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div key={user.id || index} className="w-full">
            <CardSerchOrg 
              user={user}
              name={user.name}
              id={user.id}
              organization={user.organization}
              position={user.position}
              country={user.country}
              status={user.status}
              avatar={user.avatar}
            />
          </div>
        ))}
      </div>

      {/* Información adicional si hay muchos resultados */}
      {users.length > 9 && (
        <div className="mt-6 text-center text-sm text-gray-600">
          Mostrando {users.length} resultados. 
          {users.length > 50 && " Considera refinar tu búsqueda para obtener resultados más específicos."}
        </div>
      )}
    </div>
  );
}

export default GridSearch;

