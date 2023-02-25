export interface hardDiskInfo {
  hardDisk: string; // 硬盘名称
  hardDiskPrice: number; // 硬盘价格
  hardDiskCount: number; // 硬盘数量
  hardDiskTotal: number; // 硬盘总价
  hardDiskLink: string; // 硬盘购买链接
}

export interface AssembleInfo {
  id: number;
  name: string; // 方案名
  CPU: string; // CPU名称
  CPUPrice: number; // CPU单价
  CPULink: string; // CPU购买链接
  motherboard: string; // 主板名称
  motherboardPrice: number; // 主板价格
  motherboardLink: string; // 主板购买链接
  memory: string; // 内存名称
  memoryPrice: number; // 内存价格
  memoryCount: number; // 内存购买数量
  memoryTotal: number; // 内存总价
  memoryLink: string; // 内存购买链接
  radiator: string; // 散热器名称
  radiatorPrice: number; // 散热器价格
  radiatorLink: string; // 散热器购买链接
  hardDiskList: hardDiskInfo[]; // 硬盘数组
  graphicsCard: string; // 显卡名称
  graphicsCardPrice: number; // 显卡价格
  graphicsCardLink: string; // 显卡购买链接
  powerSupply: string; // 电源名称
  powerSupplyPrice: number; // 电源价格
  powerSupplyLink: string; // 电源购买链接
  chassis: string; // 机箱名称
  chassisPrice: number; // 机箱价格
  chassisLink: string; // 机箱购买链接
  fan: string; // 风扇名称
  fanPrice: number; // 风扇价格
  fanCount: number; // 风扇数量
  fanTotal: number; // 风扇总价
  fanLink: string; // 风扇购买链接
}

export const useService = () => {};
