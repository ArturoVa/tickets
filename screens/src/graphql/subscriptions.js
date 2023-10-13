/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket($filter: ModelSubscriptionTicketFilterInput) {
    onCreateTicket(filter: $filter) {
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
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket($filter: ModelSubscriptionTicketFilterInput) {
    onUpdateTicket(filter: $filter) {
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
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket($filter: ModelSubscriptionTicketFilterInput) {
    onDeleteTicket(filter: $filter) {
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
export const onCreateProducto = /* GraphQL */ `
  subscription OnCreateProducto($filter: ModelSubscriptionProductoFilterInput) {
    onCreateProducto(filter: $filter) {
      id
      name
      amount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProducto = /* GraphQL */ `
  subscription OnUpdateProducto($filter: ModelSubscriptionProductoFilterInput) {
    onUpdateProducto(filter: $filter) {
      id
      name
      amount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProducto = /* GraphQL */ `
  subscription OnDeleteProducto($filter: ModelSubscriptionProductoFilterInput) {
    onDeleteProducto(filter: $filter) {
      id
      name
      amount
      createdAt
      updatedAt
      __typename
    }
  }
`;
