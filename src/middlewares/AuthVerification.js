const { DecodeToken } = require("../utility/TokenHelper");
module.exports = (req, res, next) => {
  // Receive Token
  let token = req.headers && req.headers["token"];
  if (!token && req.cookies) {
    token = req.cookies["token"];
  }
  console.log("Request Headers:", req.headers);
  console.log("Request Cookies:", req.cookies);

  // Token Decode
  let decoded = DecodeToken(token);

  // Request Header Email+UserID Add
  if (decoded === null) {
    return res.status(401).json({ status: "fail", message: "Unauthorized" });
  } else {
    let email = decoded["email"];
    let user_id = decoded["user_id"];
    req.headers.email = email;
    req.headers.user_id = user_id;
    next();
  }
};
