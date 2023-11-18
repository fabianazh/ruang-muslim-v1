import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/ruang-muslim-v1/',
    plugins: [react()],
    server: {
        watch: {
            usePolling: true,
        },
    },
})
