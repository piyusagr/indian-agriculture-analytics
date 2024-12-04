# Indian Agriculture Analytics

This project analyzes and visualizes agricultural data for India. It processes crop-related data to generate insights such as crop production per year, maximum and minimum crop yields, and averages for crop yields and areas under cultivation.

## Features

- **Table 1**: Displays the highest and lowest crop production for each year.
- **Table 2**: Displays the average yield and average area for each crop.
- **Responsive Design**: The app is fully responsive and adjusts smoothly across mobile, tablet, and desktop devices.
- **Data Processing**: Processes raw crop data and calculates the required insights.
- **Interactive UI**: Uses Mantine for a modern and interactive table display.

## Tech Stack

- **React**: JavaScript library for building the user interface.
- **TypeScript**: Provides type safety and improves development experience.
- **Mantine**: A UI library for React that provides modern components like tables, form elements, and more.
- **CSS**: Used to style the components and ensure responsiveness.
- **Vite**: Fast build tool and development server.

## Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 16.x)
- npm (>= 8.x) or yarn (>= 1.22.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/indian-agriculture-analytics.git
   ```

2. Navigate into the project directory:

   ```bash
   cd indian-agriculture-analytics
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

   or if you prefer Yarn:

   ```bash
   yarn install
   ```

### Running the Application

To start the development server:

```bash
npm run dev
or
yarn start
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will generate a `dist` folder with the optimized files for deployment.

## File Structure

```
├── src/
│   ├── assets/         # Static files (e.g., Manufac.json)
│   ├── components/      # React components
│   │   └── DataTable.tsx  # DataTable component that displays the data in table format
│   ├── utils/           # Utility functions for data processing
│   │   └── dataProcessing.ts  # Data processing logic
|   |   |__ cropData.ts  # manufac.json datatype
│   ├── types/           # TypeScript types for strong typing
│   │   └── index.ts      # TypeScript interfaces (e.g., CropData)
│   ├── App.tsx          # Main application component
│   ├── App.css          # Global styles for the application
│   └── index.tsx        # Entry point for React
├── public/              # Public assets like index.html
├── package.json         # Project configuration (dependencies, scripts, etc.)
├── tsconfig.json        # TypeScript configuration
└── README.md            # This README file

```
## Description of Key Files:

- **`src/App.tsx`**: The main React component where the app's structure is defined. It uses the `DataTable` component to render the data.
- **`src/components/DataTable.tsx`**: A reusable component that displays the data in a table format using Mantine's `Table` component.
- **`src/utils/dataProcessing.ts`**: A utility file where the data transformation logic is located. It processes the raw crop data and formats it into two tables for display.
- **`src/types/index.ts`**: TypeScript interfaces defining the structure of the crop data and other related types.
- **`src/App.css`**: Contains the styles for the application, making it responsive and visually appealing.

## How the Data is Processed

### `processCropData`

This function processes the raw crop data into two sets of information for display:

1. **Table 1 (Yearly Data)**: For each year, it calculates the crop with the highest and lowest production. It stores:
   - `year`: The year of production.
   - `maxCrop`: The crop with the maximum production in that year.
   - `maxProduction`: The highest production value.
   - `minCrop`: The crop with the minimum production.
   - `minProduction`: The lowest production value.

2. **Table 2 (Crop Aggregates)**: For each crop, it calculates:
   - `avgYield`: The average yield (in Kg/Ha).
   - `avgArea`: The average area under cultivation (in Ha).

This data is returned as an array for both tables, ready to be displayed in the app.

## Running the App

1. After setting up and running the app (`npm run dev` or  `yarn start`), you will see two tables:

   - **Table 1**: Shows the highest and lowest crop production for each year.
   - **Table 2**: Shows the average yield and area under cultivation for each crop.


## Contributing

Contributions are welcome! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add your feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a pull request.

## ScreenShots:
![image](https://github.com/user-attachments/assets/2b520bf7-979f-459e-a65c-a614e9019c0c)
![image](https://github.com/user-attachments/assets/7c905207-5e10-4bd2-a8e5-992bc99d3cea)
