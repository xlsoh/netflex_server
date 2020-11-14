const { review } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const movieId = req.prams.movie_id;
    const { title, text, userId, vote_count } = req.body;

    try {
      const result = await review.create({
        title,
        text,
        userId,
        movieId,
        vote_count,
      });

      console.log(result);
      const { nickName } = result;
      if (result) {
        res
          .status(200)
          .json({ nickName, title: result.title, text: result.text });
      } else {
      }
    } catch (err) {}
  },
};
