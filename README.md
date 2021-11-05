# single-spa-legacy-angular

This is a sample Single Spa application integrating AngularJs and Angular 12 applications as micro frontends.

1. Install the npm package http-server globally using 
``npm i -g http-server``

2. Run ``http-server .`` in the main folder to host the app in port 8080

3. Go to angular-app folder and run ``npm i``

4. Run command ``npm run build:single-spa:angular-app`` to build the Angular 12 app.

5. Go to dist/angular-app folder and run command ``http-server . --cors --port=8081``

6. Open [App](http://localhost:8080) in browser.
