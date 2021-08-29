const jwt = require("jsonwebtoken");


module.exports = {
  newCode() {
   return Array(7)
      .fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
  },
  newToken(id){
    return jwt.sign({ userId: id }, process.env.SECRET);
  }
};
