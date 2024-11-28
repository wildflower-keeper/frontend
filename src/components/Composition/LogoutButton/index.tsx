import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "@/api/v1/shelter-admin";
import { removeCookie } from "@/utils/cookie";
import { LiaPowerOffSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const queryClient = useQueryClient();
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
                queryClient.clear();
            },
            onError: (error) => {
                return error;
            },
        });
    };

    return (
        <button
            className="flex flex-row items-center gap-2 basicSidebarbutton" onClick={handleLogout}>
            <LiaPowerOffSolid size={22} />
            <div className="text-md">
                로그아웃
            </div>
        </button>
    )
}

export default LogoutButton;