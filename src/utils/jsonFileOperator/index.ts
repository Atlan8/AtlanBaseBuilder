import type { PathLike } from 'fs';
import * as fs from 'fs';

const util = {
  /**
   * 获取字符串的UTF-8编码长度
   * @param inputStr 字符串
   * @returns Boolean
   */
  lengthUTF8: (inputStr: string) => {
    if (inputStr.length < 17) return;

    let i = 0;
    let totalLength = 0;

    /** 计算utf-8的字符串长度 */
    for (i = 0; i < inputStr.length; i++) {
      if (inputStr.charCodeAt(i) <= parseInt('0x7F')) {
        totalLength += 1;
      } else if (inputStr.charCodeAt(i) <= parseInt('0x7FF')) {
        totalLength += 2;
      } else if (inputStr.charCodeAt(1) <= parseInt('0xFFFF')) {
        totalLength += 3;
      } else if (inputStr.charCodeAt(i) <= parseInt('0x1FFFFF')) {
        totalLength += 4;
      } else if (inputStr.charCodeAt(i) <= parseInt('0x3FFFFFF')) {
        totalLength += 5;
      } else {
        totalLength += 6;
      }
    }
    return totalLength;
  },
  changeVal: ({ target, data }: { target: any; cVal: any; data: any }) => {
    let evalStr = 'data';
    for (const loc of target) {
      evalStr += '.' + loc;
    }
    eval(evalStr + '=cVal');
    return data;
  },
};

/**
 * 写入JSON文件内容
 * @param fd
 * @param content
 * @param callback
 */
const writeFileContent = (fd: number, content: string, callback: () => void) => {
  const buffer = Buffer.from(content);
  // 写入JSON文件内容
  fs.write(fd, buffer, 0, util.lengthUTF8(content), 0, (err, _written, bufferStream) => {
    if (err) {
      console.log('文件写入失败！');
      console.error(err);
      return;
    } else {
      console.log('写入文件成功', bufferStream.toString());
      // 写入JSON文件成功
      callback();
    }
  });
};

/**
 * 读取JSON文件内容
 * @param fd
 * @param buffer
 * @param size
 * @param changeInfo
 * @param callback
 */
const readFileContent = (fd: number, buffer: any, size: number, changeInfo: any, callback: (fd: number, data: any) => void) => {
  fs.read(fd, buffer, 0, size, 0, (err, bytesRead, contentBuffer) => {
    if (err) {
      throw err;
    } else {
      let jsonData = JSON.parse(contentBuffer.slice(0, bytesRead).toString());
      // 改变指定位置JSON数据
      jsonData = util.changeVal({ ...changeInfo, data: jsonData });
      callback(fd, jsonData);
    }
  });
};

/**
 *
 * @param fileLoc
 * @param target
 * @param cVal
 * @returns
 */
export default function (fileLoc: PathLike, target: any, cVal: any) {
  return new Promise((resolve, reject) => {
    console.log({ ...fs.default });
    /** 开始文件操作  */
    fs.open(fileLoc, 'r+', (err, fd) => {
      if (err) throw err;
      fs.fstat(fd, (err, stat) => {
        if (err) {
          reject(err);
          throw err;
        }

        console.log('stat:', stat.size);
        // 初始化buffer对象的内存空间
        const buffer = Buffer.from(stat.size + '');

        const readParam = [fd, buffer, stat.size, { target, cVal }];

        // 读取JSON文件内容
        readFileContent(...readParam, (readFd: number, jsonData: any) => {
          // 清空JSON文件内容
          fs.ftruncate(fd, 0, err => {
            if (err) {
              reject(err);
              throw err;
            }
          });
          // 写入JSON文件内容
          writeFileContent(readFd, JSON.stringify(jsonData, null, '\t'), () => {
            // 关闭文件描述符
            fs.close(fd, err => {
              if (err) {
                reject(err);
                throw err;
              }
              resolve('success');
            });
          });
        });
      });
    });
  });
}
