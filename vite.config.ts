import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite'; // There's nothing wrong with it! Shut up!

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
  server: {
    watch: { usePolling: true},
    fs: {
        allow:[".."]
    }
  }
})
