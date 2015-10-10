# metalsmith-skeleton-gallery

A simple [Metalsmith](http://www.metalsmith.io) plugin to create a gallery from a given range of image files, specifically for [Skeleton CSS](http://getskeleton.com/).

## Usage

Install via npm:

    npm install git+https://github.com/petermorlion/metalsmith-skeleton-gallery.git --save-dev

Add to your Metalsmith script:

    var skeletongallery = require('./node_modules/metalsmith-skeleton-gallery');

Use it:

    .use(skeletongallery())

Add a `skeletongallery` property to your YAML. If you're using [metalsmith-markdown](https://github.com/segmentio/metalsmith-markdown), this is an example:

    ---
    title: My Product
    skeletongallery: picture1.png, picture2.png
    ---

    Contents here

This will result in the following HTML:

    <div class="three columns"><img src="picture1.png" style="width: 100%;" /></div>
    <div class="three columns"><img src="picture2.png" style="width: 100%;" /></div>

## Options

Options can be passed like with any other Metalsmith plugin:

    .use(skeletongallery({
        root: './images',
        columns: 'two'  
    }))

### root

Determines what the root of your images are.

### columns

Determines the column property for Skeleton CSS. By default, `three columns` is used a CSS class for the div around the image. If you need something else instead of `three``, specify it here.

## License

[MIT](https://opensource.org/licenses/MIT)
