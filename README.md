# Computer Graphics Project: Berlin Bus Stop at Night
## This project, created by Danylo Vovchok and Imanuel Leiserowitz, showcases a 3D scene of a Berlin bus stop at night using the Three.js library. The scene features a detailed 3D model of the bus stop, along with various lighting effects and animations.

## Setup Project
To set up the project, follow the instructions below:

Option 1: Install with NPM and a build tool

Install Node.js, which is required to manage dependencies and run the build tool.
Open a terminal in your project folder and install three.js and the build tool, Vite, by running the following commands:
bash
npm install --save three
npm install --save-dev vite
After the installation, run the following command to start the development server:
bash
npx vite
If everything went well, you should see a URL like http://localhost:5173 in your terminal. Open that URL in your browser to view the web application.
Project Dependencies


This project relies on the following libraries and tools:

## three.js
Three.js is a JavaScript library used for creating and rendering 3D scenes in the browser. It provides various components and utilities for working with 3D graphics.
## OrbitControls
OrbitControls is a utility in Three.js that enables navigation around a 3D model using mouse controls. It allows users to rotate, pan, and zoom the camera in the scene.
## FBXLoader
FBXLoader is a loader module in Three.js specifically designed for loading FBX files. It is used in this project to load the 3D model of the bus stop.
## SpotLight
SpotLight is a type of light source in Three.js that emits light in a specific direction within a cone-shaped area. Spotlights are used in the scene to create realistic lighting effects.
## SpotLightHelper
SpotLightHelper is a helper class in Three.js that assists in visualizing and adjusting the position and direction of spotlights. It is used in this project to ensure the correct alignment of the spotlights.
## Animation
The project includes an animation where the lights flicker realistically. The flickering effect is achieved by animating the intensity of the spotlights using random values.

## Challenges
Throughout the development of this project, we encountered several challenges:

-Transferring and setting up the textures for the 3D model proved to be a significant challenge.
-Initially, we planned to add backlighting to the advertising board using RectAreaLight, but this approach turned out to be more complex than anticipated.
Screenshots
Berliner Bushaltestelle bei Nacht

### The 3D model of the bus stop and assets were created in Maya.

### The UV textures were designed using Microsoft Office programs.

### Feel free to explore the project and experience the immersive 3D scene of a Berlin bus stop at night. Enjoy!
