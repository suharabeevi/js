// const express =require("express")
// const app=express();

// app.use(express.static("views"))

// app.get('/',(req,res)=>{
//     res.send("<h1>home<h1>")
// })
// app.get('/contact',(req,res)=>{
//     res.send("<h1>conatct<h1>")
// })


//  const PORT =process.env.PORT||3001
// app.listen(PORT,()=>console.log("server is running"))
// const express = require('express');
// const app = express();

// // Your custom middleware function
// const simpleLoggerMiddleware = (req, res, next) => {
//   console.log(`Request URL: ${req.url}`);
//   next(); // Call next() to pass control to the next middleware
// };

// // Register the middleware
// app.use(simpleLoggerMiddleware);

// // Define your routes
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
// const myFunc = () => {
//   console.log(this)
// }

// // call the function
// myFunc()
