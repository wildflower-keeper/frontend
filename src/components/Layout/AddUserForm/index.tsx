import UserDataInput from "@/components/Composition/AddUserModal/items/UserDataInput";
import userManagementStore from "@/store/useUserManagement";

const AddUserForm = () => {
    const {closeAddUser} = userManagementStore();
    return (
        <form className="flex flex-col gap-5">
            <UserDataInput id="userName" title="이용자 이름" placeholder="이용자 이름을 입력해주세요. (필수)" />
            <UserDataInput id="location" title="거주동,호실" placeholder="이용자가 거주하는 곳을 입력해주세요. (필수)" />
            <UserDataInput id="phone" title="핸드폰 번호" placeholder="이용자 핸드폰 번호를 입력해주세요. (필수)" />
            <UserDataInput id="secondPhone" title="비상 연락망" placeholder="비상 연락망을 입력해주세요 (선택)" />
            <div className="flex flex-row gap-2 justify-end">
                <button className="px-3 py-1 bg-black text-white rounded-[10px] border border-[#dfdfdf]">저장</button>
                <button onClick={closeAddUser} className="px-3 py-1 bg-white rounded-[10px] border border-[#dfdfdf]">취소</button>
            </div>
        </form>
    )
}

export default AddUserForm;