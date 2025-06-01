# 🏠 React Listings App

## About

This project is a React learning project that implements a vacation rental listing platform similar to Airbnb. [Live demo](https://learning-react-mu-murex.vercel.app).

## Features

1. **Authentication**

   - Sign in and sign out functionality
   - Testing credentials: `demo@cosdensolutions.io`/`cosdensolutions`

2. **Listing Management**

   - Display all listing cards
   - Filter listings by title, date available, and number of guests
   - Create new listings

3. **Listing Cards**

   - Each card includes:
     - Image carousel
     - Rating
     - Favorite toggler
     - Title, price, location, and number of guests capacity
     - Host information

4. **Navigation & Pages**

   - Clicking on a card navigates to a detailed listing page with full information, description, and reviews
   - Favorites page showing all favorited listings
   - Account profile page displaying user details and personal listings

5. **Performance & Optimization**
   - Data caching for faster load times
   - Optimized re-renders and state updates

## Technologies

1. [React 18](https://react.dev/)
2. [Redux Toolkit](https://redux-toolkit.js.org/)
3. [React Router](https://reactrouter.com/)
4. [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
5. [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
6. [Cypress](https://www.cypress.io/) (E2E Testing)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Use the testing credentials above to sign in

## Course Structure

- **Module 0: Introduction**

  - Project Overview
  - Linting and Formatting
  - Files and Folder Structure
  - API Overview

- **Module 1: React Fundamentals**

  - Introduction to React
  - JSX Overview
  - Component Props and Lifecycle
  - Introduction to Hooks
  - Styling and Tailwind

- **Module 2: State and Event Handlers**

  - State in React
  - Event Handlers
  - Handling Click and Input Change Events
  - Handling Form Submissions
  - The `useState` hook
  - Controlled and Uncontrolled Components

- **Module 3: Effects and Data Fetching**

  - Effects in React
  - The `useEffect` and `useRef` hooks
  - Data Fetching in React

- **Module 4: Routes and Navigation**

  - Client VS Server Side Routing
  - [React Router](https://reactrouter.com/)

- **Module 5: Hooks and Performance**

  - Performance in React
  - The `useMemo` hook
  - The `useCallback` hook and `memo`
  - Custom Hooks and Custom Components

- **Module 6: State Management**

  - State Management in React
  - Prop Drilling
  - The `useContext` hook
  - [Redux Toolkit](https://redux-toolkit.js.org/)

- **Module 7: Forms and Authentication**

  - Forms in React
  - [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/)
  - Authentication in React

- **Module 8: Extended**
  - Refactor project using [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
  - Improve forms and inputs with `useForm` and `useController`
  - Add Profile and Create Listing pages
  - Add Reviews section
  - Add Cypress E2E testing for sign in flow, navigation, and filter functionality

## Credits

Course and codebase provided by [Cosden Solutions](https://cosden.solutions/project-react).
