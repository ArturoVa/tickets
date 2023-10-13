/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTicket = /* GraphQL */ `
  query GetTicket($id: ID!) {
    getTicket(id: $id) {
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
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProducto = /* GraphQL */ `
  query GetProducto($id: ID!) {
    getProducto(id: $id) {
      id
      name
      amount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProductos = /* GraphQL */ `
  query ListProductos(
    $filter: ModelProductoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        amount
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
