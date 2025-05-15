// README.md

# 🧱 create-react-lib-vite

A modern CLI tool to scaffold React component libraries using **Vite**, with support for both **TypeScript** and **JavaScript**, and a built-in **Playground** for local testing.

---

## 🚀 Features

- ⚡ Vite-powered build system
- 📦 Preconfigured for npm publishing
- 🔷 TypeScript or 🟨 JavaScript support
- 🧪 Local playground for live component testing
- 🧹 Clean and minimal folder structure
- 🔧 Includes basic styling and prop support out of the box

---

## 🛠 Getting Started

### Run the CLI

```bash
npx create-react-lib-vite
```

You’ll be prompted to:
- Enter a package name (e.g. `my-button-lib`)
- Choose between TypeScript or JavaScript

---

## 📁 Folder Structure

```bash
my-button-lib/
├── src/                # Component source code
│   ├── Button.tsx|jsx
│   └── index.ts|js
├── dist/               # Compiled library (after build)
├── vite.config.ts      # Library bundler config
├── package.json        # Pre-configured for npm
├── README.md           # Library usage instructions
├── tsconfig.json       # (only if TypeScript)
└── playground/         # Demo app to test components
    ├── App.tsx|jsx
    ├── main.tsx|jsx
    ├── vite.config.ts
    ├── index.html
    └── tsconfig.json   # (only if TypeScript)
```

---

## 🔨 Building the Library

From the project root:

```bash
npm run build
```

This will output:
- `dist/my-lib.es.js`
- `dist/my-lib.umd.js`
- `dist/types/index.d.ts` (if TS enabled)

---

## 🧪 Running the Playground

```bash
cd my-button-lib/playground
npm run dev
```

This launches a local dev server where you can test and visually validate your component.

---

## 📦 Publishing to npm

Ensure your `package.json` is configured with:
- A valid name
- Entry points (`main`, `module`, `types`)
- Author, license, and version

Then publish:

```bash
npm login
npm publish --access public
```

---

## 🤝 Contributing

We welcome and appreciate all contributions — from bug fixes to new features.

To get started, please read our [CONTRIBUTING.md](./CONTRIBUTING.md) guide for detailed instructions.



---

## 👤 Autho

**Piyush Prashant**  
GitHub: [@piyushprashant93](https://github.com/piyushprashant93)

---

## 📌 License

MIT © Piyush Prashant
