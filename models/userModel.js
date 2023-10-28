const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["admin", "organisation", "hospital", "donar"],
    },

    name: {
      type: String,
      required: function () {
        if (this.role === "donar" || this.role === "admin") {
          return true;
        }
        return false;
      },
    },

    organisationName: {
      type: String,
      required: function () {
        if (this.role === "organisation") {
          return true;
        }
        return false;
      },
    },

    hostpitalName: {
      type: String,
      required: function () {
        if (this.role === "hospital") {
          return true;
        }
        return false;
      },
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
    },

    website: {
      type: String,
    },

    address: {
      type: String,
      required: [true, "Please enter your address"],
    },

    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
