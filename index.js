const express = require('express'),
          app = express(),
         PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Come on man, this is the wrong route!')
});

app.get('/processform', (req,res)=>{
    console.log(req.query)
    const par = req.query
    const sendBack = {
        user: par.user ? par.user : 'default user',
        bio: par.bio ? par.bio : 'Lorem Ipsum goes here.',
        agree: par.agree === 'on' ? 'agreed' : 'disagreed',
        city: par.city ? par.city : 'Unknown'
    }
    res.render('pages/index', {data: sendBack});
})

app.listen(PORT, ()=> console.log('Listening on some port.'))
