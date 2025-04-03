import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import livewire from '@defstudio/vite-livewire-plugin';

export default defineConfig({
    server: {
        host: '0.0.0.0',
        hmr: {
            host: 'localhost',
        }
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        livewire({
            refresh: ['resources/css/app.css'],
        }),
    ],
});
