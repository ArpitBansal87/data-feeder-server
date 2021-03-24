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
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getBackground: Background!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;

// export default typeDef;
