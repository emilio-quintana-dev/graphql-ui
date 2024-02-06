import { gql } from "@apollo/client";

export const GET_MENU = gql`
  query GetMenu {
    menu(id: "1") {
      id
      label
      sections {
        id
        identifier
        label
        description
        displayOrder
        items {
          id
          type
          identifier
          label
          description
          price
        }
      }
    }
  }
`;
