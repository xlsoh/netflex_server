const { user } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const { nickName, password, email } = req.body;
    try {
      const [result, created] = await user.findOrCreate({
        where: { email },
        defaults: { password, nickName },
      });
      console.log(created);
      console.log(result);

      if (!created) {
        //이미 회원정보에 등록되어 있는 경우
        if (password) {
          res.status(409).send('Already exists email');
        } else {
          const data = await result.get({ plain: true });
          res.status(200).send(data);
        }
      } else {
        const data = await result.get({ plain: true });
        console.log(data);
        res.status(201).send(data);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
