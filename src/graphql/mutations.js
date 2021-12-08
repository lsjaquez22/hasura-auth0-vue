import gql from "graphql-tag";

export const CREATE_MOVIE = gql`
  mutation createMovie($director: String, $title: String) {
    insert_movies_one(object: { director: $director, title: $title }) {
      director
      id
      created_at
      release_date
      title
      updated_at
    }
  }
`;
