import Link from "next/link";

const LoginHelp = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 mt-3 text-sm text-[#949494]">
            <span>
                또는
            </span>
            <div>
                <div className="flex gap-4">
                    <Link href="">
                        아이디 찾기
                    </Link>
                    |
                    <Link href="">
                        비밀번호 찾기
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginHelp;