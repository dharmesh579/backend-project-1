const mongoose = require("mongoose");

async function main(){
  await mongoose.connect(process.env.DATABASE);
  console.log("connected to database")
}

module.exports=main