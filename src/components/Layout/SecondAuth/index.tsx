"use client"

import Button from "@/components/base/Button"
import InputWithLabel from "@/components/Composition/InputWithLabel"
import { useAuthContext } from "../AuthProvider";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { secondAuth } from "@/api/v1/shelter-admin";
import { SecondAuthType } from "@/api/v1/shelter-admin/type";
import { setCookie } from "@/utils/cookie";
import { useRouter } from "next/router";

const SecondAuth = () => {
    const { mutate } = useMutation({
        mutationKey: secondAuth.mutationKey(),
        mutationFn: (authData: SecondAuthType) => secondAuth(authData),
      });

    const authContext = useAuthContext();
    const {setIsSuccessFirstAuth, curAdminId } = authContext;

    const [authData, setAuthData] = useState<SecondAuthType>({
        id: 0,
        code: ""
    });

    const [errorCount, setErrorCount] = useState(0);
    const router = useRouter();
    
    const handleLoginSubmit = () => {
        mutate(authData, {
            onSuccess: (res) => {
                setCookie("authToken", res.authToken, {
                    path: "/",
                    expires: new Date(res.expiredAt),
                });
                router.push("/dashboard");
            },
            onError: (error) => {
                if(errorCount === 2) setIsSuccessFirstAuth(false);
                console.error(error);
                setErrorCount(prev => prev + 1);
          }
        });
      };

    const [time, setTime] = useState(180);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prev => prev - 1);
        }, 1000);
        if(time === 0) {
            setIsSuccessFirstAuth(false);
        } 
        return () => clearInterval(intervalId);
    }, [time]);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className="w-80">
            <form
                className="flex flex-col gap-14"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex flex-col w-full">
                        <InputWithLabel
                            onChange={(e) =>
                                setAuthData({ id: curAdminId, code: e.target.value })
                            }
                            value={authData.code}
                            id="authCode"
                            placeholder="이메일로 전송된 인증코드를 입력해주세요."
                            labelName="2차 인증코드"
                            type="password"
                        />
                        <div className="flex justify-end py-3">
                            <div className="text-red-500 text-sm">시간제한: {minutes}분 {seconds}초</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Button
                        type="submit"
                        className="primaryButtonDefault"
                        onClick={handleLoginSubmit}
                    >
                        로그인
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SecondAuth;