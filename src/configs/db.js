const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://navneetfw15:Singh123@cluster0.dd0yq.mongodb.net/uplods?retryWrites=true&w=majority"
  );
};
