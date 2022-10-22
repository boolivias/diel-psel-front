import api from "./config"

export type ResponseType<T = undefined> = {
  success: boolean
  status: number
  data?: T
  message?: string
}

const requestHelper = <T = undefined>(
  path: string,
  requestType: 'get' | 'post' | 'delete' | 'put',
  callback?: (data: any) => T,
  data?: any,
): Promise<ResponseType<T>> => {
  return api[requestType](
    path,
    (requestType === 'post' || requestType === 'put') ? data : undefined,
  ).then((res) => ({
    success: true,
    status: res.status,
    data: callback ? callback(res.data) : res.data as T,
  }))
    .catch((err) => {
      console.log(err);
      return {
        success: false,
        status: err.response.status,
        message: err.response.data.message,
      }
    })
}

export default requestHelper;