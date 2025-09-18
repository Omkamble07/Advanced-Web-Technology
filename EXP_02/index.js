const express = require('express');
const app = express();
const port = 1000;

app.get('/', (req,res) => {
    res.send('Hello');
})

app.get('/date', (req, res) => {
    const currDate = new Date();
    res.json({
        message : "this is the current date",
        date : currDate.toString()
    })
})

app.get('/date/currdate', (req, res) => {
    const currDate = new Date();
    const day = currDate.getDate();
    const month = currDate.getMonth() + 1;
    const year = currDate.getFullYear();
    
    res.send(`current date is : ${day} : ${month} : ${year} `);
})

app.get('/date/currdate/all', (req, res) => {
    const currDate = new Date();
    res.json({
        message : "this is the current date",
        day : currDate.getDate(),
        month : currDate.getMonth() + 1,
        year : currDate.getFullYear(),
        hours : currDate.getHours(),
    })

})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    
})

// install nodemon:   npm install -g nodemon

