import bodyParser from 'body-parser'
import express from 'express'
import mung from 'express-mung'

const app = express()
app.use('/assets', express.static('assets'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(mung.write(wrapHTML))

app.get('/', (_, response) => {
  response.write('<h1>Hello world!</h1>')
  response.end()
})

app.listen(3000, () => {
  console.log('Blog listening on port 3000!') // tslint:disable-line
})

function wrapHTML(chunk, encoding, request, response) {
  return `
    <html>
      <head>
        <title>Blog</title>
        <link rel="stylesheet" href="/assets/styles/style.css">
      </head>
      <body>
        ${chunk}
      </body>
    </html>
  `
}
