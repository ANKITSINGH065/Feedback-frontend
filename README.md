# Feedback Platform Frontend

## Overview
The Feedback Platform Frontend is a React application that allows users to sign up, log in, and provide feedback on various products or services. It interacts with the backend API to manage user authentication and feedback submissions. The application is designed to be user-friendly and responsive.

### Key Features
- User authentication (sign up, sign in, and sign out)
- Feedback submission and management
- User-specific feedback retrieval
- Responsive design for a seamless user experience

## Technologies Used
- **React**: JavaScript library for building user interfaces
- **React Router**: For routing and navigation
- **Clerk**: For user authentication
- **Axios**: For making HTTP requests
- **Tailwind CSS**: For styling the application

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   ```

### Running the Application
To start the development server, run:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

## Folder Structure
```
feedback-platform-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SignUpPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── InboxPage.jsx
│   │   ├── FeedbackList.jsx
│   │   ├── FeedbackForm.jsx
│   │   ├── GoogleLoginButton.jsx
│   │   ├── SignInPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── package.json
└── ...
```

## API Integration
The frontend communicates with the backend API to perform actions such as user registration, login, and feedback submission. Ensure that the backend is running and accessible at the specified URL.

### API Endpoints
- **User Registration**: `POST /auth/register`
- **User Sign In**: `POST /auth/signin`
- **Submit Feedback**: `POST /feedback/submitFeedback`
- **Get Feedback by User**: `GET /feedback/getFeedbackByUser/:userId`

## Testing
To run tests, use:
```bash
npm test
```

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Mention any resources, libraries, or individuals that helped you in the project.
