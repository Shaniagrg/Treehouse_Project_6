const express = require('express');

//store express application inside the variable app
const app = express();

//calling data.json file and storing it in a variable
const data = require('./data.json');

//here app.set just tells Express whcih template to use
app.set('view engine', 'pug');

//serve the static file from the public folder
app.use('/static', express.static('public'));

//takes you to home page
app.get('/', (req, res)=>{
	res.render('index', data.projects); 
})

//takes you to about page
app.get('/about', (req, res)=>{
	res.render('about'); 
})

app.get('/project/:id', (req, res)=>{
    const id = req.params.id;
	res.render('project', id); 
})

//error handle 404 
app.use((req, res, next)=> {
    const err = new Error("The page doesn't exist try another URL");
    next(err);
})
    
    

//set up DEVELOPMENT server using listen method
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});  //give port number