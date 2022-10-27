const mongoose = require("mongoose");
const mongoPATH = `mongodb+srv://restApi:Apirest@cluster0.fydjcf7.mongodb.net/?retryWrites=true&w=majority`
/*

try{
    mongoose.connect(mongoPATH,{

    })
}catch(e){

}
*/


mongoose.connect(mongoPATH,{
    useNewUrlParser: true,
}).then(()=>{
    console.log("Connection is successfull With Mongo .......!!!!!!")
}).catch((e)=>{
    console.log("No Connection")

});