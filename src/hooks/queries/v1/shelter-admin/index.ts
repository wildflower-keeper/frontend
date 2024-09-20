// Utils
import {
  homelessPeopleCount,
  login,
  logout,
  shelterInfo,
} from "@/utils/api/v1/shelter-admin";
import { UndefinedInitialDataOptions, useMutation, useQuery } from "@tanstack/react-query";
// Types
import type { CurrentUserInfo, LoginBodyType } from "@/utils/api/v1/shelter-admin/type";
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

export const useHomelessPeopleCount = (options: UndefinedInitialDataOptions<CurrentUserInfo, Error, CurrentUserInfo, string[]>,) => {
  const queryKey = useMemo(homelessPeopleCount.queryKey, []);

  return useQuery({
    ...options,
    queryKey,
    queryFn: homelessPeopleCount,
  });
};

export const useShelterInfo = () => {
  const queryKey = useMemo(shelterInfo.queryKey, []);

  return useQuery({
    queryKey,
    queryFn: shelterInfo,
  });
};


