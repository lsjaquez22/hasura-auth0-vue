import gql from "graphql-tag";

export const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      director
      release_date
    }
  }
`;
