import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: true, // 开启热更
    // host: "192.168.1.2",
    host: true,
    port: 3100,
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteCommonjs(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 全局引入css预处理文件，本质是使用到全局scss的地方，vite会在该行自动引入，路径就是下面的配置
  /**
   * 将下面的配置改成 "@import 'styles/index.scss';"，则控制台会出现下面的报错
   *  Plugin: vite:css
      File: /Users/shiyanghua/practice/vue3-practice/src/layout/components/Header.vue:1:9
      Error: Can't find stylesheet to import.
        ╷
      1 │ @import 'styles/index.scss';
        │         ^^^^^^^^^^^^^^^^^^^
        ╵
        src/layout/components/Header.vue 1:9  root stylesheet
   */
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/styles/index.scss';",
      },
    },
  },
  define: {
    'process.env': {},
  },
});
