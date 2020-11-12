const { user } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const { nickName, password, email } = req.body;
    try {
      const [result, created] = await user.findOrCreate({
        where: { email },
        defaults: { password, nickName },
      });

      if (!created) {
        res.status(409).send('Already exists email');
      } else {
        const data = await result.get({ plain: true });
        console.log(data);
        res.status(201).send(data);
      }
      res.status(200).send('Welcome Netflex!');
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
