import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
  plugins: [million.vite({ auto: true }), react(), tsconfigPaths()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/chatbox.tsx'),
      name: 'My Component',
      fileName: (format) => `chatbox.${format}.js`,
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
})
