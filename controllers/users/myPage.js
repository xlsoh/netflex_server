const { user } = require("../../models");
const jwt = require("jsonwebtoken");
let secretObj = require("../../config/jwt");

module.exports = {
  get: async (req, res) => {
    const token = req.headers["Authorization"] || req.query.token;
    console.log(token);
    console.log(req.body);

    if (!token) {
      return res.status(403).send("권한이 없습니다.");
    }

    const p = new Promise((resolve, reject) => {
      jwt.verify(token, secretObj.secret, (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      });
    });

    p.then(async (decoded) => {
      console.log(decoded.userId);
      const result = await user.findOne({ where: { id: decoded.userId } });
      console.log(result);
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(404).send("존재하지 않는 유저입니다.");
      }
    }).catch(err);
  },
};
