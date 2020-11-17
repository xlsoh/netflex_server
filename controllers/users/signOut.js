module.exports = {
  post: (req, res) => {
    const sess = req.session;
    const { accessToken } = req.body;
    console.log(accessToken);
    console.log(sess);

    try {
      if (sess.userid || accessToken) {
        req.session.destroy((err) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).send('successfully signed out!');
          }
        });
      } else {
        res.status(400).send(`you're currently not logined`);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
