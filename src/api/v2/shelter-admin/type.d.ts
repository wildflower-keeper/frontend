export interface AdminDataType {
  createdAt: string
  id: number
  name: string
  phoneNumber: string
  remark: string
}

export type AdminId = number

export interface CreateAdminErrorType {
  errorCode: string
  description: string
}

export type CreateAdminResponseType = AdminId | CreateAdminErrorType