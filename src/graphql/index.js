import { apolloClient } from "../main";

export const useQuery = async (query, params) => {
  const { data, loading, errors } = await apolloClient.query({
    query,
    variables: params,
    // errorPolicy: "all",
    fetchPolicy: "no-cache",
  });

  return { data, loading, errors };
};

export const useMutation = async (mutation, params) => {
  const { data, loading, errors } = await apolloClient.mutate({
    mutation,
    variables: params,
  });

  return { data, loading, errors };
};
