import { useQuery } from "@tanstack/react-query";
import { getShelters } from "@/utils/api/v1/shared";
import { useMemo } from "react";

export const useGetShelters = () => {
  const queryKey = useMemo(getShelters.queryKey, []);
  return useQuery({
    queryKey,
    queryFn: getShelters,
    initialData: [],
  });
};
