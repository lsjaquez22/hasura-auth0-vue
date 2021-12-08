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

export const CREATE_COMMENT = gql`
  mutation createComment(
    $cellphone_number: String
    $city: String
    $comment: String
    $country: String
    $email: String
    $name: String
    $phone_number: String
    $state: String
    $zip_code: String
  ) {
    insert_contact_request_one(
      object: {
        cellphone_number: $cellphone_number
        city: $city
        comment: $comment
        country: $country
        email: $email
        name: $name
        phone_number: $phone_number
        state: $state
        zip_code: $zip_code
      }
    ) {
      cellphone_number
      city
      comment
      country
      created_at
      email
      id
      name
      phone_number
      state
      updated_at
      zip_code
    }
  }
`;
