# BrightOps Group Website

A modern, responsive static website for BrightOps Group showcasing cloud consulting services tailored specifically for startups.

![BrightOps Group Logo](client/src/assets/logo.png)

## Project Overview

The BrightOps Group website is built as a static site for Cloudflare Pages. It features a clean, professional design with a fun, laid-back startup vibe to showcase cloud consulting services.

### Technology Stack

- **Frontend**: React.js with TypeScript
- **Styling**: TailwindCSS
- **Build System**: Vite
- **Deployment Platform**: Cloudflare Pages

### Key Features

- Responsive design that works on mobile, tablet, and desktop devices
- Modern, interactive UI elements with subtle animations
- Optimized performance with quick load times
- SEO-friendly structure
- Static site compatible with Cloudflare Pages hosting

## Local Development

### Prerequisites

- Node.js 22 or newer
- npm

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/brightopsgroup/brightopsgroup.github.io.git
   cd brightopsgroup.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the Vite URL shown in the terminal, usually `http://localhost:5173`

## Building for Production

When you're ready to build the site for production:

```bash
npm run build
```

This creates a production-ready build in the `dist` directory.

## Deploying to Cloudflare Pages

The project is configured for Cloudflare Pages in `wrangler.toml`.

Use these Cloudflare Pages settings if connecting the GitHub repository through the dashboard:

- **Production branch**: `main`
- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 22 or newer

To deploy manually with Wrangler:

```bash
npm ci
npm run build
npx wrangler pages deploy dist --project-name brightopsgroup
```

The custom domain `brightopsgroup.com` should be attached to the Cloudflare Pages project in Cloudflare.

## Project Structure

```
brightopsgroup.github.io/
├── client/              # Frontend code
│   ├── public/           # Cloudflare Pages static config such as _redirects
│   ├── src/             # Source files
│   │   ├── assets/      # Images, fonts, etc.
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main App component
│   │   ├── index.css    # Global CSS
│   │   └── main.tsx     # Entry point
│   └── index.html       # HTML template
├── docs/                # Legacy GitHub Pages build output
├── dist/                # Cloudflare Pages build output after running build
├── server/              # Legacy server scaffold, not used by Cloudflare Pages
└── README.md            # This file
```

## Customization

### Updating Content

Most content can be updated by editing the component files in `client/src/components/`:

- `Hero.tsx` - Main headline and intro text
- `Services.tsx` - Service offerings
- `About.tsx` - About section content
- `Tools.tsx` - BrightOps tools information
- `Contact.tsx` - Contact information
- `Footer.tsx` - Footer content and links

### Changing Styles

The project uses TailwindCSS for styling. The main theme colors and fonts are defined in:

- `client/src/index.css` - Global styles and theme variables
- `tailwind.config.ts` - TailwindCSS configuration

## Contact

For any questions about this project, please contact:
- Email: brightopsgroup@gmail.com
- Location: South Jordan, UT
- LinkedIn: [BrightOps Group](https://www.linkedin.com/company/brightops-group)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
