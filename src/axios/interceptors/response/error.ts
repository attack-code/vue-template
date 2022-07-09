/**
 * 处理 axios 实例的响应错误
 * @param error 响应错误消息
 * @returns rejected 状态的promise
 */
const handleResponseError = (error: unknown): Promise<unknown> => {
  // 给服务器上传错误日志
  return Promise.reject(error);
};

export default handleResponseError;
