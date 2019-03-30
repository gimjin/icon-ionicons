module.exports = {
  /**
   * {String|null} name       Name of font and base name of font files.
   * {String}      icons      List of SVG files.
   * {String|null} template   Path of custom CSS template. Generator uses handlebars templates.
   * {String|null} fontsDest  Directory for generated font files.
   * {String|null} cssDest    Path for generated CSS file.
   * {Array|null}  fontType   Font file types to generate. Possible values: [svg, ttf, woff, woff2, eot].
   */
  font: {
    name: 'ionicons',
    icons: 'icons/*.svg',
    template: 'icon.template.hbs',
    fontsDest: 'assets',
    cssDest: 'assets',
    fontType: ['ttf', 'woff']
  }
}
