import React, { useState } from "react";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import NoticeRecipientModal from "../../NoticeRecipientModal";
import { useNoticeContext } from "../../NoticeProvider";

const UploadImage = () => {
  const [preview, setPreview] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const noticeContext = useNoticeContext();
  const { isOpenUserSelectModal, setUploadedImage } = noticeContext;
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file) {
        setUploadedImage(file);
        setPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };
  return (
    <div className="mt-5">
      {isOpenUserSelectModal && <NoticeRecipientModal />}
      <h1>공지사항 이미지 추가하기</h1>
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        htmlFor="image"
        className={`flex flex-col items-center justify-center 
      cursor-pointer w-[400px] h-[200px] border border-dashed rounded-xl 
      bg-center bg-cover text-neutral-400 ${isDragging && "bg-neutral-300"}`}
        style={{
          backgroundImage: `url(${preview})`,
        }}
      >
        {
          !preview
          &&
          <>
            <HiOutlineDocumentAdd className="size-20" />
            <div>이미지를 드래그 또는 추가해주세요</div>
          </>
        }
      </label>
      <input id="image" className="hidden" accept="image/*" type="file" onChange={handleFileChange} />
    </div>
  );
};

export default UploadImage;
