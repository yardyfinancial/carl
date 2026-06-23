module.exports = function(eleventyConfig) {
  // Copy static assets from docs/assets to the output
  eleventyConfig.addPassthroughCopy("docs/assets");

  return {
    dir: {
      input: "docs",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "public"
    },
    passthroughFileCopy: true
  };
};
