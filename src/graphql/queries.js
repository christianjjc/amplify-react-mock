/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFD = /* GraphQL */ `
  query GetFD($id: ID!) {
    getFD(id: $id) {
      id
      detalle_string
      total_detalle
      facturasID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFDS = /* GraphQL */ `
  query ListFDS($filter: ModelFDFilterInput, $limit: Int, $nextToken: String) {
    listFDS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        detalle_string
        total_detalle
        facturasID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const fDSByFacturasID = /* GraphQL */ `
  query FDSByFacturasID(
    $facturasID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFDFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fDSByFacturasID(
      facturasID: $facturasID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        detalle_string
        total_detalle
        facturasID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFacturas = /* GraphQL */ `
  query GetFacturas($id: ID!) {
    getFacturas(id: $id) {
      id
      numero
      total
      detalle_array
      factura_factura_detalle {
        nextToken
        __typename
      }
      detalle_normal
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFacturas = /* GraphQL */ `
  query ListFacturas($filter: ModelFacturasFilterInput, $limit: Int, $nextToken: String) {
    listFacturas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        numero
        total
        detalle_array
        detalle_normal
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
