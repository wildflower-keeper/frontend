import { addUser, homelessPeopleList } from "@/api/v1/shelter-admin";
import UserDataInput from "@/components/Composition/AddUserModal/items/UserDataInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form"
import { useUserContext } from "../UserManagementProvider";

export interface userDataFormType {
    name: string
    room: string
    phoneNumber: string
    birthDate: string,
    memo: string,
    emergencyContact: string | null
}

const baseButtonStyle = "px-3 py-1 rounded-3xl border border-[#dfdfdf]";

const AddUserForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<userDataFormType>();
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationKey: addUser.mutationKey(),
        mutationFn: (userData: userDataFormType) => addUser(userData)
    });
    const userContext = useUserContext();
    const {setIsOpenAddUser, setIsAddSuccess} = userContext;
    const closeAddUser = () => {
        setIsOpenAddUser(false);
    }
    const openAddSuccessMessage = () => {
        setIsAddSuccess(true);
    }
    const onSubmit = (userData: userDataFormType) => {
        mutate({
            ...userData,
            birthDate: "",
            memo: "",
        }, {
            onSuccess: (res) => {
                queryClient.invalidateQueries({ queryKey: [...homelessPeopleList.queryKey()] });
                closeAddUser();
                openAddSuccessMessage();
            },
            onError: (error) => {
                console.log(error);
            }
        });
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
                error={Boolean(errors.name)}
            />
            <UserDataInput
                {...register('room', { 
                        required: true 
                    })}
                id="room"
                title="거주동,호실"
                placeholder="이용자가 거주하는 곳을 입력해주세요. (필수)"
                type="text"
                maxLength={10}
                error={Boolean(errors.room)}
            />
            <UserDataInput
                {...register('phoneNumber', {
                    required: true,
                })
                }
                id="phoneNumber"
                title="핸드폰 번호"
                placeholder="이용자 핸드폰 번호를 입력해주세요. (필수)"
                type="number"
                maxLength={11}
                error={Boolean(errors.phoneNumber)}
            />
            <UserDataInput
                {...register('emergencyContact',)}
                id="emergencyContact"
                title="비상 연락망"
                placeholder="비상 연락망을 입력해주세요. (선택)"
                type="number"
                maxLength={11}
                error={Boolean(errors.emergencyContact)}
            />
            <div className="flex flex-row gap-2 items-center justify-end">
                {Object.keys(errors).length != 0 ? <div className="justify-start text-[#ff3d00] text-base mr-24">필수적인 정보를 모두 입력해주세요.</div> : null}
                <button type="submit" className={`bg-black text-white ${baseButtonStyle}`}>저장</button>
                <button onClick={closeAddUser} className={`bg-white ${baseButtonStyle}`}>취소</button>
            </div>
        </form>
    )
}

export default AddUserForm;