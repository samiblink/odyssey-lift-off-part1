const {gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]
  }
  type Track {
    id: ID!
    title: String!
    thumbnail: String
    length: Int
    modulesCount: Int
    author: Author!
  }
  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }


`;
module.exports = typeDefs;