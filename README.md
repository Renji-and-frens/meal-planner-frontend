# meal-planner-frontend

This project is a React application for Meal Planner. It includes several folders and files that organize the source code, dependencies, and configuration. <a href="https://meal-planner01.netlify.app/">Click here for Live Preview</a>

The project is currently semi-public - as in it will be public for reading, cloning and forking purposes, however contributions are for internal personnel only. This is due to the lack of experience, manpower and budget to regulate the project safely and cleanly. Really sorry if you are looking to contribute with coding. We plan on opening the project for external contributions later down the line.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production to the build folder.
- `npm run eject`: Removes the single build dependency from your project.

## Contributing

Code contributions are currently restricted to internal organization team members! If you find any bugs or have suggestions for improvement, please open an issue. The project might be open for code contribution later down the line, after we have stabilized the core team and the project infrastructure.

---

## Folder Structure

The project's folder structure is organized as follows:

- **src**: Contains the source code for the React app.
  - **actions**: Contains Redux action creators.
    - **reducers**: Contains Redux reducers.
  - **assets**: Contains images, global CSS files, font files, etc., used in the project.
  - **components**: Contains reusable React components for the app.
    - **ui**: Contains UI components such as buttons, modals, cards, etc., styled in a generic manner.
    - **forms**: Contains form-specific components like checkboxes, inputs, date pickers, etc., ensuring better organization and separation of concerns.
  - **data**: Contains data assets such as JSON files used in the code.
  - **pages**: Contains higher-level components responsible for rendering specific pages or sections of the app.
  - **utils**: Contains utility functions used across the project.
  - **App.js**: The root component of the React app.
  - **index.js**: Responsible for rendering the root component and mounting it to the DOM.
  - **Files with <Name>.test.js**: Unit testing files for the corresponding component or utility.
  - **Files with <Name>.jsx**: JSX files, similar to JavaScript files but specifically used for React components.
- **.env**: Configuration file for environment variables.
- **.gitignore**: Specifies files and directories that should be ignored by Git.
- **package.json**: Lists the dependencies for the project.
- **README.md**: Provides documentation for the project.

## Detail Information on Folder Structure

### components:

The `components` folder is structured into subfolders to organize components based on their functionality. This approach helps maintain a clean and manageable codebase:

- **ui**: Contains UI components such as buttons, modals, cards, etc., styled in a generic manner and reusable across different parts of the application.
- **forms**: Contains form-specific components like checkboxes, inputs, date pickers, etc., ensuring better organization and separation of concerns within forms.
- **Other subfolders**: Additional subfolders can be created as needed based on the application's requirements, providing a modular and scalable structure.

For example, When adding a new component like `Spinner.js`, consider its purpose and usage. If the spinner is primarily used within forms, it can be placed in the `forms` folder. However, if it's a general-purpose spinner, it can be placed in the `ui` folder.

### utils:

The `utils` folder is designated for utility functions that are commonly used across the application. These functions perform specific tasks that are not directly related to rendering UI components but are essential for the application's logic:

- **Utility Functions**: Examples of utility functions include `calculateTotalCalories(ingredients)` for calculating total calories based on ingredients and `formatCookingTime(minutes)` for formatting cooking time into a human-readable format.

### .css files:

CSS files are used for styling components and pages within the application:

- **Global CSS**: The `global.css` file in the `assets` folder contains styles that apply globally to the entire application, ensuring consistency in styling.
- **Component-Specific CSS**: If a component requires specific styles that are not applicable globally, a CSS file can be created within the component's folder, providing encapsulated styling and avoiding conflicts with other components.

By organizing CSS files in this manner, it becomes easier to manage stylesheets and ensure consistency throughout the application.
