import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
      alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser', // ensures browser compatible version of AWS JS SDK is used
      },
    ]
  }
})