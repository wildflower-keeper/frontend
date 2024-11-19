import { POST } from "@/api/axios";
import * as ROUTES from "./Routes.const";
import { AdminDataType } from "@/components/Layout/CreateAdminForm";
import { generateSplitUrl } from "@/api/utils.const";
import { CreateAdminResponseType } from "@/api/v1/shelter-admin/type";

export function createAdminAccount(adminData: AdminDataType): Promise<CreateAdminResponseType> {
    return POST({ url: ROUTES.CREATE_ADMIN_ACCOUNT, data: adminData })
        .then((res) => {
            if(res.errorCode === "SHELTER_ACCOUNT_EMAIL_OR_PHONENUMBER_ALREADY_EXISTS") {
                throw new Error(res.description);
            }
            return res.data;
        })
        .catch((error) => {
            throw error;
        });
}

createAdminAccount.mutationKey = () => generateSplitUrl(ROUTES.CREATE_ADMIN_ACCOUNT);