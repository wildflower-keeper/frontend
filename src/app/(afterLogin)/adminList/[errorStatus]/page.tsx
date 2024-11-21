"use client"

import { useEffect, useState } from "react";

interface Props {
    params: { errorStatus: string }; // URL에서 동적으로 전달된 파라미터
}

const Page = ({ params: { errorStatus } }: Props) => {
    const [errorMessage, setErrorMessage] = useState([
        "페이지에 접근할 수 없습니다."
    ]);

    useEffect(() => {
        if (errorStatus === "403") {
            setErrorMessage(
                [
                    "Not authorized to view this page.",
                    "접근 권한이 부족하여 페이지를 볼 수 없습니다."
                ]
            )
        }
    }, [errorStatus])
    return (
        <div className="flex items-center gap-2 text-[#949494] mt-[20%] min-w-[700px]">
            <span className="text-[80px]">
                {errorStatus}
            </span>
            <div>
                <p className="text-2xl">
                    {errorMessage.map((message, index) => (
                        <span key={index}>
                            {message}
                            {index < errorMessage.length - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
            <span className='absolute w-40 h-40 right-0 bottom-0'>
            </span>
        </div>
    )
}

export default Page;