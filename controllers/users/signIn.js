const { user } = require("../../models");
let jwt = require("jsonwebtoken");
let secretObj = require("../../config/jwt");

module.exports = {
  post: async (req, res) => {
    console.log(">>>>>>>>>>>>>>   s i g n i n .js IN");

    const { email, password } = req.body;
    //  const sess = req.session;

    try {
      const result = await user.findOne({ where: { email, password } });
      if (result === null) {
        res.status(404).send("Invalid user or Wrong password");
      } else {
        const userId = result.id;

        const accessToken = jwt.sign({ userId }, secretObj.secret, {
          expiresIn: "3d",
          // httpOnly: true,
        });

        res.cookie("accessToken", accessToken);
        res.status(200).json({
          accessToken,
          id: result.id,
          email: result.email,
          nickName: result.nickName,
          password: result.password,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
