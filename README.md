# PORTUI

A modern, open-source collection of customizable web application UI components, built for rapid development and beautiful design. PORTUI enables you to copy, paste, and customize a wide variety of components and blocks for your Next.js and React projects, with a focus on accessibility, performance, and developer experience.

---

## 🚀 Features

- **50+ Ready-to-Use Components**: Buttons, cards, alerts, lists, pricing tables, profiles, toolbars, and more.
- **Modern UI Blocks**: AI chat, AI card generation, authentication, dashboards, minimal shop, and more.
- **Beautiful Animations**: Powered by Framer Motion and Motion One.
- **Fully Customizable**: Built with Tailwind CSS v4 and shadcn/ui for easy theming and customization.
- **Accessible & Responsive**: Components are accessible and mobile-friendly by default.
- **Documentation**: Built-in docs and live previews for every component.

---

## 📁 Folder Structure

```
portui/
├── app/                # Next.js app directory (pages, layouts, API routes)
│   ├── (root)/         # Main app pages and layout
│   ├── api/            # API routes (e.g., search)
│   ├── docs/           # Documentation pages
│   ├── preview/        # Component/block preview pages
│   └── ...
├── components/         # All UI components and blocks
│   ├── landing/        # Landing page sections (Hero, Features, etc.)
│   ├── layout/         # Layout components (Footer, Header)
│   ├── mdx/            # MDX preview and helpers
│   ├── nav/            # Navigation components
│   ├── portui/         # Main component library (blocks, buttons, cards, etc.)
│   ├── ui/             # shadcn/ui-based primitives (Button, Card, etc.)
│   └── ...
├── config/             # Site and navigation configuration
├── content/            # MDX documentation content
│   └── docs/           # Docs for components, blocks, hooks
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, JSON registry)
├── registry/           # Component/block registry and schema
├── scripts/            # Build and registry scripts
├── styles/             # Global styles (Tailwind, CSS)
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── ...
```

---

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Framer Motion** & **Motion One** (animations)
- **TypeScript**
- **Lucide Icons**
- **Fumadocs** (for documentation)

---

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## 📚 Usage

- Browse and preview components and blocks in the documentation section (`/docs`).
- Copy and customize components for your own projects.
- Use the registry JSON files in `public/r/` for integration with other tools or platforms.

---

## 📝 Contributing

Contributions are welcome! Please open issues or pull requests for bug fixes, new components, or improvements.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🌐 Links

- [Live Demo](https://codesnippetui-demo.vercel.app/)
- [Documentation](#)
- [GitHub](#)
- [Twitter](#)
- [Discord](#)

---

## 🙏 Credits

- Inspired by [shadcn/ui](https://ui.shadcn.com/), [Vercel](https://vercel.com/),[Framer Motion](https://motion.dev/) and the open-source community.

