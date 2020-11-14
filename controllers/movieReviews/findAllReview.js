const { review } = require('../../models');

// 리뷰 id에 해당하는 것 조회
module.exports = {
  get: async (req, res) => {
    const movieId = req.params.movie_id;
    try {
      const result = await review.findAll({ where: { movieId } });
      console.log(result);
      const { title, id, vote_count } = result;

      if (result) {
        res.status(200).json({
          id,
          title,
          vote_count,
        });
      } else {
        res.status(204).json('해당 영화는 작성된 리뷰가 없습니다');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
