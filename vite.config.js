import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'tinacms-build',
      closeBundle() {
        // Only run during production build
        if (process.env.NODE_ENV === 'production') {
          try {
            console.log('Building TinaCMS admin panel...');
            execSync('npx tinacms build', { stdio: 'inherit' });
          } catch (error) {
            console.error('TinaCMS build failed:', error);
            process.exit(1);
          }
        }
      }
    }
  ]
})
