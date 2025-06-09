
# Skip Hire Selection App

A modern, responsive React web application for selecting skip sizes built with Redux Toolkit, TypeScript, and Tailwind CSS.

## Node Version Required

**Node.js version: 18.x or higher**

We recommend using Node.js 18.x or 20.x for optimal compatibility.

## Quick Start

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory  
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## Features

- **Modern UI Design**: Clean, card-based layout with smooth animations
- **Redux Toolkit**: Centralized state management with async thunks
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Error Handling**: Comprehensive error states with retry functionality
- **Loading States**: Smooth loading indicators
- **Accessibility**: Semantic HTML and proper ARIA labels

## Architecture

### Folder Structure
```
src/
├── components/       # Reusable UI components
│   ├── SkipCard.tsx
│   ├── Loader.tsx
│   └── ErrorMessage.tsx
├── features/         # Redux slices and logic
│   └── skips/
│       └── skipSlice.ts
├── hooks/            # Custom hooks
│   └── redux.ts
├── screens/          # Page components
│   └── ChooseSkip.tsx
├── services/         # API services
│   ├── api.ts
│   └── skipService.ts
├── store/            # Redux store configuration
│   └── index.ts
└── pages/            # Route pages
    └── Index.tsx
```

### Technologies Used

- **React 18** - UI library
- **Redux Toolkit** - State management
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Vite** - Build tool

## State Management

The app uses Redux Toolkit for state management with the following structure:

- **Skip State**: Manages skip options, selection, loading, and error states
- **Async Thunks**: Handles API calls with proper loading and error handling
- **Type Safety**: Full TypeScript integration with Redux

## API Integration

Currently uses mock data for development. To integrate with a real API:

1. Update the `baseURL` in `src/services/api.ts`
2. Uncomment the API call in `src/services/skipService.ts`
3. Remove or comment out the mock data

## Skip Selection Features

- **Price Calculation**: Automatically calculates final price including VAT
- **Visual Selection**: Clear visual feedback for selected items
- **Feature Tags**: Displays skip capabilities (road permitted, heavy waste)
- **Responsive Cards**: Optimized for all screen sizes
- **Selection Summary**: Shows selected skip details

## Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The app can be deployed to any static hosting service:

1. Run `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Configure your hosting to serve `index.html` for all routes

## Contributing

1. Follow the existing code structure and patterns
2. Use TypeScript for all new components
3. Follow the component naming convention
4. Add proper error handling for new features
5. Ensure responsive design for all new UI elements

## License

This project is licensed under the MIT License.
