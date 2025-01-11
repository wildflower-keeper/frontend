import Image from "next/image";

const NoticeImage = ({ imageUrl }: { imageUrl: string | undefined }) => {
    const isValidUrl = (url: string) => {
        try {
            return Boolean(new URL(url));
        } catch {
            return false;
        }
    };
    if (!imageUrl || !isValidUrl(imageUrl)) return null;
    return (
        <div className="flex flex-col">
            <span>첨부 이미지</span>
            <div className="relative w-[300px] h-[300px]">
                <Image src={imageUrl} alt="공지사항 이미지" fill className="object-cover" />
            </div>
        </div>
    )
}

export default NoticeImage;