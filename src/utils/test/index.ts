/**
 * 判断是否为数字
 * @param val 任意数据结构
 * @returns
 */
export const isNumber = (val: any) => {
  const reg = /^[0-9]+.?[0-9]*$/;

  return reg.test(val);
};
