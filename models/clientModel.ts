import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  streetnumber: {
    type: Number,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  licenseplate: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("clients", clientSchema);

export { Client };
