import Image from 'next/image';

const Page = () => {
    return (
        <div className="flex items-center gap-2 text-[#949494] mt-[20%] min-w-900px">
            <span className="text-[80px]">
                403
            </span>
            <p>
                <div className="text-2xl">
                    Not authorized to view this page.<br />
                    접근 권한이 부족하여 페이지를 볼 수 없습니다.
                </div>
            </p>
            <span className='absolute w-40 h-40 right-0 bottom-0'>
            <Image src="/assets/logos/wildflower_logo_errorPage.svg" alt='error' width={100} height={100} />
            </span>
        </div>
    )
}

export default Page;