import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  startHour: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  endHour: {
    type: String,
    required: true,
  },
  services: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

const Service = mongoose.model("services", serviceSchema);

export { Service };
