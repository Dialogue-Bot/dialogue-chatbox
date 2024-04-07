import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      formats: ['es', 'umd'],
      name: 'chatbox',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist-components',
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    million.vite({ auto: true }),
    react(),
    tsconfigPaths(),
  ],
})
