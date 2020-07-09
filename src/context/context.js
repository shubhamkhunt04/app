const jwt = require("jsonwebtoken");

const context = ({ request, response }) => {
  return {
    getUserId: () => {
      const authorization = request.headers.authorization;
      if (authorization) {
        // TODO: jwt
        const token = authorization.split(" ")[1];

        if (token && token !== "") {
         user = jwt.verify(token, "123654");
        }
        console.log("user", token);
      } else {
        throw new Error("No authorization header found!!");
      }
      return {
        userId: user._id,
      };
    },
  };
};

module.exports = { context };