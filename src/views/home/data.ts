export const getData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    reject(new Error("Service is not found!"));
  });
};
