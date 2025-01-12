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

export type NoticeFilterType = "NONE" | "GLOBAL_TYPE"

export interface NoticeListParam {
  pageNumber: number;
  pageSize: number;
  filterType: NoticeFilterType;
  isGlobal: boolean
}

export interface NoticeParams {
  pageNumber: number;
  pageSize: number;
}

export interface NoticeResponseType {
  noticeId: number
  title: string
  contents: string
  createdAt: string
  readCount: number
  totalCount: number
  isSurvey: boolean
  imageUrl: string
  isGlobal: boolean
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

export interface NoticeDetailResponseType {
  noticeId: number
  title: string
  contents: string
  createdAt: string
  isSurvey: boolean
  imageUrl: string
  notParticipateHomelessIds: number[]
  unreadHomelessIds: number[]
  readHomelessIds: number[]
}

export interface NoticeDataType {
  title: string
  content: string
}

export interface NoticeRequestType extends NoticeDataType {
  targetHomelessIds: number[]
  isSurvey: boolean
  imageUrl: string
}

export interface UserItemType {
  id: number
  name: string
  phoneNumber: string
}

export interface UploadImageResponseType {
  data: { imageUrl: string }
}