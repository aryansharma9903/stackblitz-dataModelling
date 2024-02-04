import mongoose, { trusted } from 'mongoose';

const subtodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  complete:{
    type: Boolean,
    required: true,
    default: false
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

export const SubTodo = mongoose.model('SubTodo', subtodoSchema);
