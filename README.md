# Secure Document Manager

This project is a secure document management application built with React, designed to provide a seamless user experience.

## Best Practices and Principles Followed

1. **Component-Based Architecture**: The application is built using reusable React components, ensuring modularity and maintainability.
2. **State Management**: I used React hooks for efficient state management, ensuring a predictable and debuggable application state.
3. **Memoization**: Performance is optimized using `useMemo` and `useCallback` hooks, reducing unnecessary re-renders and improving overall performance.
4. **Error Handling**: An ErrorBoundary component is implemented for graceful error handling, ensuring a smooth user experience even in the event of errors.
5. **Accessibility**: The application follows WCAG guidelines for accessibility, ensuring equal access for all users.

## Features

- Display documents as draggable cards for easy reordering
- Reorder documents using drag and drop for intuitive organization
- View full-size images by clicking on thumbnails for a detailed view
- Automatic saving of document order for seamless collaboration
- Responsive design for a consistent user experience across devices

## Prerequisites

- Node.js (v14 or later) for a stable and secure environment
- npm (v6 or later) for efficient package management

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kirankumargonti/document-manager.git
   cd document-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

- Drag and drop cards to reorder documents as needed
- Click on a document thumbnail to view the full-size image for a detailed view
- Press ESC or click outside the image to close the full-size view
- The application automatically saves changes every 5 seconds for seamless collaboration

## Technologies Used

- React for building the user interface
- TypeScript for static type checking and better code maintainability
- Vite for fast and efficient development and build processes
- CSS for styling and layout
