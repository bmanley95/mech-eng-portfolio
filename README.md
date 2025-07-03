# Mechanical Engineering Portfolio

A modern, responsive, two-column mechanical engineering portfolio website built with React, TypeScript, and CSS Modules. Features interactive elements, smooth animations, and Google Calendar integration for easy meeting booking.

## Getting Started (Beginner-Friendly)

### Prerequisites

Before you begin, you'll need to install these tools on your computer:

1. **Install Node.js**
   - Visit [nodejs.org](https://nodejs.org/) and download the LTS version (recommended for most users)
   - Run the installer and follow the setup wizard
   - Verify installation by opening your terminal/command prompt and typing:
     ```bash
     node --version
     npm --version
     ```
   - You should see version numbers for both commands

2. **Install Git** (optional but recommended)
   - Visit [git-scm.com](https://git-scm.com/) and download Git for your operating system
   - Run the installer with default settings
   - Verify installation:
     ```bash
     git --version
     ```

3. **Choose a Code Editor** (optional but helpful)
   - [Visual Studio Code](https://code.visualstudio.com/) (free and popular)
   - [Sublime Text](https://www.sublimetext.com/)
   - Any text editor will work

### Installation Steps

1. **Get the code**

   ```bash
   git clone https://github.com/bmanley95/mech-eng-portfolio.git
   cd mech-eng-portfolio
   ```

2. **Install project dependencies**

   ```bash
   npm install
   ```

   _This downloads all the required packages for the project (may take a few minutes)_

3. **Start the development server**

   ```bash
   npm run dev
   ```

   _This starts a local web server for development_

4. **View your portfolio**
   - Open your web browser
   - Navigate to `http://localhost:5173`
   - You should see your portfolio website running locally!

### Troubleshooting

- **"Command not found" errors**: Make sure Node.js and npm are properly installed and added to your system PATH
- **Permission errors on Mac/Linux**: Try using `sudo npm install` (not recommended) or [fix npm permissions](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)
- **Port already in use**: If port 5173 is busy, Vite will automatically use the next available port (check your terminal output)
- **Still having issues?**: Check the [Node.js troubleshooting guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)

## ⚙️ Customization

### Portfolio Configuration

All content is managed through `src/data/localizedContent.ts`

Change the values in there and the file content in the `/public` folder, probably easiest to just keep the file names the same

---
