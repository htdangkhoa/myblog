import mongoose, { Schema } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt';

const { Types } = Schema;

const saltRounds = 10;

const User = new Schema({
  _id: {
    type: Types.ObjectId,
    auto: true,
  },
  email: {
    type: Types.String,
    unique: true,
    required: true,
  },
  password: {
    type: Types.String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

User.pre('save', function save(next) {
  const user = this;

  if (!user.isModified()) {
    return next();
  }

  return genSalt(saltRounds, (error, salt) => {
    if (error) return next(error);

    return hash(user.password, salt, (err, h) => {
      if (err) return next(err);

      user.password = h;

      return next();
    });
  });
});

User.methods.comparePassword = function cp(password, next) {
  const user = this;

  compare(password, user.password, (error, isMatch) => {
    if (error) return next(error);

    return next(null, isMatch);
  });
};

export default mongoose.model('users', User);
