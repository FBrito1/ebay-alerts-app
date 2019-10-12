import mongoose from 'mongoose';

const AlertSchema = new mongoose.Schema(
  {
    search_phrase: {
      type: String,
      required: true,
    },
    user_email: {
      type: String,
      required: true,
    },
    notification_schedule: {
      type: Number,
      required: true,
      default: 30,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Alert', AlertSchema);
