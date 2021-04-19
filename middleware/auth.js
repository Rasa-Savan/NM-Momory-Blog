import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; // <500 is our own token else is google token

    let decodeData;

    if (token && isCustomAuth) {
      decodeData = jwt.verify(token, "secret_id_set_in_env_file");

      req.userId = decodeData?.id;
    } else {
      decodeData = jwt.decode(token);

      req.userId = decodeData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
