import AddUserForm from "@/components/Layout/AddUserForm";
import { useUserContext } from "@/components/Layout/UserManagementProvider";

const AddUserModal = () => {
    const userContext = useUserContext();
    const {isOpenAddUser} = userContext;
    if(isOpenAddUser) return (
        <div className="absolute top-10 right-80 text-[#353535] p-5 bg-white rounded-[20px] 
        flex-col justify-start gap-8 inline-flex font-['Pretendard']
        shadow-lg w-[540px] z-20">
            <div className="text-[28px] font-semibold">이용자 추가</div>
            <AddUserForm />
        </div>
    )
    return null;
}

export default AddUserModal;