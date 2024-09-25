# Movie Search App

This is a [Next.js](https://nextjs.org) project for searching movies using the OMDB API.

## Live Demo

[https://movie-search-app-lime-seven.vercel.app/](https://movie-search-app-lime-seven.vercel.app/)

## Video Demo

[Watch the video](https://github.com/user-attachments/assets/1b16d6f8-ce4b-48fa-98ca-c78c4fab7bef)

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: State management library.
- **Tailwind CSS**: Utility-first CSS framework.
- **TypeScript**: Typed superset of JavaScript.
- **OMDB API**: API for fetching movie data.

## Features

- **Movie Search**: Search for movies by title.
- **Debounced Search**: Optimized search with debounce to reduce API calls.
- **Movie Details**: View detailed information about a selected movie.
- **Loading Skeletons**: Display loading skeletons while fetching data.
- **Responsive Design**: Mobile-friendly and responsive UI.
- **Accessible Design**: Compliance with Web Accessibility Guidelines-Section 508
- **Error Handling**: Graceful error handling for API requests.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your OMDB API key and URL:

   ```env
   NEXT_PUBLIC_OMDB_API_KEY=your_api_key
   NEXT_PUBLIC_OMDB_API_URL=https://www.omdbapi.com/
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

### Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

### Starting the Production Server

To start the production server, run:

npm run start

# or

yarn start

## Project Structure

- `app/`: Contains the main application components and pages.
  - `layout.tsx`: Defines the root layout of the application.
  - `globals.css`: Global CSS styles.
  - `movie-detail/`: Contains components related to movie details.
  - `page.tsx`: Main page component.
- `components/`: Contains reusable UI components.
  - `client-provider.tsx`: Client-side provider component.
  - `icons/`: Contains icon components.
  - `ui/`: Contains UI components.
- `hooks/`: Contains custom React hooks.
  - `useDebounce.ts`: Custom debounce hook.
- `store/`: Contains Redux store configuration and slices.
  - `index.ts`: Redux store configuration.
  - `movie-api-slice.ts`: Redux slice for movie API.
- `public/`: Contains static assets.
- `types/`: Contains TypeScript type definitions.

## Configuration

- `next.config.mjs`: Next.js configuration file.
- `tailwind.config.ts`: Tailwind CSS configuration file.
- `postcss.config.mjs`: PostCSS configuration file.
- `.eslintrc.json`: ESLint configuration file.
- `tsconfig.json`: TypeScript configuration file.
