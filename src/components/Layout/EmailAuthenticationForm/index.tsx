"use client"

import Button from "@/components/base/Button"
import InputWithLabel from "@/components/Composition/InputWithLabel"
import { useAuthContext } from "../AuthProvider";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { secondAuth } from "@/api/v1/shelter-admin";
import { SecondAuthType } from "@/api/v1/shelter-admin/type";
import { setCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Loading from "@/components/Composition/Loading";

const SecondAuth = () => {
    const {register, handleSubmit} = useForm<{code: string}>();
    const { mutate, isPending } = useMutation({
        mutationKey: secondAuth.mutationKey(),
        mutationFn: (authData: SecondAuthType) => secondAuth(authData),
      });

    const authContext = useAuthContext();
    const { setIsSuccessFirstAuth, curAdminEmail } = authContext;

    const [errorCount, setErrorCount] = useState(0);
    const [error, setError] = useState("");
    const router = useRouter();

    const onSubmit = ({code}: {code: string}) => {
        mutate({code, email: curAdminEmail}, {
            onSuccess: (res) => {
                setCookie("authToken", res.authToken, {
                    path: "/",
                    expires: new Date(res.expiredAt),
                });
                router.push("/dashboard");
            },
            onError: (error) => {
                if (errorCount === 2) setIsSuccessFirstAuth(false);
                setErrorCount(prev => prev + 1);
                setError(error.message);
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
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex flex-col w-full">
                        <InputWithLabel
                        {...register("code", {
                            required: true
                        })}
                            title="2차 인증코드"
                            id="code"
                            placeholder="이메일로 전송된 인증코드를 입력해주세요."
                            type="password"
                        />
                        <div className={`flex ${error ? "justify-between" : "justify-end"} py-3 text-sm`}>
                            <span className="text-orange-500">{error}</span>
                            <span className="text-red-500">시간제한: {minutes}분 {seconds}초</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    {
                        isPending ?
                        <Loading loadingStyle="size-8 bg-green-500" />
                        :
                        <Button
                        type="submit"
                        className="primaryButtonDefault"
                    >
                        로그인
                    </Button>}
                </div>
            </form>
        </div>
    )
}

export default SecondAuth;