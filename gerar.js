const path = require('path')
const fs = require('fs')
const pdf = require('html-pdf')

var template = path.join(__dirname, 'teste.html')
var filename = template.replace('.html', '.pdf')
var templateHtml = fs.readFileSync(template, 'utf8')

var image = path.join('file://', __dirname, 'js.jpg')
templateHtml = templateHtml.replace('{{image}}', image)

var options = {
  "border": {
    "top": "1.5cm", // default is 0, units: mm, cm, in, px
    "right": "1cm",
    "bottom": "1.5cm",
    "left": "1cm"
  }
}

pdf.create(templateHtml, options)
  .toFile(filename, function (err, pdf) {
    if (err) {
      console.log(err)
      return
    }
    console.log(pdf)
  })
