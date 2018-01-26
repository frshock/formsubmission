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
    const {user, bio, agree, city} = req.query
    const sendBack = {
        user: par.user ? user : 'default user',
        bio: par.bio ? bio : 'Lorem Ipsum goes here.',
        agree: agree === 'on' ? 'agreed' : 'disagreed',
        city: city ? city : 'Unknown'
    }
    res.render('pages/index', {data: sendBack, method: 'GET', mechanism: 'query'});
})

app.post('/processform', (req,res)=>{
    const {user, bio, agree, city} = req.body
    const sendBack = {
        user: user ? user : 'default user',
        bio: bio ? bio : 'Lorem Ipsum goes here.',
        agree: agree === 'on' ? 'agreed' : 'disagreed',
        city: city ? city : 'Unknown'
    }
    res.render('pages/index', {data: sendBack, method: 'POST', mechanism: 'body'});
})

app.listen(PORT, ()=> console.log('Listening on some port.'))
