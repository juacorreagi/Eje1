const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {  

    
      const capitaliceWord = capitalizar(req.params.name);
      res.send(`<h1>Hola ${capitaliceWord}!</h1>`);
  
});

function capitalizar(str) {    
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();  
}

app.listen(3000, () => console.log('Listening on port 3000!'));
