export type AdminId = number

export interface CreateAdminErrorType {
  errorCode: string
  description: string
}

export type CreateAdminResponseType = AdminId | CreateAdminErrorType