const express = require('express');
const app = express();
let string = '';

app.get('/', (req, res) => {  

  for ( let i = 1; i <= 50; i++){
      if ( i % 2 === 0){
         string  += `<p>  ${i} Soy Par!</p> `;
      }else{
         string  += `<p>  ${i} Soy Impar!</p> `;
      }
     
 }

 res.send(
     `<!DOCTYPE html>
         <head>   
         </head>
         <body>
         ${string}             
         </body>
         </html>`);             

});

app.listen(3000, () => console.log('Listening on port 3000!'));



