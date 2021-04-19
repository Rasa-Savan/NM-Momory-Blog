import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  // ============ START: block of code after check auth
  likes: {
    type: [String],
    default: [],
  },
  // ============ END

  // likeCount: {
  //   type: Number,
  //   default: 0,
  // },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
