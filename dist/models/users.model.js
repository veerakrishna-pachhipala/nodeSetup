"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var userSchema = new _mongoose.Schema({
  name: {
    type: String,
    minlength: 4,
    maxlength: 1024,
    trim: true,
    required: [true, "Name of user is Required"]
  },
  password: {
    type: String,
    minlength: 10,
    trim: true,
    required: [true, "Password is Required"]
  },
  acess_level: {
    type: Number,
    "enum": [1, 2],
    "default": 1
  },
  status: {
    type: Number,
    "enum": [1, 2, 3, 4, 5, 6],
    "default": 1
  },
  active: {
    type: Boolean,
    "default": true
  },
  phone: {
    type: Number,
    unique: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

var User = _mongoose["default"].model('user', userSchema);

var _default = User;
exports["default"] = _default;