// Utils
import { getShelters } from "@/utils/api/v1/shared";
import {
  getPinNumber,
  getSleepoverList,
  homelessPeopleCount,
  homelessPeopleList,
  login,
  logout,
  shelterInfo,
} from "@/utils/api/v1/shelter-admin";
import { useMutation, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./QueryKeys.const";
// Types
import type { LoginBodyType } from "@/utils/api/v1/shelter-admin/type";

export const useGetShelters = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.SHELTERS],
    queryFn: getShelters,
    initialData: [],
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.LOGIN],
    mutationFn: (loginData: LoginBodyType) => login(loginData),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.LOGOUT],
    mutationFn: logout,
  });
};

export const useHomelessPeopleCount = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOMELESS_PEOPLE, QUERY_KEYS.HOMELESS_PEOPLE_COUNT],
    queryFn: homelessPeopleCount,
  });
};

export const useHomelessPeopleList = (queryString: string) => {
  return useQuery({
    queryKey: [
      QUERY_KEYS.HOMELESS_PEOPLE,
      QUERY_KEYS.HOMELESS_PEOPLE_LIST,
      queryString,
    ],
    queryFn: () => homelessPeopleList(queryString),
    refetchInterval: 60 * 1000,
  });
};
export const useShelterInfo = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.SHELTER_INFO],
    queryFn: shelterInfo,
  });
};
export const useGetSleepoverList = (queryString: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.SLEEPOVERS_LIST, queryString],
    queryFn: () => getSleepoverList(queryString),
  });
};
export const useGetPinNumber = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PIN_NUMBER],
    queryFn: getPinNumber,
  });
};
