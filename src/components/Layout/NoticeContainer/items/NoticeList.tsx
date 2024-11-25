import { gridCol } from "./notice.const";

const data = [
    {
        createdAt: "24. 11. 25",
        title: "식단",
        content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등"
    },
    {
        createdAt: "24. 11. 25",
        title: "식단",
        content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등"
    },
    {
        createdAt: "24. 11. 25",
        title: "식단",
        content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등"
    },
    {
        createdAt: "24. 11. 25",
        title: "식단",
        content: "오늘의 식단은 김치볶음밥 계란국 장조림 등등"
    }
]

const NoticeList = () => {
    return ( 
        <div>
            {
                data.map(({ createdAt, title, content }, index) => (
                    <div className="py-3 grid grid-cols-4 place-items-center border-b border-solid border-neutral-200" style={{
                        gridTemplateColumns: gridCol
                    }}>
                        <div className="basicRowStyle">{index + 1}</div>
                        <div className="basicRowStyle">{createdAt}</div>
                        <div className="basicRowStyle">{title}</div>
                        <div className="basicRowStyle">{content}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default NoticeList;