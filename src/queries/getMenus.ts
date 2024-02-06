import { gql } from "@apollo/client";

export const GET_MENUS = gql`
  query GetMenus {
    menus {
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
