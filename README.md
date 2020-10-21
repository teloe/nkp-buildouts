# NKP Client Websites

Development repo used for building client websites during my time at [NKP Medical Marketing](https://www.nkpmedical.com/).

<!-- Click [here]() to view a list of all live sites. -->

To view the development version of each project: 
1. Download or clone this repo
2. ```cd``` into any project root
3. Run ```npm install```.
4. Run ```npm start```, or for projects that have gulpfile.js, run ```gulp watch```
5. Browser-sync will open project files in your default browser

Most project were built locally using browser-sync and gulp.

## Project template files

Start a new project by copying the template/ directory:
```cp -r template/ <NAME-OF-NEW-PROJECT>```

```cd``` into the new project root and run ```npm init```

Download dependencies by running
```npm install --save-dev gulp gulp-sass gulp-postcss postcss autoprefixer cssnano gulp-imagemin gulp-sourcemaps eslint browser-sync```

Set up eslint 
```./node_modules/.bin/eslint --init```
and answer all the questions to initialize your eslint config file

For automatic vendor prefixes, add this to your package.json:
```javascript
browserslist: [
    "last 2 versions"
],
```

Be sure the gulpfile.js is located in the root of your project. Running ```gulp watch``` will start your server and you can begin working.

The benefits of using this workflow: 
1. [Gulp](https://gulpjs.com/), a task runner to automate & enhance your workflow
2. [Browser-Sync](https://browsersync.io/), makes web development easier by spinning up a web server that helps do live-reloading easily
3. [SCSS](https://sass-lang.com/), CSS with superpowers 🚀
4. [PostCSS/ Autoprefixer](https://github.com/postcss/autoprefixer), automatically adds vendor prefixes to css so you don't have to!
5. [CSSNano](https://cssnano.co/), compress your css
6. [ImageMin](https://github.com/sindresorhus/gulp-imagemin), minify your images
7. [ESLint](https://eslint.org/), find and fix problems in your js
8. [Sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps), map css styles back to original .scss files