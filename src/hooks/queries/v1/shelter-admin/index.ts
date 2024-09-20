// Utils
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
// Types
import type { LoginBodyType } from "@/utils/api/v1/shelter-admin/type";
import { useMemo } from "react";

export const useLogin = () => {
  const mutationKey = useMemo(login.mutationKey, []);
  return useMutation({
    mutationKey,
    mutationFn: (loginData: LoginBodyType) => login(loginData),
  });
};

export const useLogout = () => {
  const mutationKey = useMemo(logout.mutationKey, []);
  return useMutation({
    mutationKey,
    mutationFn: logout,
  });
};

export const useHomelessPeopleCount = () => {
  const queryKey = useMemo(homelessPeopleCount.queryKey, []);
  return useQuery({
    queryKey,
    queryFn: homelessPeopleCount,
  });
};

export const useHomelessPeopleList = (queryString: string) => {
  const queryKey = useMemo(homelessPeopleList.queryKey, []);
  return useQuery({
    queryKey: [...queryKey, queryString],
    queryFn: () => homelessPeopleList(queryString),
    refetchInterval: 60 * 1000,
  });
};
export const useShelterInfo = () => {
  const queryKey = useMemo(shelterInfo.queryKey, []);

  return useQuery({
    queryKey,
    queryFn: shelterInfo,
  });
};
export const useGetSleepoverList = (queryString: string) => {
  const queryKey = useMemo(getSleepoverList.queryKey, []);
  return useQuery({
    queryKey: [...queryKey, queryString],
    queryFn: () => getSleepoverList(queryString),
  });
};
export const useGetPinNumber = () => {
  const queryKey = useMemo(getPinNumber.queryKey, []);
  return useQuery({
    queryKey,
    queryFn: getPinNumber,
  });
};
