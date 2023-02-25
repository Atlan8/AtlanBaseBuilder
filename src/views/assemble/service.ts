export interface AssembleInfo {
  id: number;
  name: string; // 方案名
  CPU: string; // CPU名称
  CPUPrice: number; // CPU单价
  CPULink: string; // CPU购买链接
  motherboard: string; //
  motherboardPrice: number; //
  motherboardLink: string; //
  memory: string; //
  memoryPrice: number; //
  memoryLink: string; //
  radiator: string; //
  radiatorPrice: number; //
  radiatorLink: string; //
  hardDisk: string; //
  hardDiskPrice: number; //
  hardDiskLink: string; //
  graphicsCard: string; //
  graphicsCardPrice: number; //
  graphicsCardLink: string; //
  powerSupply: string; //
  powerSupplyPrice: number; //
  powerSupplyLink: string; //
  chassis: string; //
  chassisPrice: number; //
  chassisLink: string; //
  fan: string; //
  fanPrice: number; //
  fanCount: number; //
  fanTotal: number; //
  fanLink: string; //
}

export const useService = () => {};
