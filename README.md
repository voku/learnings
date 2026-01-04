# Dev Wisdom Dashboard

A curated interactive collection of professional development insights and lessons learned throughout my career in IT.

**Live Demo:** [https://voku.github.io/learnings/](https://voku.github.io/learnings/)

## 🚀 Features

- **Interactive Learning Cards**: Browse through categorized lessons with expandable content
- **Smart Search**: Find lessons by title, content, or tags
- **Category Organization**: Lessons organized into System Administration, Application Development, and General categories
- **Dark Mode Support**: Automatic theme adaptation for comfortable viewing
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📚 Content Categories

1. **System Administration**: Infrastructure, operations, and IT fundamentals
2. **Application Development**: Software engineering best practices and principles
3. **General**: Career development, soft skills, and continuous learning

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
