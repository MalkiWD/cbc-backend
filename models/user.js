import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email : {
    type : String,
    required : true,
    unique : true
  },
  firstName :{
    type : String,
    required : true
  },
  lastName :{
    type : String,
    required : true
},
password :{
  type : String,
  required : true
},
isBlocked :{
  type : Boolean,
  default : false
},
type : {
  type : String,
  default : "customer"
},
profilePicture : {
  type : String,
  default : "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?ga=GA1.1.210135761.1715649466&semt=ais_hybrid"
}
})

const User = mongoose.model("users",userSchema)

export default User;
