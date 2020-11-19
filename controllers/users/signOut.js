module.exports = {
  post: (req, res) => {
    console.log(req.body);
    const { accessToken } = req.body;
    //const token = req.headers["authorization"];
    console.log(accessToken);
    if (!accessToken) {
      return res.status(403).send("권한이 없습니다.");
    }

    try {
      if (accessToken) {
        req.session.destroy((err) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).send("successfully signed out!");
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
