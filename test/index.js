const assert = require('assert');
const metaTag = require('../');
const Doz = require('doz');
const defaultOpts = {
    title: 'MySite',
    description: 'Lorem ipsum dolor sit',
    image: 'an-image.jpg'
};

describe('metaTag', function () {

    beforeEach(function () {
        Doz.collection.removeAll();
        document.head.innerHTML = '';
        document.body.innerHTML = '<div id="app"></div>';
    });

    it ('should be ok, with default', function () {

        Doz.use(metaTag, defaultOpts);

        new Doz({
            root: '#app',
            template(h) {
                return h`
                    <div>My App</div>
                `
            }
        });

        console.log(document.head.innerHTML);

        assert.strictEqual(defaultOpts.title, metaTag.metaset.getTitle());
        assert.strictEqual(defaultOpts.title, metaTag.metaset.getMetaProperty('og:title'));

        assert.strictEqual(defaultOpts.description, metaTag.metaset.getMetaName('description'));
        assert.strictEqual(defaultOpts.description, metaTag.metaset.getMetaProperty('og:description'));

        assert.strictEqual(defaultOpts.image, metaTag.metaset.getMetaProperty('og:image'));

    });

    it ('should be ok, overwrite default', function () {

        Doz.use(metaTag, defaultOpts);

        new Doz({
            root: '#app',
            template(h) {
                return h`
                    <div>My App</div>
                `
            },
            onCreate() {
                this.metatag({
                    title: 'New title'
                });
            }
        });

        console.log(document.head.innerHTML);

        assert.strictEqual('New title', metaTag.metaset.getTitle());
        assert.strictEqual('New title', metaTag.metaset.getMetaProperty('og:title'));

        assert.strictEqual(defaultOpts.description, metaTag.metaset.getMetaName('description'));
        assert.strictEqual(defaultOpts.description, metaTag.metaset.getMetaProperty('og:description'));

        assert.strictEqual(defaultOpts.image, metaTag.metaset.getMetaProperty('og:image'));

    });
});