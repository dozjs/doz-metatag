# doz-metatag

> This plugin provides a function for managing basic og meta tag in your HTML document

<a href="https://travis-ci.org/dozjs/doz-metatag" target="_blank"><img src="https://travis-ci.org/dozjs/doz-metatag.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

## Installation
```
npm install --save doz-metatag
```

## Usage
```js
import metaTag from 'doz-metatag'
import Doz from 'doz'

// Load plugin and set default values
Doz.use(metaTag, {
    title: 'A title',
    type: 'website',
    description: 'A description',
    url: 'http://lorem.com',
    siteName: 'Lorem.com',
    locale: 'en_US',
    image: 'an-image.jpg',
    selfWindow: window
})

new Doz({
    /* ... */
    onMount() {
        this.metaTag({
            title: 'New title',
            description: 'New description',
            image: 'new-image.jpg'
        });
    }
});
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs/doz-metatag/blob/master/CHANGELOG.md">here</a>

## License
doz-metatag is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>