<h1 align="center">
   Final Project: Cloud Full-Stack Deployment 
</h1>

---

# Documentation in English

This is a professional portfolio developed with modern technologies to showcase my skills, projects, and experience as a full stack developer. The website features an interactive interface with fluid animations, dynamic code display, and responsive design.

## Key Features

- **Responsive Design**: Adapted for all devices, from smartphones to desktops
- **Interactive Animations**: Using GSAP and Framer Motion for transitions and visual effects
- **Dynamic Code Display**: Code visualization with syntax highlighting and typing effect
- **Featured Technologies**: Display of mastered technologies with category filtering
- **Reviews**: Section showing feedback from clients and colleagues
- **Contact Form**: Integration for direct communication

## Technologies Used

- **Next.js**: React framework with server-side rendering
- **TypeScript**: Static typing for safer and more maintainable code
- **Tailwind CSS**: Rapid and responsive styling with utility classes
- **GSAP**: Advanced animation library for visual effects
- **Framer Motion**: React component animations
- **React Icons**: Icon set for modern interfaces
- **ClientOnly**: Component for exclusive client-side rendering (hydration issue resolution)

## Available Routes

- **/** : Home page with introduction and skills demonstration
- **/projects**: Portfolio of completed projects
- **/contact**: Contact form and connection information

## Setup and Configuration

### Configuring GitHub Integration

To display your GitHub projects and contribution charts, configure the following environment variables:

1. **Create a GitHub Token (required to avoid rate limiting)**:
   - Go to [GitHub Settings > Tokens](https://github.com/settings/tokens)
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name like "Portfolio Projects API"
   - Select only these permissions: `public_repo` and `read:user`
   - Click "Generate token" and copy the generated value

2. **Configure environment variables**:
   ```bash
   # Copy the example file
   cp .env.example .env.local

   # Edit .env.local with your information:
   GITHUB_TOKEN=your_token_here
   NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
   NEXT_PUBLIC_PORTFOLIO_TAG=portfolio-project
   ```

3. **Tag projects for portfolio display**:
   - Go to the repositories you want to showcase
   - Go to "Settings" → "General" → "Topics"
   - Add the tag `portfolio-project` (or the tag configured in `NEXT_PUBLIC_PORTFOLIO_TAG`)

### Configuring Dev.to Integration

To display your Dev.to articles, just configure your username:

```bash
# In .env.local file, add or edit:
NEXT_PUBLIC_DEVTO_USERNAME=your_devto_username
```

If not configured, the system will use "adamsnows" as default.

### GitHub Project Tags Structure

The system automatically categorizes your projects based on tags:
- `backend` or `back-end` → **Back end**
- `frontend` or `front-end` → **Front end**
- `fullstack` or `full-stack` → **Full stack**
- `mobile` → **Mobile**
- `devops` → **DevOps**

### GitHub Charts and Contributions

The contribution chart is automatically loaded using the username configured in `NEXT_PUBLIC_GITHUB_USERNAME`. It shows:
- Contributions from the last 365 days
- Total commit statistics
- Interactive contribution calendar visualization

## Installation

To run this project locally, follow these instructions:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/dev-portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dev-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Configure environment variables:

   ```bash
   cp .env.example .env.local
   # Edit .env.local file with your configurations
   ```

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Access the application in your browser:

   ```
   http://localhost:3000/
   ```

## Deployment and CI/CD

This project is configured with automated CI/CD using GitHub Actions for deployment to Vercel:

1. Every push to the `main` or `master` branch triggers a production deployment
2. Every pull request generates a preview deployment

For detailed information on the CI/CD setup, see [CI/CD README](./.github/CI_CD_README.md).

## Technical Solutions Implemented

- **Hydration Error Prevention**: Use of ClientOnly components to ensure compatibility between server and client rendering
- **Dynamic Code Animation**: Robust system for code animation with retry and fallback mechanisms
- **Reusable Components**: Modular structure for efficient maintenance
- **Image Optimization**: Use of Next.js image optimization system
- **Automated CI/CD**: GitHub Actions workflow for automated deployment to Vercel
- **Dependency Management**: Custom configuration to handle complex library dependencies
- **GitHub API Integration**: Caching system to optimize GitHub API requests
- **Dev.to API Integration**: Automatic loading of published articles
- **Contribution Charts**: Interactive visualization of GitHub contributions

## Contribution

Suggestions and contributions are welcome! Feel free to open a PR or report issues.

## License

This project is under the [MIT License](https://opensource.org/licenses/MIT).

---

<div align="center">
   <span>Many Thanks to</a>
   <span>Developed by </span><a href="https://github.com/adamsnows">Adam Neves</a><br/>
   <span>Based on the original template by </span><a href="https://github.com/vagnermengali/developer-blue-portfolio">Vagner Mengali</a>
</div>
