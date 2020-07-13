export const executeAsync = async (callee: Function): Promise<any> =>
  await callee()
