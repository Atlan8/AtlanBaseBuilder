import type { PostInfo } from "./type";

export const useService = (): PostInfo => {
  return {
    title: "前线急报！飞将相布出任高丽中军大将，目前已于阵前挑战！",
    author: "姬野 Kiye",
    comment: [
      {
        id: 1,
        username: "姬野 Kiye",
        content: "今兮将军已不在，震旦哪位将军能拿下此人？",
        datetime: "2023-02-16 22:36",
        device: "Android客户端", // 来自
        ipAddress: "广东", // ip属地
        floor: "1楼",
        cover: "./assets/faker.jpeg",
        reply: [],
      },
      {
        id: 2,
        username: "olxbjzdfg",
        content:
          "lpl帐下第一大将军胎虎将军是飞一儿，现已弃暗投明lpl多年，若以父子之情说之，动之以情晓之以理，定能使大飞以礼来降",
        datetime: "2023-02-16 22:42",
        device: "Android客户端", // 来自
        ipAddress: "河南", // ip属地
        floor: "2楼",
        cover: "",
        reply: [],
      },
    ],
  };
};
