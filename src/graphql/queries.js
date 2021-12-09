import gql from "graphql-tag";

export const GET_JOBS_VACANVIES = gql`
  query getJobsVacancies {
    job_vacancies {
      id
      description
      language
      location
      name
      expired_at
      created_at
      department
      abilities {
        id
        description
      }
      experiences {
        id
        description
      }
      requirements {
        id
        description
      }
    }
  }
`;
