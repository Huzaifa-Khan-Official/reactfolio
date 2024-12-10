### Reactfoli

![Demo App](/public/Reactfolio-Mockup.jpg)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

## Setup Instructions

Follow these steps to set up and run the project locally:

1. **Clone the Repository**  
   Clone the repository to your local machine using Git or download the project as a ZIP file and extract it.  
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**  
   Install the required npm packages by running:  
   ```bash
   npm install
   ```

3. **Create a `.env` File**  
   Create a `.env` file in the root of the project. Copy the variables from the provided `.env.local` file into this newly created `.env` file and adjust them as needed for your environment.

4. **Start the Development Server**  
   Start the React development server with the following command:  
   ```bash
   npm run start
   ```

5. **Access the Application**  
   Once the server is running, open your browser and navigate to:  
   ```
   http://localhost:3000
   ```

## Troubleshooting

- **Missing `.env` file:** Ensure the `.env` file contains all the required environment variables listed in `.env.local`.
- **Dependency issues:** If you encounter any issues during `npm install`, try deleting the `node_modules` folder and `package-lock.json` file, then reinstalling dependencies:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## License

This project is licensed under Huzaifa Khan.