"use strict";
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/locs';
mongoose.connect(MONGO_URI, {
  useMongoClient: true,
});
module.exports = mongoose;