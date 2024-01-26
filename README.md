# Library Manager

A responsive web application to manage a collection of books, built with React, TypeScript, and Material-UI. It features a dynamic theme switcher and efficient API calls with caching.

## Features

- Responsive layout with a card view for mobile and table view for desktop.
- TypeScript for type safety and developer efficiency.
- API calls with Axios and caching with SWR.
- Material-UI for a rich set of UI components.
- Webpack for bundling and build optimization.
- Light and dark mode themes with a theme switcher.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/teodor164/library-manager.git

2. Install dependencies:
   ```
   npm install
3. Start the development server:
   ```
   npm run start:dev

Visit http://localhost:3000 to view the app.

## Usage

Once the Library Manager application is up and running, you can manage your book collection using the following features:

### Viewing Books

- The main page displays all books in your collection.
- On desktop devices, books are presented in a table with sortable columns.
- On mobile devices, books are shown as cards that can be swiped through.

### Adding a New Book

- Click on the "Add a New Book" button to open the book form.
- Fill in the book's details, including title, author, genres, description, status, price, and condition.
- Submit the form to add the book to your collection.

### Editing a Book

- Find the book you want to edit in the list.
- Click the "Edit" button associated with the book.
- The form will be pre-filled with the book's current details. Make any necessary changes and submit.

### Deleting a Book

- Find the book you wish to remove from the list.
- Click the "Delete" button associated with the book to remove it from the collection.

### Switching Between Light and Dark Mode

- Toggle the theme switcher in the top right corner of the application to switch between light and dark mode.

### Responsive Design

The application is designed to be responsive and user-friendly across a variety of devices and screen sizes. It automatically adjusts the layout and interface elements to provide the best experience on both mobile and desktop.
