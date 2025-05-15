export const packageJson = `{
  "name": "my-lib",
  "version": "0.1.0",
  "main": "dist/my-lib.umd.js",
  "module": "dist/my-lib.es.js",
  "types": "dist/types/index.d.ts",
  "files": ["dist"],
  "exports": {
    ".": {
      "import": "./dist/my-lib.es.js",
      "require": "./dist/my-lib.umd.js",
      "types": "./dist/types/index.d.ts"
    }
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0"
  }
}`;


export const tsconfig = `{
    "compilerOptions": {
      "target": "ESNext",
      "lib": ["DOM", "ESNext"],
      "module": "ESNext",
      "moduleResolution": "Node",
      "jsx": "react-jsx",
      "declaration": true,
      "declarationDir": "dist/types",
      "outDir": "dist",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true
    },
    "include": ["src"]
  }`;

export const viteConfig = `import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import path from 'path';
  
  export default defineConfig({
    plugins: [react()],
    build: {
      lib: {
        entry: ENTRY_PLACEHOLDER,
        name: 'MyLib',
        fileName: (format) => \`my-lib.\${format}.js\`
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      }
    }
  });`;



export const indexTs = `export { default as Button } from './Button';`;



export const playgroundPackageJson = (libName) => `{
    "name": "playground",
    "private": true,
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    },
    "dependencies": {
      "react": "^18.0.0",
      "react-dom": "^18.0.0",
      "${libName}": "file:.."
    },
    "devDependencies": {
      "vite": "^5.0.0",
      "@vitejs/plugin-react": "^4.0.0"
    }
  }`;

export const playgroundViteConfig = `import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  
  export default defineConfig({
    plugins: [react()]
  });`;

export const playgroundMain = `import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );`;

export const playgroundApp = (libName) => `import React from 'react';
  import { Button } from '${libName}';
  
  export default function App() {
    return (
      <div style={{ padding: 40 }}>
        <h1>Testing ${libName}</h1>
        <Button />
      </div>
    );
  }`;

export const playgroundIndexHtml = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Playground</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/main.tsx"></script>
    </body>
  </html>`;

export const readme = `# My React Component Library
  
  This is a modern React component library built with [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), and [React](https://reactjs.org/).
  
  ## 🛠 Development
  
  \`\`\`bash
  npm run dev     # Run Vite in dev mode
  npm run build   # Build the library
  \`\`\`
  
  ## 📁 Project Structure
  
  - \`src/\`: Source code for your component(s)
  - \`playground/\`: Local app to test components
  
  ## 🚀 Publishing
  
  After building, publish to npm:
  \`\`\`bash
  npm publish --access public
  \`\`\``;



export const jsIndex = `export { default as Button } from './Button';`;

export const jsMain = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

export const jsApp = (libName) => `import React from 'react';
import { Button } from '${libName}';

export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Testing ${libName}</h1>
      <Button />
    </div>
  );
}`;


export const playgroundTsconfig = (libName) => `{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "${libName}": ["../src"]
    }
  }
}`;


export const buttonComponent = `import React from 'react';

type ButtonProps = {
  label?: string;
  onClick?: () => void;
};

export default function Button({ label = 'Hello from Button', onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#1d4ed8',
        color: 'white',
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
}`;

export const jsButtonComponent = `import React from 'react';

export default function Button({ label = 'Hello from Button', onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#1d4ed8',
        color: 'white',
        border: 'none',
        borderRadius: '0.375rem',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
}`;
