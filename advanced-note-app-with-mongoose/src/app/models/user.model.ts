import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import validator from "validator";

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, "first name keno daw nai ?"],
      trim: true,
      minlength: [5, "first name must be at least 5 charecter, got {VALUE}"],
      maxlength: 15,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      // min:18,
      min: [18, "Age must be greater than 18 , got {VALUE}"],
      max: 60,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: [true, "email duplicate found!"],
      // validate: {
      //   validator: function (value) {
      //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      //   },
      //   message: function (props) {
      //     return `Email ${props.value} is not valid email`;
      //   },
      // },
      validate: [validator.isEmail, "Email is not valid"],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      // enum: ["ADMIN", "USER"],
      enum: {
        values: ["ADMIN", "USER"],
        message: "Role is not valid , got {VALUE} role!",
      },
      default: "USER",
      uppercase: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = model("User", userSchema);
