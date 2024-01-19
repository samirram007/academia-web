import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        https: {
            key: './cert/cert.key',
            cert: './cert/cert.crt'
        },
        hmr: {
            overlay: true, // Disable the HMR overlay
        },
    },
    plugins: [react()],
})
