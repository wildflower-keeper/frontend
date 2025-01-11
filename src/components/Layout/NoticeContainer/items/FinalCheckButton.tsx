import Loading from "@/components/Composition/Loading";
import { useNoticeContext } from "../../NoticeProvider";

const FinalCheckButton = ({ isLoading }: { isLoading: boolean }) => {
    const noticeContext = useNoticeContext();
    const { setIsOpenFinalCheckButton, isOpenFinalCheckButton } = noticeContext;
    if (!isOpenFinalCheckButton) return null;
    return (
        <div className="absolute z-20 bg-white w-[350px] h-[100px] rounded-md flex flex-col items-center shadow-xl gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1>전송 하시겠습니까?</h1>
            <div className="flex gap-3 text-white w-[200px] py-2 rounded-md">
                {
                    isLoading ?
                        <Loading loadingStyle="size-4 bg-green-500 mx-[39px]" />
                        :
                        <button type="submit" className="bg-[#00b226] p-1 rounded-xl w-[100px]">확인</button>
                }
                <button type="button" onClick={() => setIsOpenFinalCheckButton(false)} className="text-black border border-solid border-neutral-400 p-1 rounded-xl w-[100px]">취소</button>
            </div>
        </div>
    )
}

export default FinalCheckButton;