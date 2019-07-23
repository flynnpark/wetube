import mongoose, { Schema } from 'mongoose';

const VideoSchema = new Schema({
  fileUrl: {
    type: String,
    required: 'File URL is required'
  },
  title: {
    type: String,
    required: 'Title is required'
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const model = mongoose.model('Video', VideoSchema);

export default model;
