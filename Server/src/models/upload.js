const mongoose = require('mongoose')
const { Schema } = mongoose;

const uploadSchema = new Schema({
  text: {type:String, required: true}
    
  },
  {collection:'uploads'});  

module.exports= mongoose.model('Uploads', uploadSchema);

