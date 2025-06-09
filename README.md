# Skip Hire Selection App

A modern, responsive React web application for selecting skip sizes built with Redux Toolkit, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

**Node.js version: 18.x or higher**

We recommend using Node.js 18.x or 20.x for optimal compatibility.

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory  
cd <PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## ✨ Features

- **Modern UI Design**: Clean, card-based layout with smooth animations
- **Redux Toolkit**: Centralized state management with async thunks
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Error Handling**: Comprehensive error states with retry functionality
- **Loading States**: Smooth loading indicators
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🏗️ Architecture

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
└── utils/            # Utilities
    └── constants.js
└── api/            # Axios Client / Endpoints
    └── apiClient.js
    └── endPoints.js
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Vite** - Build tool
- **TypeScript** - Type safety

## 🔄 State Management

The app uses Redux Toolkit for state management with the following structure:

- **Skip State**: Manages skip options, selection, loading, and error states
- **Async Thunks**: Handles API calls with proper loading and error handling
- **Type Safety**: Full TypeScript integration with Redux

## 🌐 API Integration

Using Endpoint provided by the REMWaste

## 🎯 Skip Selection Features

- **Price Calculation**: Automatically calculates final price including VAT
- **Visual Selection**: Clear visual feedback for selected items
- **Feature Tags**: Displays skip capabilities (road permitted, heavy waste)
- **Responsive Cards**: Optimized for all screen sizes
- **Selection Summary**: Shows selected skip details
- **Selection Confirmation**: Shows selected skip details through the Confirmation Modal

## 💡 Development Approach

This project is designed with maintainability, scalability, and user experience in mind:

### Design Principles

- **Component-based architecture**: UI built with reusable components for easy maintenance
- **Redux Toolkit**: Predictable centralized state management and async API handling
- **TypeScript**: Ensures type safety, improving code reliability and collaboration
- **Tailwind CSS**: Utility-first, responsive styling with mobile-first approach
- **API abstraction**: All API calls handled in services layer for easy backend switching
- **Loading and error handling**: Global indicators and retry options for better UX
- **Accessibility**: Semantic HTML and ARIA attributes for compliance

### Development Features

- **Vite**: Fast hot reloading and optimized builds
- **Clear folder structure**: Modular organization with Redux slices
- **Mock data support**: Enables offline development and easy API transition

## 🚀 Development Commands

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

## 🌍 Deployment

**Live Demo**: [https://waste-skip-eight.vercel.app/](https://waste-skip-eight.vercel.app/)

### Deploy Your Own

1. Run `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Configure hosting to serve `index.html` for all routes

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

- Follow existing code structure and patterns
- Use TypeScript for all new components
- Follow the component naming convention
- Add proper error handling for new features
- Ensure responsive design for all new UI elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Live Demo](https://waste-skip-eight.vercel.app/)
- [Report Issues](https://github.com/Muzammil-crypto/skip-select-oasis/issues)

---

**Built with ❤️ using React, Redux Toolkit, and TypeScript**