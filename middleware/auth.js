//this middleware will authenticate the JWT tokens

const jwt = require("jsonwebtoken");
const authJWT = async (req, res, next) => {
  try {
    const authToken = req.header("Authorization").replace("Bearer ", "");
    const verifiedToken = jwt.verify(authToken, process.env.JWT_SECRET);
    // if it works, verifiedToken becomes the payload
    console.log(verifiedToken);
    req.user = verifiedToken;
    next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({ success: false, msg: `JWT expire` });
  }
};

module.exports = authJWT;
