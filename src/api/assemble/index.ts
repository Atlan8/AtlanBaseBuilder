import http from "@/utils/http/index"
import type { ResponseData } from "@/utils/http/type"
import type { AssembleInfo } from "@/views/assemble/service"
import type { AxiosResponse } from "axios"

/**
 * 获取所有配置列表
 * @returns 
 */
export const getAssembleList = (): Promise<AxiosResponse<ResponseData<AssembleInfo[]>>> => {
  return http({
    url: '/api/getAssembleList',
    method: "get",
  })
}

/**
 * 根据id查找配置详情
 * @param params  
 * @returns 
 */
export const getAssembleListById = ({id}: {id: number}): Promise<AxiosResponse<ResponseData<AssembleInfo>>> => {
  return http({
    url: '/api/getAssembleListById',
    method: "get",
    params: {id: id}
  })
}