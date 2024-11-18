import { useMutation } from "@tanstack/react-query";
import { logout } from "@/api/v1/shelter-admin";
import { removeCookie } from "@/utils/cookie";
import { LiaPowerOffSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter();
    const { mutate } = useMutation({
        mutationKey: logout.mutationKey(),
        mutationFn: logout,
    });

    const handleLogout = () => {
        mutate(undefined, {
            onSuccess: () => {
                removeCookie("authToken");
                router.push('/auth');
            },
            onError: (error) => {
                return error;
            },
        });
    };

    return (
        <div
            className="flex flex-row items-center cursor-pointer gap-2"
            onClick={handleLogout}
        >
            <LiaPowerOffSolid size={22} className="m-auto" />
            <div className="text-md">
                로그아웃
            </div>
        </div>
    )
}

export default LogoutButton;