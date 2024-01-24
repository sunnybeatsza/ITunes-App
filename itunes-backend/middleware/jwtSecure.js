const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, "jwt-secret", (err, user) => {
    if (err) {
      console.log("JWT not verified");
      return res.sendStatus(403);
    } else {
      req.user = user;
      console.log("JWT verified");
    }
  });

  next();
};

module.exports = verifyToken;
