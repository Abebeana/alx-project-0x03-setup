# ALX Listing App

A modern web application for listing and browsing items, built with Next.js and TypeScript.

## Features
- Next.js framework for server-side rendering and static site generation
- TypeScript for type safety
- Modular component structure
- Custom UI components (Button, Card)
- Centralized constants and interfaces
- Global and component-level styling

## Project Structure
```
components/         # Reusable UI components
  common/           # Common components (Button, Card)
constants/          # App-wide constants
interfaces/         # TypeScript interfaces and types
pages/              # Next.js pages (routes)
  api/              # API route handlers
public/             # Static assets (images, favicon)
styles/             # Global and component styles
```

## Getting Started

### Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <https://github.com/Abebeana/alx-listing-app.git>
   cd alx-listing-app
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Building for Production
```sh
npm run build
npm start
```

## Scripts
- `dev` – Start the development server
- `build` – Build the app for production
- `start` – Start the production server

## Customization
- Add new components in `components/`
- Update styles in `styles/`
- Add new pages in `pages/`

## License
This project is licensed under the MIT License.
