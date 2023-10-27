import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const resolveEntryFileName = (entry) => {
  const { name } = entry

  const staticFileNames = ['content', 'background']

  let resolvedName:string
  
  if (staticFileNames.includes(name)) {
    resolvedName = `${name}.js`
  } else {
    resolvedName = 'main.[hash].js'
  }
  
  return resolvedName
}

  
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        content: path.resolve(__dirname, './src/extension/content.ts')
      },
      output: {
        entryFileNames: resolveEntryFileName
      }
    }
  }
})
