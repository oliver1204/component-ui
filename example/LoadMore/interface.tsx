export interface State {
  topicLists: any, // 自定义
  currentTab: {
    typeId: number,
    name: string
  }
}
export interface Props {
  classN: string,
  hasLoaderMore: boolean,
  loadMore: () => void,
  LoadMoreParams: any
}
export interface Data {
  hasMore: boolean,
  isPending: boolean,
  hasMoreMap: any,
  topicListsMap: any,
  page: any
}