import { isEmpty } from 'lodash';
import mongoose, { Schema } from 'mongoose';

const { Types } = Schema;

const Article = new Schema(
  {
    _id: {
      type: Types.ObjectId,
      auto: true,
    },
    title: {
      type: Types.String,
      required: true,
    },
    body: {
      type: Types.String,
      required: true,
      // validate: [isEmpty, 'The body\'s article cannot empty.'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default mongoose.model('articles', Article);
