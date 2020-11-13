module.exports = {
  post: (req, res) => {
    const sess = req.session;
    try {
      if (sess.userid) {
        req.session.destroy((err) => {
          if (err) {
            console.log(err);
          } else {
            res.staus(200).send('successfully signed out!');
            res.redirect('/');
          }
        });
      } else {
        res.staus(400).send(`you're currently not logined`);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
