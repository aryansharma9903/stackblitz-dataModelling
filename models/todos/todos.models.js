import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subtodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo'
      }
    ]//array
  },
  { timestamps: true }
);

export const Todos = mongoose.model('Todos', todoSchema);
