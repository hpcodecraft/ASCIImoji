module.exports = {
  options: {
    banner: ""
  },
  js: {
    expand: true,
    cwd: "src",
    src: ["asciimoji.js"],
    ext: ".min.js",
    extDot: "last",
    dest: "dist/"
  },
  jquery: {
    expand: true,
    cwd: "src/jquery",
    src: ["asciimoji.jquery.js"],
    ext: ".min.js",
    extDot: "last",
    dest: "dist/jquery/"
  },
  homepage: {
    src: "docs/index.js",
    dest: "docs/index.min.js"
  }
};
