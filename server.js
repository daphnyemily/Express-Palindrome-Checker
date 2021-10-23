const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
  })

app.get('/api', (req, res) => {

    if(req.query.input){
      let string = req.query.input
      let reverseStr = string.replace(' ','').toLowerCase()
      let newStr = reverseStr.split('').reverse().join('')
      let isTrue = null
      console.log(string)
      console.log(newStr)
      console.log(reverseStr)


      if (reverseStr === newStr){
        isTrue = true

      }
      else{
        false
      }
      console.log(isTrue)

      const objToJson = {
        isPali: isTrue,
        originalWord: 'newStr',
        reverseWord: 'reverseStr'

      }
      res.send(objToJson);
    }
  })

app.listen(8000, ()=>console.log('AppIsRunning'));