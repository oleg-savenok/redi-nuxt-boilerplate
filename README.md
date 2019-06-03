
# Redi Nuxt.js Boilerplate

## Setup & Development

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Directories

### The Assets Directory

The assets directory contains your un-compiled assets such as Stylus or Sass files, images, or fonts.

[More info about Assets](https://nuxtjs.org/guide/assets)

### The Components Directory

The components directory contains your Vue.js Components. You can't use either asyncData or fetch in these components.

[More info about Components](https://vuejs.org/v2/guide/components.html)

### The Layouts Directory

The layouts directory includes your application layouts. Layouts are used to change the look and feel of your page (for example by including a sidebar).

[More info about Layouts](https://nuxtjs.org/guide/views#layouts)

### The Middleware Directory

The middleware directory contains your Application Middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layouts).

[More info about Middleware](https://nuxtjs.org/guide/routing#middleware)

### The Pages Directory

The pages directory contains your Application Views and Routes. The framework reads all the .vue files inside this directory and creates the application router.

[More info about Pages](https://nuxtjs.org/guide/views)

### The Plugins Directory

The plugins directory contains your Javascript plugins that you want to run before instantiating the root Vue.js Application. This is the place to register components globally and to inject functions or constants.

[More info about Plugins](https://nuxtjs.org/guide/plugins)

### The Static Directory

The static directory is directly mapped to the server root (/static/robots.txt is accessible under http://localhost:3000/robots.txt) and contains files that likely won't be changed (i.e. the favicon)

Example: /static/robots.txt is mapped as /robots.txt

[More info about Static](https://nuxtjs.org/guide/assets#static)

### The Store Directory

The store directory contains your Vuex Store files. The Vuex Store comes with Nuxt.js out of the box but is disabled by default. Creating an index.js file in this directory enables the store.

[More info about Store](https://nuxtjs.org/guide/vuex-store)

## Author

[Oleg Savenok](https://www.oleg-savenok.com)

## License

[MIT](https://github.com/oleg-savenok/redi-nuxt-boilerplate/blob/master/LICENSE)

Copyright (c) 2019-present, Oleg Savenok.
