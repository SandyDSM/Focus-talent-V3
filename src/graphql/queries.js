/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      GUID
      APELLIDOS
      ENTIDAD_LEGAL
      ENTIDAD_LEGAL_ID
      ESTRUCTURA_ORGANIZACIONAL
      ESTRUCTURA_ORGANIZACIONAL_ID
      FECHA_MODIFICACION
      GRUPO
      GRUPO_ID
      ID_COLABORADOR
      ID_JEFE
      IDIOMA
      id
      NIVEL
      NIVEL_ID
      NOMBRE
      ORGANIZACION
      ORGANIZACION_ID
      PUESTO
      PUESTO_ID
      UBICACION_GEOGRAFICA_ID
      UBICACION_GEOGRAFICA
      EMAIL
      ACTIVA
      ES_JEFE
      ADMIN
      EQUIPO
      PHOTO
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        GUID
        APELLIDOS
        ENTIDAD_LEGAL
        ENTIDAD_LEGAL_ID
        ESTRUCTURA_ORGANIZACIONAL
        ESTRUCTURA_ORGANIZACIONAL_ID
        FECHA_MODIFICACION
        GRUPO
        GRUPO_ID
        ID_COLABORADOR
        ID_JEFE
        IDIOMA
        id
        NIVEL
        NIVEL_ID
        NOMBRE
        ORGANIZACION
        ORGANIZACION_ID
        PUESTO
        PUESTO_ID
        UBICACION_GEOGRAFICA_ID
        UBICACION_GEOGRAFICA
        EMAIL
        ACTIVA
        ES_JEFE
        ADMIN
        EQUIPO
        PHOTO
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
