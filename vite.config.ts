import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Permite desativar o HMR em ambientes onde o watcher não deve ficar ativo.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Desativa o watcher quando o HMR estiver desligado.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
