# Dev Wisdom Dashboard

A curated interactive collection of professional development insights and lessons learned throughout my career in IT.

**Live Demo:** [https://voku.github.io/learnings/](https://voku.github.io/learnings/)

## 🚀 Features

- **Interactive Learning Cards**: Browse through categorized lessons with expandable content
- **Smart Search**: Find lessons by title, content, or tags
- **Category Organization**: Lessons organized into Agentic Coding, System Administration, Application Development, and General categories
- **Dark Mode Support**: Automatic theme adaptation for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Lesson Lifecycle Badges**: Lessons can be marked `active`, `evolved`, or `deprecated` to show how the underlying advice has aged

## 📚 Content Categories

1. **Agentic Coding**: Engineering lessons for working with coding agents — process, context, verification, and memory
2. **System Administration**: Infrastructure, operations, and IT fundamentals
3. **Application Development**: Software engineering best practices and principles
4. **General**: Career development, soft skills, and continuous learning

Coding agents do not replace engineering discipline — they make weak process, vague context, missing verification, and bad abstractions fail faster. Several pre-agent lessons have been kept but annotated with lifecycle metadata (see below) to show how their framing has evolved rather than being deleted.

## 🛠️ Run Locally

**Prerequisites:** Node.js (v16 or higher)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/voku/learnings.git
   cd learnings
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🚢 Deployment

This application is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

To deploy manually:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

## 📖 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling (via inline classes)
- **Lucide React** - Beautiful icon library

## 🔍 Key Files Detector Helper Prompt

When working with this codebase, the most important files to understand are:

- **`constants.tsx`** - Contains all lesson content and author information
- **`types.ts`** - TypeScript type definitions for lessons and categories
- **`App.tsx`** - Main application component with search and filtering logic
- **`components/LessonCard.tsx`** - Individual lesson card component
- **`vite.config.ts`** - Build configuration
- **`.github/workflows/deploy.yml`** - GitHub Pages deployment workflow

To add new lessons, edit the `LESSONS` array in `constants.tsx`. Each lesson should follow the `Lesson` type definition from `types.ts`.

### Lifecycle Metadata

The `Lesson` type supports optional fields to track how a lesson's relevance changes over time:

- **`status`**: `'active' | 'evolved' | 'deprecated'`. Defaults to `active` when omitted. Use `evolved` for a lesson that is still true but incomplete (e.g. it needs modern, agent-era framing). Use `deprecated` only when the original framing is now actively misleading.
- **`era`**: `'pre-agent' | 'agent-era'`. Marks which engineering era the lesson was written for.
- **`supersededBy`**: `string[]` of lesson IDs that refine or replace this one. Shown on the card as a "Superseded by" reference.
- **`note`**: A short string explaining how the lesson's framing has changed.

When a lesson gets superseded, **do not delete it**. Old lessons are usually still true in spirit — mark them `evolved` (or, rarely, `deprecated`) and add a `note` and `supersededBy` pointing at the newer lesson(s) instead. This keeps the history of "what we used to believe vs. what we believe now" visible rather than erasing it.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Submit bug reports or feature requests via GitHub Issues
- Fork the repository and submit pull requests
- Suggest new lessons or improvements to existing content

## 📄 License

MIT License - feel free to use this project as a template for your own learning collection.

## 👤 Author

**Lars Moelleken**

- GitHub: [@voku](https://github.com/voku)
- Roles: Assistant for business IT, IT specialist for system integration, IT specialist for application development

---

*Built with ❤️ using React, TypeScript, and Vite*
