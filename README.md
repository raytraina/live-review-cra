# Getting Started

### Install Dependencies

To install dependencies listed inside of the `package.json` file, you can run from the project directory once you have cloned this project:

`$ npm install`

### Important Script

In the same project directory, you can run:

`$ npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Files to take note of when working with `create-react-app`:

- `package.json` => you can modify dependencies and build scripts here, but we don't need to edit this file yet

- `public/index.html` => this is the publicly accessible html file which holds the div (with an id of `root`) that we will render our App into

- `src/index.js` => this is where the app is configured and rendered to the DOM, but we don't need to edit this file yet

- `src/App.js` => this is where the application itself is initialized; this is where you will add all of your React Component hierarchy

- `src/App.css` => this is where the styles for the App live; they are imported at the top of `src/App.js`

_Note: We haven't covered things which aren't relevant to getting started with React, though I encourage you to look through [the React Docs](https://beta.reactjs.org/learn) if you are curious about any of the automatically generated files/directories._
