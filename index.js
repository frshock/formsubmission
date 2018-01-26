const express = require('express'),
          app = express(),
   bodyParser = require('body-parser'),
         PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Come on man, this is the wrong route!')
});

app.get('/processform', (req,res)=>{
    res.render('pages/index', {data: req.query, method: 'GET', mechanism: 'query'});
})

app.post('/processform', (req,res)=>{
    res.render('pages/index', {data: req.body, method: 'POST', mechanism: 'body'});
})

app.listen(PORT, ()=> console.log('Listening on some port.'))
