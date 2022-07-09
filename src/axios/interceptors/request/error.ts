const handleRequestError = (error: unknown): Promise<unknown> => {
  // 可以给服务器上报错误
  return Promise.reject(error);
};

export default handleRequestError;
