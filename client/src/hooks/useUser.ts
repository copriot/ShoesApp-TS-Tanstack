import { useQuery } from "@tanstack/react-query";

import authApi from "../services/auth";

const useUser = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: () => authApi.getMe(),
    retry: false,
    select: (data) => data.data.user,
  });

  return { user: data, loading: isLoading, error: isError };
};

export default useUser;
