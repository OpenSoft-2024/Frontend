# How To Run
1. npm install
2. npm run dev


# Changes:

1. Route added to main.jsx for MySpace
2. MySpace.jsx component created under "components/AddToFavourite"
3. Plan.jsx is modified for showing some new deign options which are available for creating the subcription page (Basically will change that component for the win)
4. ui named folder under components to carry the basic components of Lamp(MySpace) and Parallax(Plan) -> Both of them are tsx file, hence the other folder
5. hero-parallax.tsx and lampdemo.jsx is created in the components section for the plan and Mystuff page
6. navbar.jsx is modified for the new links

7. Inside the HeorSectionComponents MovieCard.jsx anf moviegrid.jsx is modified for better UI

8. movieGridHorizontal and movieCardHorizontal are also created for the better UI Horizontal cards

9. lib folder with utils.ts is added for Lamp and Parallax component

10.  new lib were added ""@remix-run/react": "^2.8.1",
        "clsx": "^2.1.0",
        "framer-motion": "^11.0.15" -> so run npm i first

11. Added some defined colour in the tailwind.config.js






# React + Vite
new subscription page is added with animation using framerMotion



navbar blur effect after a particular  y scrolling is added 




loading skelton and locomative(for smooth scrool) is added


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
