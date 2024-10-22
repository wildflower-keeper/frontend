import AddUserForm from "@/components/Layout/AddUserForm";
import UserDataInput from "./items/UserDataInput";
import userManagementStore from "@/store/useUserManagement";

const AddUserModal = () => {
    const {isOpenAddUser} = userManagementStore();
    if(isOpenAddUser) return (
        <div className="absolute text-[#353535] left-[330px] top-[340px] p-5 bg-white rounded-[20px] 
        flex-col justify-start gap-8 inline-flex font-['Pretendard']
        shadow-lg">
            <div className="text-[28px] font-semibold">이용자 추가</div>
            <AddUserForm />
        </div>
    )
    else return null;
}

export default AddUserModal;