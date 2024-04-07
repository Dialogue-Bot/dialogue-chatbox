import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/chatbox/index.tsx'),
      name: 'ChatBox',
      fileName: (format) => `chatbox.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
        dir: 'dist-components',
      },
    },
  },
  plugins: [million.vite({ auto: true }), react(), tsconfigPaths()],
})
