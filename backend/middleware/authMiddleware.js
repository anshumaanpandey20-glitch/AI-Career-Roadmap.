
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  try {
    // 1. Read the Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please log in.",
      });
    }

    // 2. Extract the token
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication token is missing.",
      });
    }

    // 3. Check the JWT secret
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing from backend/.env");

      return res.status(500).json({
        success: false,
        message: "Authentication is not configured.",
      });
    }

    // 4. Verify the token's signature and expiration
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5. Attach the authenticated user's ID to the request
    req.user = {
      id: Number(decoded.sub),
    };

    if (!Number.isSafeInteger(req.user.id) || req.user.id <= 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid authentication token.",
      });
    }

    // 6. Continue to the requested route
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token.",
    });
  }
}

module.exports = authMiddleware;
