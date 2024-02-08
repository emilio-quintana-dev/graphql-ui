import { gql } from "@apollo/client";

export const GET_MENU = gql`
  query GetMenu {
    menu(id: "3") {
      id
      label
      sections {
        id
        identifier
        label
        description
        disabled
        items {
          id
          type
          identifier
          label
          disabled
          description
          price
          items {
            id
            label
            disabled
            description
            price
          }
        }
      }
    }
  }
`;
