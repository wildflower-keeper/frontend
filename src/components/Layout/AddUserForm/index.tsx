import UserDataInput from "@/components/Composition/AddUserModal/items/UserDataInput";
import userManagementStore from "@/store/useUserManagement";
import { useForm } from "react-hook-form"

interface userDataFormType {
    name: string
    location: number
    phone: string
    secondPhone: number | null
}

const AddUserForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<userDataFormType>()
    const { closeAddUser } = userManagementStore();
    console.log(errors.name)
    const onSubmit = (data: userDataFormType) => {
        // console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <UserDataInput
                {...register('name', { 
                    required: true,
                })}
                id="userName" 
                title="이용자 이름"
                placeholder="이용자 이름을 입력해주세요. (필수)"
                type="text"
                maxLength={10}
                error={errors.name ? true : false}
            />
            <UserDataInput
                {...register('location', { 
                        required: true 
                    })}
                id="location"
                title="거주동,호실"
                placeholder="이용자가 거주하는 곳을 입력해주세요. (필수)"
                type="text"
                maxLength={10}
                error={errors.location ? true : false}
            />
            <UserDataInput
                {...register('phone', {
                    required: true,
                })
                }
                id="phone"
                title="핸드폰 번호"
                placeholder="이용자 핸드폰 번호를 입력해주세요. (필수)"
                type="number"
                maxLength={11}
                error={errors.phone ? true : false}
            />
            <UserDataInput
                {...register('secondPhone',)}
                id="secondPhone"
                title="비상 연락망"
                placeholder="비상 연락망을 입력해주세요. (선택)"
                type="number"
                maxLength={11}
                error={errors.secondPhone ? true : false}
            />
            <div className="flex flex-row gap-2 items-center justify-end">
                {Object.keys(errors).length != 0 ? <div className="justify-start text-[#ff3d00] text-base mr-24">필수적인 정보를 모두 입력해주세요.</div> : null}
                <button type="submit" className="px-3 py-1 bg-black text-white rounded-[10px] border border-[#dfdfdf]">저장</button>
                <button onClick={closeAddUser} className="px-3 py-1 bg-white rounded-[10px] border border-[#dfdfdf]">취소</button>
            </div>
        </form>
    )
}

export default AddUserForm;