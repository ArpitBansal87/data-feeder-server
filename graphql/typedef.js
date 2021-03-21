import { gql } from 'apollo-server';

module.exports = gql`
  type backgroundUrls {
    full: String!
    regular: String!
    small: String!
    raw: String!
  }
  type backgroundUser {
    name: String
    first_name: String
    last_name: String
  }
  type Background {
    id: String!
    urls: backgroundUrls
    user: backgroundUser
    color: String!
  }
  type Query {
    getBackground: Background!
  }
`;

// export default typeDef;
