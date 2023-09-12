//starting server
//NODE_ENV is a special variable to know the environment
//in config.env file name all variables in the upper case
const dotenv=require('dotenv');
//reads the variables from config.env and sets in node js environment
dotenv.config({path:`${__dirname}/config.env`});
const app=require('./app');
//in which environment we are present?
//app.get('env')=>gives details about environment in which our node app is running
// console.log(app.get('env'));
//SET NODE_ENV=development&&nodemon server.js 
// it is not good to always add env variable in command line or terminal
//for this we create our config.env file
// console.log(process.env);
const PORT=process.env.PORT;
app.listen(PORT, () => {
    console.log('app started');
  });