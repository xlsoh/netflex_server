const { user } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      const sess = req.session;

      if (sess.userid) {
        const result = await user.findOne({ where: { id: sess.userid } });

        if (result) {
          res.status(200).json(result);
        }
      } else {
        res.status(404).send('존재하지 않는 유저입니다.');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
