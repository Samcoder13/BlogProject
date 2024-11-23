const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router=require('./routes/routes');
require("./config/db");
dotenv.config();
const cors=require('cors');
const corsOptions={
  origin:'*',
  credential:true
}

const server = () => {
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use('/v1',router);
 return app;
};


const PORT = process.env.PORT || 4000; 
const appInstance = server(); 
appInstance.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});

module.exports = server;