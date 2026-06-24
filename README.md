# Yardy Financial Website

A modern, responsive website for Yardy Financial built with [Eleventy](https://www.11ty.dev/).

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yardyfinancial/carl.git
cd carl
```

2. Install dependencies:
```bash
npm install
```

### Development

To run the development server with live reload:
```bash
npm start
```

The site will be available at `http://localhost:8080`

### Build

To build the site for production:
```bash
npm run build
```

The output will be in the `public/` directory.

## Project Structure

```
.
├── docs/
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── home.html
│   │   │   └── base.html
│   │   ├── assets/
│   │   │   └── style.css
│   │   ├── index.md
│   │   ├── about.md
│   │   ├── services.md
│   │   └── contact.md
├── .eleventy.js
├── package.json
└── README.md
```

## Pages

- **Home** (`/`) - Main landing page
- **About** (`/about/`) - Company information and values
- **Services** (`/services/`) - Overview of financial services
- **Contact** (`/contact/`) - Contact information and inquiry form

## Styling

The website uses a custom CSS stylesheet (`docs/assets/style.css`) with a professional color scheme:
- Primary: #003366 (Navy Blue)
- Accent: #ffc107 (Gold)

## Deployment

To deploy this site, you can:

1. **GitHub Pages**: Enable GitHub Pages in repository settings and set the source to the `public/` folder
2. **Netlify**: Connect your GitHub repository to Netlify for automatic deployments
3. **Vercel**: Deploy directly from GitHub
4. **Any static host**: Upload the contents of the `public/` folder

## License

Private - Yardy Financial
