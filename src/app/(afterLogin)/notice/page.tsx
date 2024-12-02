import NoticeContainer from "@/components/Layout/NoticeContainer"
import NoticeProvider from "@/components/Layout/NoticeProvider"

const Page = () => {
    return (
        <NoticeProvider>
            <NoticeContainer />
        </NoticeProvider>
    )
}

export default Page;