# Royal Fashion

## Overview
Royal Fashion is a responsive e-commerce web application built with React and TypeScript. It features a clean design and functionality powered by Redux Toolkit, Stripe integration, and Firebase, offering users a smooth shopping experience across devices.

## Features
- **User Authentication**: Firebase authentication for secure login and signup.
- **Product Management**: View a catalog of fashion products with sorting and filtering options.
- **Shopping Cart**: Add, remove, and manage items in the cart with real-time updates.
- **Payment Processing**: Secure payment integration using Stripe.
- **State Management**: Powered by Redux Toolkit with persistence using Redux Persist.
- **Styling**: Customizable styles implemented with Styled Components.

## Technologies Used
- **React**: Component-based UI development.
- **TypeScript**: Ensures type safety and enhances code maintainability.
- **Redux Toolkit**: Simplifies state management.
- **Redux Saga**: Manages side effects.
- **Stripe**: Processes payments securely.
- **Styled Components**: Dynamic styling for components.
- **Firebase**: Backend services for authentication and data storage.
- **SASS**: Preprocessor for advanced styling.

## Installation
To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Frederick-Chon/Royal-Fashion.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Royal-Fashion
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your Stripe and Firebase keys based on the provided `.env.example` file.

## Usage
### Development Server
Run the application in development mode:
```bash
npm start
```
- Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Build for Production
To create a production-ready build:
```bash
npm run build
```
- The build files will be located in the `build` directory.

## Testing
Launch the test runner in watch mode:
```bash
npm test
```

## Folder Structure
```
Royal-Fashion/
├── src/
│   ├── components/    # Reusable React components
│   ├── pages/         # Page-level components
│   ├── redux/         # Redux state management
│   ├── styles/        # Global and component-specific styles
│   ├── utils/         # Utility functions
│   └── App.tsx        # Main app entry point
├── public/            # Public assets
├── .env               # Environment variables
├── package.json       # Project metadata and dependencies
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```


## Acknowledgments
- [Create React App](https://github.com/facebook/create-react-app) for project setup.
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management.
- [Stripe](https://stripe.com/docs) for payment integration.
- [Firebase](https://firebase.google.com/docs) for backend services.

---
Feel free to reach out for questions or feedback!
