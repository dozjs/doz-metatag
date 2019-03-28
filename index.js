const Metaset = require('metaset');
module.exports = function (Doz, app, options) {

    const defaultOpts = Object.assign({
        title: '',
        type: '',
        description: '',
        url: '',
        siteName: '',
        locale: '',
        image: '',
        selfWindow: window
    }, options);

    function metaTag(opts) {
        opts = Object.assign(defaultOpts, opts);

        const metaset = new Metaset(opts.selfWindow);

        // Title
        if (opts.title) {
            metaset.setTitle(opts.title);
            metaset.setMetaProperty('og:title', opts.title);
        }

        // Description
        if (opts.description) {
            metaset.setMetaName('description', opts.description);
            metaset.setMetaProperty('og:description', opts.description);
        }

        // Type
        if (opts.type)
            metaset.setMetaProperty('og:type', opts.type);

        // Url
        if (opts.url)
            metaset.setMetaProperty('og:url', opts.url);

        // Site name
        if (opts.siteName)
            metaset.setMetaProperty('og:site_name', opts.siteName);

        // Locale
        if (opts.locale)
            metaset.setMetaProperty('og:locale', opts.locale);

        // Image
        if (opts.image)
            metaset.setMetaProperty('og:image', opts.image);

    }

    // Apply to loading
    metaTag();

    // Add to global component
    Doz.mixin({
        metaTag
    });
};

module.exports.metaset = new Metaset();
