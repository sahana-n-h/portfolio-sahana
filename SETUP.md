# Portfolio Website Setup Guide

This guide will help you set up and run your portfolio website from scratch.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js) or **yarn**
   - Verify npm: `npm --version`
   - Or install yarn: `npm install -g yarn`

3. **Git** (for version control)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

4. **Docker** (optional, for containerization)
   - Download from: https://www.docker.com/
   - Verify installation: `docker --version`

## Step 1: Project Setup

### Option A: Create New Project
\`\`\`bash
# Create a new Next.js project
npx create-next-app@latest sahana-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Navigate to project directory
cd sahana-portfolio
\`\`\`

### Option B: Clone from Repository (if you have one)
\`\`\`bash
# Clone the repository
git clone <your-repository-url>
cd sahana-portfolio
\`\`\`

## Step 2: Install Dependencies

\`\`\`bash
# Install all required dependencies
npm install

# Or if using yarn
yarn install
\`\`\`

### Required Dependencies
The project uses these main dependencies:
- Next.js 14
- React 19
- TypeScript
- Tailwind CSS
- Radix UI components
- Lucide React icons
- React Hook Form
- Zod validation

## Step 3: Project Structure

Your project should have this structure:
\`\`\`
sahana-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects/
│       └── [slug]/
├── components/
│   ├── ui/
│   ├── certifications-section.tsx
│   ├── publications-section.tsx
│   └── ...
├── data/
│   └── portfolio-data.json
├── lib/
│   ├── data.ts
│   ├── projects.ts
│   └── utils.ts
├── public/
│   └── images/
├── Dockerfile
├── next.config.mjs
└── package.json
\`\`\`

## Step 4: Configuration

### Update Portfolio Data
1. Edit `data/portfolio-data.json` with your information
2. Replace placeholder images in the `public/` directory
3. Update social media links and contact information

### Environment Variables (if needed)
Create a `.env.local` file in the root directory:
\`\`\`env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

## Step 5: Development

### Start Development Server
\`\`\`bash
# Start the development server
npm run dev

# Or with yarn
yarn dev
\`\`\`

The application will be available at `http://localhost:3000`

### Available Scripts
\`\`\`bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
\`\`\`

## Step 6: Customization

### Adding Your Content
1. **Personal Information**: Update `data/portfolio-data.json`
2. **Projects**: Modify `lib/projects.ts`
3. **Images**: Add your images to `public/` directory
4. **Styling**: Customize colors in `tailwind.config.ts`

### Adding New Sections
1. Create new components in `components/`
2. Update navigation in `portfolio-data.json`
3. Add sections to `app/page.tsx`

## Step 7: Production Build

### Local Production Build
\`\`\`bash
# Build the application
npm run build

# Start production server
npm run start
\`\`\`

### Docker Deployment
\`\`\`bash
# Build Docker image
docker build -t sahana-portfolio .

# Run Docker container
docker run -p 3000:3000 sahana-portfolio
\`\`\`

## Step 8: Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out/` directory

### Docker
Use the provided Dockerfile for containerized deployment

## Troubleshooting

### Common Issues

1. **Node.js Version**: Ensure you're using Node.js 18+
2. **Dependencies**: Delete `node_modules` and `package-lock.json`, then run `npm install`
3. **Images**: Make sure all image paths in JSON match files in `public/`
4. **Build Errors**: Check TypeScript errors with `npm run lint`

### Getting Help
- Check the console for error messages
- Verify all file paths are correct
- Ensure all required dependencies are installed

## Next Steps

1. **Content**: Add your actual projects and experience
2. **Images**: Replace placeholder images with your own
3. **Customization**: Adjust colors, fonts, and layout
4. **SEO**: Update meta tags and add sitemap
5. **Analytics**: Add Google Analytics or similar
6. **Performance**: Optimize images and code splitting

## Maintenance

### Regular Updates
\`\`\`bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
\`\`\`

### Backup
- Regularly commit changes to Git
- Keep backups of your `data/` directory
- Document any custom modifications

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure file paths are correct
4. Check that all required environment variables are set

Your portfolio website is now ready! 🎉
