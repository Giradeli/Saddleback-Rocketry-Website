# Saddleback Rocketry Codebase Documentation

## Overview

The Saddleback Rocketry codebase is a React + TypeScript project built with Vite. It is designed to support the development of a rocketry club's website, including features for team management, sponsor information, and project showcases. The project is modular, scalable, and adheres to modern web development practices.

## Table of Contents

- [Directory Structure](#directory-structure)
- [Key Features](#key-features)
- [Setup Instructions](#setup-instructions)
- [Codebase Details](#codebase-details)
  - [Configuration Files](#configuration-files)
  - [Source Code](#source-code)
    - [Components](#components)
    - [Routing](#routing)
    - [Pages](#pages)
    - [Layouts](#layouts)
    - [Themes](#themes)
    - [Services](#services)
    - [Types](#types)
  - [ESLint Integration](#eslint-integration)
- [Contributing](#contributing)
- [Using VSCode and the Workspace](#using-vscode-and-the-workspace)

## Directory Structure

```
root
├── src
│   ├── components
│   ├── contexts
│   ├── layouts
│   ├── pages
│   ├── services
│   ├── themes
│   ├── types
│   ├── AppRoutes.tsx
│   └── main.tsx
├── public
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

### Key Directories

- **src/**: Contains the main application code.
  - **components/**: Reusable UI components.
  - **contexts/**: Context providers for global state management.
  - **layouts/**: Layout components for structuring pages.
  - **pages/**: Individual pages of the application.
  - **services/**: Utility functions and API integrations.
  - **themes/**: Theme configurations for Material-UI.
  - **types/**: TypeScript interfaces and type definitions.
- **public/**: Static assets like images and icons.
- **tests/**: Unit and integration tests.

## Key Features

- **Dynamic Routing**: Powered by React Router.
- **State Management**: Context API for managing global data.
- **Responsive Design**: Material-UI for consistent styling.
- **Data Integration**: Fetches data from Google Sheets.
- **Theming**: Custom themes using Material-UI.

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- Yarn (v1 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd saddleback-rocketry
   ```
3. Install dependencies:
   ```bash
   yarn
   ```

### Running the Application

- Start the development server:
  ```bash
  yarn dev
  ```
- Build for production:
  ```bash
  yarn build
  ```
- Preview the production build:
  ```bash
  yarn preview
  ```
- Run ESLint on the source files:
  ```bash
  yarn lint
  ```

## Codebase Details

### Configuration Files

- **vite.config.ts**: Vite configuration with React and Node polyfills.
- **tsconfig.json**: TypeScript configuration for the project.
- **eslint.config.js**: ESLint configuration for linting.

### Source Code

#### Components

Reusable UI components located in `src/components/`:

- **ContactForm.tsx**: Email contact form.
- **Footer.tsx**: Footer section of the website.
- **Header.tsx**: Header with navigation menu.
- **Image.tsx**: Image component with fallback support.
- **Sponsor.tsx**: Displays sponsor information.
- **Team.tsx**: Displays team information.
- **TeamMember.tsx**: Displays individual team member details.

#### Routing

The routing logic for the application is defined in `src/AppRoutes.tsx`. This file uses React Router to manage navigation between different pages. Key features include:

- **BaseLayout and PageLayout**: Provides consistent structure and styling across pages.
- **Dynamic Routes**: Includes routes for pages like Home, Members, Sponsors, and more.
- **Error Handling**: Routes unmatched paths to a custom `ErrorPage` using `ErrorLayout`.
- **Loader Integration**: Displays a loading indicator while data is being fetched.

The `AppRoutes` component ensures seamless navigation and integrates with the application's context for dynamic behavior.

#### Pages

Page components located in `src/pages/`:

- **HomePage.tsx**: Landing page.
- **MembersPage.tsx**: Displays current team members.
- **OldMembersPage.tsx**: Archive of past team members.
- **ProjectsPage.tsx**: Showcases projects.
- **SponsorsPage.tsx**: Displays sponsor tiers and details.
- **ContactPage.tsx**: Contact form and information.
- **ApplyPage.tsx**: Application form for joining the team.
- **DonationPage.tsx**: Donation instructions.

#### Layouts

Layout components located in `src/layouts/`:

- **BaseLayout.tsx**: Base layout with global styles.
- **PageLayout.tsx**: Layout for standard pages.
- **ErrorLayout.tsx**: Layout for error pages.

#### Themes

Theme configurations located in `src/themes/`:

- **saddleback.ts**: Custom Material-UI theme for the project.

#### Services

Utility functions and API integrations located in `src/services/`:

- **googleSheetsService.ts**: Fetches data from Google Sheets.

#### Types

TypeScript interfaces located in `src/types/`:

- **IArchivedMember.ts**: Interface for archived team members.
- **IProject.ts**: Interface for projects.
- **ISponsor.ts**: Interface for sponsors.
- **ITeam.ts**: Interface for teams.
- **ITeamMember.ts**: Interface for team members.

### ESLint Integration

The project uses ESLint for maintaining code quality and enforcing coding standards. The ESLint configuration is defined in `eslint.config.js` and includes the following features:

- **JavaScript and TypeScript Support**: Configured to lint both `.js` and `.ts/.tsx` files.
- **React Hooks Rules**: Ensures proper usage of React hooks with the `eslint-plugin-react-hooks` plugin.
- **React Refresh Rules**: Warns about improper exports with the `eslint-plugin-react-refresh` plugin.
- **Globals**: Includes browser-specific global variables using the `globals` package.

### Key Rules

- React hooks rules are enabled to enforce best practices.
- Warnings are issued for improper component exports to ensure compatibility with React Refresh.

### Running ESLint

To run ESLint and check for issues, use the following command:

```bash
yarn lint
```

This will analyze the codebase and report any linting errors or warnings.

## Contributing

Contributing to the project involves the following steps:

1. **Clone the Repository**

   - Clone the repository to your local machine:
     ```bash
     git clone <repository-url>
     ```
   - Navigate to the project directory:
     ```bash
     cd saddleback-rocketry
     ```

2. **Create a New Branch**

   - Create a new branch for your feature or bug fix:
     ```bash
     git checkout -b <branch-name>
     ```

3. **Make Your Changes**

   - Implement your changes or additions in the codebase.
   - Ensure your changes adhere to the project's coding standards and guidelines.

4. **Commit Your Changes**

   - Stage your changes:
     ```bash
     git add .
     ```
   - Commit your changes with a descriptive message:
     ```bash
     git commit -m "<descriptive-message>"
     ```

5. **Push Your Changes**

   - Push your branch to the repository:
     ```bash
     git push origin <branch-name>
     ```

6. **Create a Pull Request**

   - Navigate to the repository on GitHub.
   - Click the "Compare & pull request" button for your branch.
   - Provide a clear and concise description of your changes.
   - Submit the pull request.
   - Complete and merge the pull request.

## Using VSCode and the Workspace

The Saddleback Rocketry project is optimized for development in Visual Studio Code (VSCode). Below are some guidelines and tips for setting up and using the workspace effectively.

### Recommended Extensions

To enhance your development experience, install the following extensions:

- **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`): Provides useful snippets for React and Redux development.
- **ESLint** (`dbaeumer.vscode-eslint`): Helps identify and fix linting issues in your code.
- **Prettier - Code formatter** (`esbenp.prettier-vscode`): Ensures consistent code formatting.
- **Prettier+ESLint** (`rvest.vs-code-prettier-eslint`): Combines Prettier and ESLint for seamless formatting and linting.

These extensions are already recommended in the workspace settings. VSCode will prompt you to install them when you open the project.

### Launching the Debugger

The project includes a pre-configured VSCode launch task for debugging. Follow these steps to launch the debugger:

1. Open the "Run and Debug" panel in VSCode (shortcut: `Ctrl+Shift+D`).
2. Select the "Launch Chrome" configuration from the dropdown menu.
3. Press the green play button or `F5` to start debugging.

This will:

- Start the development server using the `yarn dev` task.
- Launch Google Chrome and open the application at `http://localhost:5173`.
- Attach the debugger to the Chrome instance for live debugging.

Ensure that the development server is not already running before starting the debugger to avoid conflicts.
