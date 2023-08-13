import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('users', {
  state: () => {
    // store 的数据以及修改数据的方法
    const userInfo = ref({
      name: '小猪课堂',
      age: 25,
      sex: '男',
    });
    const changeName = (name: string = 'Atlan') => {
      userInfo.value.name = name;
    };
    return {
      userInfo,
      changeName,
    };
  },
});
