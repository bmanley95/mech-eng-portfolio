# Mechanical Engineering Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Perfect for showcasing mechanical engineering projects, experience, and skills.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Friendly**: Optimized for search engines
- **Easy Customization**: Simple configuration file for personal information
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 📱 Pages Included

- **About**: Personal introduction, skills, and professional overview
- **Projects**: Portfolio of engineering projects with detailed descriptions
- **Resume**: Professional experience, education, and certifications
- **Contact**: Contact form and professional information

## 🛠️ Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/mech-eng-portfolio.git
   cd mech-eng-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## ⚙️ Customization

### Personal Information

Edit `src/data/portfolioConfig.ts` to customize:

- Personal details (name, title, contact info)
- Bio and about section
- Skills and certifications
- Work experience
- Education
- Social media links

### Projects

Update the projects array in `src/pages/Projects.tsx` with your own projects.

### Styling

- Modify `tailwind.config.js` for theme customization
- Edit component styles in individual `.tsx` files
- Global styles in `src/index.css`

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The site will automatically deploy on every push to main

3. **Update Base URL**
   - Edit `vite.config.ts` and change the `base` property to match your repository name
   - Example: `base: '/your-repo-name/'`

### Manual Deployment

```bash
npm run deploy
```

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout.tsx      # Main layout with navigation
├── pages/              # Page components
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects showcase
│   ├── Resume.tsx      # Resume/CV page
│   └── Contact.tsx     # Contact page
├── data/               # Configuration and data
│   └── portfolioConfig.ts  # Main configuration file
├── assets/             # Static assets
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization Tips

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to the appropriate page
3. Update navigation in `Layout.tsx` if needed

### Changing Colors

Edit the Tailwind classes throughout the components or customize the theme in `tailwind.config.js`.

### Adding More Projects

Update the `projects` array in `src/pages/Projects.tsx` with your project details.

### Custom Animations

Framer Motion is already included. Add custom animations using the `motion` components.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/mech-eng-portfolio/issues).

## 📧 Support

If you have any questions or need help customizing the portfolio, feel free to reach out or create an issue.

---

**Made with ❤️ for Mechanical Engineers**
