module.export = function(eleventyCongig) {

    eleventyCongig.addPassthroughCopy("assets");

    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site",
            includes: "includes"
        }
    }
}