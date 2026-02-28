const mongoose = require("mongoose");

async function main(){
  
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("connected to database")
  } catch (error) {
    console.log(error)
  }
}

module.exports=main