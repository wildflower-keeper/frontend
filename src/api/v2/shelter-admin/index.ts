import { DELETE, fileSendAxios, GET, POST } from "@/api/axios";
import * as ROUTES from "./Routes.const";
import { CreateAdminDataType } from "@/components/Layout/CreateAdminForm";
import { generateSplitUrl } from "@/api/utils.const";
// Types
import { AdminDataType, CreateAdminResponseType, NoticeListResponseType, NoticeParams, NoticeDetailResponseType, NoticeRequestType, NoticeRecipientResponseType, UploadImageResponseType } from "@/api/v2/shelter-admin/type";

export function adminList(): Promise<AdminDataType[]> {
    return GET({ url: ROUTES.ADMIN_LIST })
        .catch((error) => {
            throw error;
        })
}

export function createAdminAccount(adminData: CreateAdminDataType): Promise<CreateAdminResponseType> {
    return POST({ url: ROUTES.ADMIN_LIST, data: adminData })
        .then((res) => {
            if (res.errorCode === "SHELTER_ACCOUNT_EMAIL_OR_PHONENUMBER_ALREADY_EXISTS") {
                throw new Error(res.description);
            }
            return res.data;
        })
        .catch((error) => {
            if (error.response.status === 403) {
                throw new Error("일반 관리자는 관리자를 생성할 수 없습니다.");
            }
            throw error;
        });
}

export function deleteAdmin(id: number) {
    return DELETE({ url: ROUTES.DELETE_ADMIN + '/' + id });
}

export function noticeList(opt: NoticeParams): Promise<NoticeListResponseType> {
    return GET({ url: ROUTES.NOTICE_LIST, params: opt });
}

export function postNotice(noticeData: NoticeRequestType): Promise<NoticeListResponseType> {
    return POST({ url: ROUTES.NOTICE_LIST, data: { ...noticeData } });
}

export function uploadImage(file: FormData): Promise<UploadImageResponseType> {
    return fileSendAxios.post(ROUTES.IMAGE, file);
}

export function getNoticeRecipient(id: number): Promise<NoticeRecipientResponseType> {
    return GET({url: ROUTES.NOTICE_RECIPIENT + '/' + id});
}

export function getNoticeDetail(id: number): Promise<NoticeDetailResponseType> {
    return GET({url: ROUTES.NOTICE_LIST + '/' + id});
}

adminList.queryKey = () => generateSplitUrl(ROUTES.ADMIN_LIST);
noticeList.queryKey = () => generateSplitUrl(ROUTES.NOTICE_LIST);
getNoticeRecipient.queryKey = () => generateSplitUrl(ROUTES.NOTICE_RECIPIENT);
getNoticeDetail.queryKey = () => generateSplitUrl(ROUTES.NOTICE_LIST);
createAdminAccount.mutationKey = () => generateSplitUrl(ROUTES.ADMIN_LIST);
deleteAdmin.mutationKey = () => generateSplitUrl(ROUTES.DELETE_ADMIN);
postNotice.mutationKey = () => generateSplitUrl(ROUTES.ADMIN_LIST);
uploadImage.mutationKey = () => generateSplitUrl(ROUTES.IMAGE);
