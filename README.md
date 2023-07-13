# ComputerGrafikProjekt
# Berliner Bushaltestelle bei Nacht
### von Danylo Vovchok und Imanuel Leiserowitz


##Setup Project

Option 1: Install with NPM and a build tool
Development
Installing from the npm package registry and using a build tool is the recommended approach for most users — the more dependencies your project needs, the more likely you are to run into problems that the static hosting cannot easily resolve. With a build tool, importing local JavaScript files and npm packages should work out of the box, without import maps.

Install Node.js. We'll need it to load manage dependencies and to run our build tool.
Install three.js and a build tool, Vite, using a terminal in your project folder. Vite will be used during development, but it isn't part of the final webpage. If you prefer to use another build tool, that's fine — we support modern build tools that can import ES Modules.

## three.js
npm install --save three

## vite
npm install --save-dev vite
Installation added node_modules/ and package.json to my project. What are they?
From your terminal, run:
npx vite
What is npx?
npx is installed with Node.js, and runs command line programs like Vite so that you don't have to search for the right file in node_modules/ yourself. If you prefer, you can put Vite's common commands into the package.json:scripts list, and use npm run dev instead.

If everything went well, you'll see a URL like http://localhost:5173 appear in your terminal, and can open that URL to see your web application.



![Berliner Bushaltestelle bei Nacht](https://imgur.com/a/lDGNoDM)

Das 3d Modell der Bushaltestelle und die Assets wurden in Maya erstellt

![Bushaltestelle in Maya](https://imgur.com/ghMCQCQ)

Die UV Texturen wurden in Microsoft Office Programmen designed

![Texturen](https://imgur.com/RBiPxMN)

Das three.js Projekt benutzt mehrere Libraries um die Bushaltestelle anzuzeigen:

##OrbitControls

ermöglicht das navigieren durch das 3d modell mithilfe von Mouse Controls

##FBXLoader

lädt das 3d Modell

##SpotLight

erzeugt die Lampen

##SpotLightHelper

hilft bei der richtigen Ausrichtung der Lichter

##Animation

Das Flackern der Lichter ist animiert 

###Challenges

Besonders das übertragen und einstellen von Texturen war eine große Herausforderung. Auch unser erster Plan, die Werbetafel 
mit einer RectAreaLight Hintergrundbeleuchtung zu versehen hat sich als unnötig schwierig herausgestellt. 
