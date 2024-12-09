export interface AdminDataType {
  createdAt: string
  id: number
  name: string
  phoneNumber: string
  hasAdminRole: boolean
  remark: string
}

export type AdminId = number

export interface CreateAdminErrorType {
  errorCode: string
  description: string
}

export type CreateAdminResponseType = AdminId | CreateAdminErrorType

export interface NoticeListParam {
  pageNumber: number;
  pageSize: number;
}

export interface NoticeParams {
  pageNumber: number;
  pageSize: number;
}

export interface NoticeResponseType {
  contents: string
  id: number
  sendAt: string
  title: string
}

export interface PaginationType {
  currentPageNumber: number;
  nextPageNumber: number;
  pageSize: number;
  lastPageNumber: number;
}

export interface NoticeListResponseType {
  items: NoticeResponseType[],
  pagination: PaginationType;
}

export interface HomelessReadInfoType {
  homelessId: number,
  homelessName: string,
  homelessPhoneNumber: string,
  read: boolean
}

export interface NoticeReadInfoType {
  totalCount: number
  readCount: number
  unReadCount: number
}

export interface NoticeRecipientResponseType {
  items: HomelessReadInfoType[]
  noticeReadInfo: NoticeReadInfoType
}

export interface NoticeDataType{
  title: string
  content: string
}

export interface NoticeRequestType extends NoticeDataType {
  targetHomelessIds: number[]
}

export interface UserItemType {
  id: number
  name: string
  phoneNumber: string
}
