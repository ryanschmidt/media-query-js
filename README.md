# Media Query -> JS

Use your CSS breakpoints in JS.

## Requirements

- jQuery. To remove this requirement, just switch the logic in `media-query-js.js` to use LoDash or something similar.
- SCSS. You can also rewrite `media-query-js.scss` to use LESS variables if preferred.

## Add to your project

Copy `media-query-js.scss` and `media-query-js.js` to your project.

## Use

    if(checkMediaQuery(['md', 'lg'])) {
    	console.log('screen is either md or lg');
    }

    if(checkMediaQuery(['md'])) {
    	console.log('screen is md');
    }
