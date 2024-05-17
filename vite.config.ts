import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
  plugins: [million.vite({ auto: true }), react(), tsconfigPaths()],
  server: {
    port: 5175,
    host: true,
  },
  preview: {
    port: 5175,
    host: true,
  },
  build: {
    outDir: 'chatbox',
  },
})
