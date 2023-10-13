/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
      id
      name
      number
      price
      amount
      total
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
      id
      name
      number
      price
      amount
      total
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
      id
      name
      number
      price
      amount
      total
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProducto = /* GraphQL */ `
  mutation CreateProducto(
    $input: CreateProductoInput!
    $condition: ModelProductoConditionInput
  ) {
    createProducto(input: $input, condition: $condition) {
      id
      name
      amount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProducto = /* GraphQL */ `
  mutation UpdateProducto(
    $input: UpdateProductoInput!
    $condition: ModelProductoConditionInput
  ) {
    updateProducto(input: $input, condition: $condition) {
      id
      name
      amount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProducto = /* GraphQL */ `
  mutation DeleteProducto(
    $input: DeleteProductoInput!
    $condition: ModelProductoConditionInput
  ) {
    deleteProducto(input: $input, condition: $condition) {
      id
      name
      amount
      createdAt
      updatedAt
      __typename
    }
  }
`;
