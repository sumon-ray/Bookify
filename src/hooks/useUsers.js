import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUsers = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        "https://bookify-server-lilac.vercel.app/users"
      );
      return res.data;
    },
  });

  // Return the data and all the state directly from the hook
  return { data, isLoading, isError, error, refetch };
};

export default useUsers;
