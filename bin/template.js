// bin/template.js
import {
    packageJson,
    tsconfig,
    viteConfig,
    indexTs,
    buttonComponent,
    playgroundMain,
    playgroundApp,
    playgroundPackageJson,
    playgroundViteConfig,
    playgroundIndexHtml,
    playgroundTsconfig,
    jsButtonComponent,
    jsIndex,
    jsMain,
    jsApp,
    readme
} from './template-content.js';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

export function createTemplateFiles(targetDir, libName, useTypescript = true) {
    fs.mkdirSync(path.join(targetDir, 'src'), { recursive: true });
    fs.mkdirSync(path.join(targetDir, 'playground'), { recursive: true });

    const viteConfigContent = viteConfig.replace(
        'ENTRY_PLACEHOLDER',
        useTypescript
            ? "path.resolve(__dirname, 'src/index.ts')"
            : "path.resolve(__dirname, 'src/index.js')"
    );

    fs.writeFileSync(path.join(targetDir, 'package.json'), packageJson.replace(/"name":\s*"my-lib"/, `"name": "${libName}"`));
    fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
    fs.writeFileSync(path.join(targetDir, 'vite.config.ts'), viteConfigContent);

    if (useTypescript) {
        fs.writeFileSync(path.join(targetDir, 'tsconfig.json'), tsconfig);
        fs.writeFileSync(path.join(targetDir, 'src', 'index.ts'), indexTs);
        fs.writeFileSync(path.join(targetDir, 'src', 'Button.tsx'), buttonComponent);
        fs.writeFileSync(path.join(targetDir, 'playground', 'main.tsx'), playgroundMain);
        fs.writeFileSync(path.join(targetDir, 'playground', 'App.tsx'), playgroundApp(libName));
        fs.writeFileSync(path.join(targetDir, 'playground', 'index.html'), playgroundIndexHtml);
        fs.writeFileSync(path.join(targetDir, 'playground', 'tsconfig.json'), playgroundTsconfig(libName));
    } else {
        fs.writeFileSync(path.join(targetDir, 'src', 'index.js'), jsIndex);
        fs.writeFileSync(path.join(targetDir, 'src', 'Button.jsx'), jsButtonComponent);
        fs.writeFileSync(path.join(targetDir, 'playground', 'main.jsx'), jsMain);
        fs.writeFileSync(path.join(targetDir, 'playground', 'App.jsx'), jsApp(libName));
        fs.writeFileSync(path.join(targetDir, 'playground', 'index.html'), playgroundIndexHtml.replace('/main.tsx', '/main.jsx'));
    }

    fs.writeFileSync(path.join(targetDir, 'playground', 'package.json'), playgroundPackageJson(libName));
    fs.writeFileSync(path.join(targetDir, 'playground', 'vite.config.ts'), playgroundViteConfig);

    // Build the library immediately so playground can import it
    execSync('npm install', { cwd: targetDir, stdio: 'inherit' });
    execSync('npm run build', { cwd: targetDir, stdio: 'inherit' });
    execSync('npm install', { cwd: path.join(targetDir, 'playground'), stdio: 'inherit' });
}