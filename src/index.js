import prompts from 'prompts';
import path from 'path';
import { createTemplateFiles } from './template.js';

async function main() {
    const response = await prompts([
        {
            type: 'text',
            name: 'projectName',
            message: 'Library name (kebab-case, e.g. my-react-lib):',
            validate: name => /^[a-z0-9-]+$/.test(name) || 'Use only lowercase letters, numbers, and hyphens'
        },
        {
            type: 'select',
            name: 'useTypescript',
            message: 'Do you want to use TypeScript or JavaScript?',
            choices: [
                { title: 'TypeScript', value: true },
                { title: 'JavaScript', value: false }
            ]
        }
    ]);

    const { projectName: libName, useTypescript } = response;
    const targetDir = path.join(process.cwd(), libName);

    console.log(`\n📁 Creating project in: ${targetDir}`);
    createTemplateFiles(targetDir, libName, useTypescript);

    console.log(`\n✅ Project created successfully!`);
    console.log(`\n👉 To test your library locally:
  cd ${libName}/playground && npm run dev`);
}

main();
