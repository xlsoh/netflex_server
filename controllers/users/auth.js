const { user } = require("../../models");
const jwt = require("jsonwebtoken");
let secretObj = require("../../config/jwt");

module.exports = {
  get: async (req, res) => {
    console.log(">>>>>>>>>>>>>>  / a u t h   IN");
    console.log(req.headers);
    const token = req.headers["authorization"];

    console.log(token);
    if (!token) {
      return res.status(403).send("권한이 없습니다.");
    }

    const p = () =>
      new Promise((resolve, reject) => {
        jwt.verify(token, secretObj.secret, (err, decoded) => {
          if (err) reject(err);
          resolve(decoded);
        });
      });

    try {
      const decoded = await p();
      console.log(decoded.userId);

      // Socail Login
      if (decoded.userId === token) {
      }

      const result = await user.findOne({ where: { id: decoded.userId } });
      console.log(result);
      if (result) {
        const userId = result.id;
        const accessToken = jwt.sign({ userId }, secretObj.secret, {
          expiresIn: "3d",
          // httpOnly: true,
        });
        console.log(accessToken);
        res.cookie("accessToken", accessToken);
        return res.status(200).json({
          accessToken,
          id: result.id,
          email: result.email,
          nickName: result.nickName,
          password: result.password,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
        });
      } else {
        return res.status(404).send("존재하지 않는 유저입니다.");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
