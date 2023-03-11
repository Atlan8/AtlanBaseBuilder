import http from "@/utils/http/index"

export const getAssembleListById = ({id}: {id: number}) => {
  return http({
    url: '/api/getAssembleListById',
    method: "get",
    params: {id: id}
  })
}