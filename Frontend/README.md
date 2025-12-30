# E-Commerce Landing UI (React + Tailwind)

This small sample implements a modern, responsive landing UI using React functional components and Tailwind CSS.

Files added:
- `src/components/Navbar.jsx`
- `src/components/CategoryCard.jsx`
- `src/components/CategoryList.jsx`
- `src/App.jsx`
- `src/main.jsx`
- `src/index.css`
- `public/index.html`

Getting started (if you don't have a project set up):
1. Initialize a React project (recommended: Vite):
   - `npm create vite@latest my-app --template react`
2. Install Tailwind:
   - `npm install -D tailwindcss postcss autoprefixer`
   - `npx tailwindcss init -p`
3. Configure `tailwind.config.cjs` to set content paths, e.g.:
   ```js
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
     theme: { extend: {} },
     plugins: [],
   }
   ```
4. Ensure `src/index.css` contains the Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`).
5. Run dev server:
   - `npm install`
   - `npm run dev` (Vite)

Notes:
- **Tailwind config files added**: `tailwind.config.cjs` and `postcss.config.cjs` were added to the project root.
- **Package.json**: A minimal `package.json` with `dev`, `build`, and `preview` scripts was created.

Install & run (one-time):
1. Install runtime deps:
   - `npm install react react-dom`
2. Install dev tools (Tailwind + Vite):
   - `npm install -D vite tailwindcss postcss autoprefixer`
   - (Optional) `npx tailwindcss init -p` — not required because config files are already present.
3. Start the dev server:
   - `npm run dev`

Next steps suggestions:
- Hook up real images and routes.
- Add keyboard navigation + a11y improvements.
- Add unit tests with React Testing Library.

If you'd like, I can add the Tailwind config and update `package.json` scripts now. Reply with which option you prefer.
