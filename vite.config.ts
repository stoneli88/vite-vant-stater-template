import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import viteEslint from 'vite-plugin-eslint'
import { viteMockServe } from 'vite-plugin-mock'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconResolver from 'unplugin-icons/resolver'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2020'
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  },
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  plugins: [
    vue(),
    Unocss(),
    Icons({
      compiler: 'vue3',
      customCollections: {
        // 自定义图标自动获取并导入。
        custom: FileSystemIconLoader('./src/assets/icons', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    }),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
        {
          '@vueuse/integrations': ['useAxios'],
          '@vueuse/router': ['useRouteHash', 'useRouteQuery', 'useRouteParams']
        }
      ]
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        VantResolver({ importStyle: 'css' }),
        IconResolver({
          customCollections: ['custom']
        })
      ]
    }),
    viteMockServe({
      mockPath: 'mocks',
      localEnabled: true,
      prodEnabled: false,
      injectCode: `
          import { setupProdMockServer } from './mocks/index';
          setupProdMockServer();
        `
    }),
    viteEslint()
  ]
})
