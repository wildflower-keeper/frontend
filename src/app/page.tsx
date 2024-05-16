import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <div>
        <p>어드민 로그인 페이지</p>
      </div>
      <div>
        <main className="flex justify-center items-center">
          <div className="border border-solid border-gray-300 shadow-lg p-10 rounded-md">
            <form className="flex flex-col gap-4 items-center">
              <div className="flex flex-col gap-2 w-full">
                <label>센터명</label>
                <select className="border border-solid border-gray-300 rounded-md px-2 py-1">
                  <option value={0}>센터를 선택해주세요.</option>
                  <option value={"비전트레이닝센터"}>비전트레이닝센터 </option>
                  <option value={"다시서기종합센터"}>다시서기종합센터</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label>비밀번호</label>
                <Input
                  className="border border-solid border-gray-300 rounded-md px-2 py-1"
                  placeholder="비밀번호"
                  type="password"
                />
              </div>
              <Button
                type="submit"
                className="bg-blue-500 rounded-md text-white w-fit px-3 py-2 hover:bg-blue-300"
              >
                <p>로그인</p>
              </Button>
              <Link
                className="text-blue-500 hover:text-blue-300 hover:underline"
                href={"/loss"}
              >
                비밀번호를 잊어버리셨나요?
              </Link>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
