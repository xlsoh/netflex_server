const { review } = require('../../models');

// MovieInfo에서 해당 영화의 리뷰 list
// * GET /movie/:movieId
module.exports = {
  get: async (req, res) => {
    console.log(req.params);
    const { movieId } = req.params;
    try {
      const result = await review.findAll({ where: { movieId } });

      // 리뷰 여러개 있을 경우 배열형태
      console.log(result);

      if (result.length) {
        let resArr = [];
        result.forEach((elem) => {
          let obj = {};
          const { title, id /*, vote_count */ } = elem;
          obj.reviewId = id;
          obj.title = title;
          //  obj.vote_count = vote_count;
          resArr.push(obj);
        });
        res.status(200).json({ results: resArr });
      } else {
        res.status(404).send('해당 영화는 존재하지 않습니다.');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
