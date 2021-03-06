import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve('/src', 'main.ts'),
            name: 'ukraine-banner',
        }
    },
    plugins: [svelte({
        compilerOptions: {
            customElement: true
        }
    })],
    resolve: {
        alias: {
            '@': path.resolve('/src'),
        }
    }
})