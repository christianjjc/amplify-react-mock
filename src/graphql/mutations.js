/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFD = /* GraphQL */ `
  mutation CreateFD($input: CreateFDInput!, $condition: ModelFDConditionInput) {
    createFD(input: $input, condition: $condition) {
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
export const updateFD = /* GraphQL */ `
  mutation UpdateFD($input: UpdateFDInput!, $condition: ModelFDConditionInput) {
    updateFD(input: $input, condition: $condition) {
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
export const deleteFD = /* GraphQL */ `
  mutation DeleteFD($input: DeleteFDInput!, $condition: ModelFDConditionInput) {
    deleteFD(input: $input, condition: $condition) {
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
export const createFacturas = /* GraphQL */ `
  mutation CreateFacturas(
    $input: CreateFacturasInput!
    $condition: ModelFacturasConditionInput
  ) {
    createFacturas(input: $input, condition: $condition) {
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
export const updateFacturas = /* GraphQL */ `
  mutation UpdateFacturas(
    $input: UpdateFacturasInput!
    $condition: ModelFacturasConditionInput
  ) {
    updateFacturas(input: $input, condition: $condition) {
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
export const deleteFacturas = /* GraphQL */ `
  mutation DeleteFacturas(
    $input: DeleteFacturasInput!
    $condition: ModelFacturasConditionInput
  ) {
    deleteFacturas(input: $input, condition: $condition) {
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
