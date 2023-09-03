const mongoose = require('mongoose')
const { Schema } =mongoose;

//CREATING MONGOOSE SCHEMA
//SCHEMA IS THE BLUEPRINT OF THE DATAthat we neeed to store
const BookingSchema = new Schema({
   mahalId: Schema.Types.ObjectId,
   CustomerId: Schema.Types.ObjectId,
   bookingDetails:{
    startDate: Date,
    endDate: Date,
    totalBookingPrice: Number
   },
   createdAt: {
      type: Date,
      default: new Date()
   },
   updatedAt: {
      type: Date,
      default: new Date()
   }
   
})

module.exports = mongoose.model('booking',BookingSchema)