import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import ViteEslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5175,
  },
  plugins: [ViteEslintPlugin({ cache: false }), react()],
});
