# Mechanical Engineering Portfolio

A modern, responsive, two-column mechanical engineering portfolio website built with React, TypeScript, and CSS Modules. Features interactive elements, smooth animations, and Google Calendar integration for easy meeting booking.

## 🛠️ Tech Stack

- **React 19** - Modern UI library with latest features
- **TypeScript** - Type-safe development
- **CSS Modules** - Scoped styling with CSS custom properties
- **Vite** - Lightning-fast development and builds
- **Lucide React** - Beautiful, consistent icons

## 📱 Layout Structure

### Desktop (1025px+)

- **Left Column**: Fixed sidebar with profile, navigation, and social links
- **Right Column**: Scrollable content with fade effects

### Tablet and Mobile (1024px and below)

- **Single Column**: Stacked layout with sticky section headers
- **Hidden Navigation**: Simplified mobile experience

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/bryce-mcmath/mech-eng-portfolio.git
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

### Portfolio Configuration

All content is managed through `src/data/portfolioConfig.ts`:

```typescript
export const portfolioConfig = {
  // Personal Information
  name: 'Your Name',
  title: 'Your Title',
  location: 'Your Location',
  email: 'your@email.com',
  tagline: 'Your personal tagline',

  // Google Calendar Integration
  calendarUrl: 'https://calendar.google.com/calendar/appointments/...',

  // Bio sections with HTML support
  bio: {
    intro: 'Your introduction with <strong>HTML formatting</strong>',
    experience: 'Your experience description',
    personal: 'Personal interests and hobbies',
  },

  // Social links
  social: {
    linkedin: 'https://linkedin.com/in/yourprofile',
  },

  // Work experience with external links
  workExperience: [
    {
      title: 'Job Title',
      company: 'Company Name',
      location: 'Location',
      duration: 'Date Range',
      description: 'Job description',
      technologies: ['Tech1', 'Tech2'],
      link: 'https://company-website.com', // Optional
    },
  ],

  // Projects with thumbnails and links
  projects: [
    {
      title: 'Project Name',
      description: 'Project description',
      technologies: ['Tech1', 'Tech2'],
      thumbnailImg: 'project-image.png', // Place in public folder
      link: 'project-link.pdf', // Optional, for PDFs or external links
    },
  ],
}
```

### Asset Management

- **Profile Pictures**: Place in `public/` folder and reference in config
- **Project Thumbnails**: Add images to `public/` and reference in project config
- **Resume**: Replace `brandon_manley_resume.pdf` in `public/` folder
- **Favicon**: Replace `favicon.png` in `public/` folder

### Google Calendar Setup

1. **Create Appointment Schedule** in Google Calendar
2. **Get Booking URL** from your appointment schedule settings (usually shows up as <iframe src="URL_HERE" ...>)
3. **Update Config** with your calendar URL in `portfolioConfig.ts`

### Styling Customization

CSS custom properties in `src/index.css`:

```css
:root {
  --color-text-primary: #e2e8f0;
  --color-text-secondary: #94a3b8;
  --color-accent: #14b8a6;
  --color-background: #0f172a;
  /* Spacing, fonts, and other design tokens */
}
```

### Google Analytics 4 Setup

The portfolio includes privacy-friendly GA4 integration:

1. **Create GA4 Property**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Configure Environment Variable**:

   ```bash
   # Create .env file in project root
   echo "VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX" > .env
   ```

3. **Privacy Features Included**:
   - IP anonymization enabled
   - Google signals disabled
   - Ad personalization disabled
   - User opt-out support

4. **Event Tracking**:
   - Page views and section navigation
   - External link clicks (social, experience, projects)
   - Resume downloads
   - Calendar modal interactions

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### GitHub Pages

1. **Configure for GitHub Pages**

   ```typescript
   // vite.config.ts
   export default defineConfig({
     base: '/your-repository-name/', // Match your GitHub repo name
   })
   ```

2. **Push to GitHub and Enable Pages**
   - Repository Settings → Pages → Source: "GitHub Actions"
   - Automated deployment on every push to main branch

### Custom Domain

1. **Configure for Custom Domain**

   ```typescript
   // vite.config.ts
   export default defineConfig({
     base: '/', // Root path for custom domains
   })
   ```

2. **Add CNAME File**

   ```
   // public/CNAME
   yourdomain.com
   ```

3. **Update DNS Settings** at your domain provider

### Content Security Policy

The portfolio includes CSP headers for Google Calendar integration. If you encounter issues:

```html
<!-- index.html -->
<meta
  http-equiv="Content-Security-Policy"
  content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://calendar.google.com;
  frame-src 'self' https://calendar.google.com;
  /* ... other CSP directives ... */
"
/>
```

## 📂 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── Sparkle.tsx         # Animated sparkle effects
│   └── CalendarModal.tsx   # Google Calendar booking modal
├── pages/                  # Main page components
│   ├── Home.tsx           # Single-page application main component
│   └── Home.module.css    # CSS Modules styling
├── data/                  # Configuration and content
│   └── portfolioConfig.ts # Central configuration file
├── assets/               # Static assets and images
├── App.tsx              # Root application component
├── main.tsx            # Application entry point
└── index.css          # Global styles and CSS custom properties

public/
├── profile_picture.jpeg    # Profile image
├── project_placeholder.png # Fallback project image
├── resume.pdf             # Resume/CV file
├── robots.txt            # SEO robots file
├── sitemap.xml          # SEO sitemap
├── 404.html            # SPA routing fallback
└── CNAME              # Custom domain configuration
```

## 🔧 Development Features

- **Hot Module Replacement**: Instant updates during development
- **TypeScript**: Full type safety and IntelliSense
- **CSS Modules**: Scoped styling with zero conflicts
- **ESLint & Prettier**: Code quality and formatting
- **VS Code Integration**: Optimized development experience

## 🎯 Getting Started Checklist

0. If you're on a Mac, open a terminal and run the following command:

```bash
brew install nvm
```

Then use nvm to install and active the latest Node 22.

```bash
nvm install lts/jod
nvm use lts/jod
```

1. **✅ Clone and Setup**

   ```bash
   git clone https://github.com/bryce-mcmath/mech-eng-portfolio.git
   cd mech-eng-portfolio
   npm install
   npm run dev
   ```

2. **✅ Customize Content**
   - Update `src/data/portfolioConfig.ts` with your information
   - Replace profile picture in `public/` folder
   - Add project thumbnails to `public/` folder
   - Replace resume PDF in `public/` folder

3. **✅ Setup Google Calendar** (Optional)
   - Create Google Calendar appointment schedule
   - Update `calendarUrl` in portfolio config

4. **✅ Setup Google Analytics** (Optional)
   - Create a GA4 property in Google Analytics
   - Copy your Measurement ID (G-XXXXXXXXXX)
   - Add to `.env` file: `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

5. **✅ Configure Deployment**
   - For GitHub Pages: Set `base: '/repository-name/'` in `vite.config.ts`
   - For custom domain: Set `base: '/'` and add `CNAME` file

6. **✅ Deploy**
   - Push to GitHub and enable Pages in repository settings
   - Or configure custom domain DNS settings

## 🚀 Performance & SEO

- **Lighthouse Score**: Optimized for 90+ scores across all metrics
- **Core Web Vitals**: Excellent loading and interactivity
- **SEO**: Complete meta tags, structured data, and sitemap
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Mobile-First**: Responsive design with touch-friendly interactions
- **Google Analytics 4**: Privacy-friendly analytics with event tracking

---
