/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFD = /* GraphQL */ `
  subscription OnCreateFD($filter: ModelSubscriptionFDFilterInput) {
    onCreateFD(filter: $filter) {
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
export const onUpdateFD = /* GraphQL */ `
  subscription OnUpdateFD($filter: ModelSubscriptionFDFilterInput) {
    onUpdateFD(filter: $filter) {
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
export const onDeleteFD = /* GraphQL */ `
  subscription OnDeleteFD($filter: ModelSubscriptionFDFilterInput) {
    onDeleteFD(filter: $filter) {
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
export const onCreateFacturas = /* GraphQL */ `
  subscription OnCreateFacturas($filter: ModelSubscriptionFacturasFilterInput) {
    onCreateFacturas(filter: $filter) {
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
export const onUpdateFacturas = /* GraphQL */ `
  subscription OnUpdateFacturas($filter: ModelSubscriptionFacturasFilterInput) {
    onUpdateFacturas(filter: $filter) {
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
export const onDeleteFacturas = /* GraphQL */ `
  subscription OnDeleteFacturas($filter: ModelSubscriptionFacturasFilterInput) {
    onDeleteFacturas(filter: $filter) {
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
