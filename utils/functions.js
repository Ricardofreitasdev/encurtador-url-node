module.exports = {
  newCode() {
   return Array(7)
      .fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
      .map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
      .join("");
  }
};
