# Project template files

Start a new project by first copying this directory:
```cp -r template/ <NAME-OF-NEW-PROJECT> ```

```cd``` into the new project root and run ```npm init```

Download dependencies by running 
```npm install --save-dev gulp gulp-sass gulp-postcss postcss autoprefixer cssnano gulp-imagemin gulp-sourcemaps eslint browser-sync```

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
