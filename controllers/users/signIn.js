const { user } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;
    const sess = req.session;

    try {
      const result = await user.findOne({ where: { email, password } });

      if (result === null) {
        res.status(404).send('Invalid user or Wrong password');
      } else {
        sess.userid = result.id;
        res.status(200).json({
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
