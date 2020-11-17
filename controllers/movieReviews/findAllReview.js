const { review } = require("../../models");
const { like } = require("../../models");

// MovieInfo에서 해당 영화의 리뷰 list
// * GET /movie/:movieId
module.exports = {
  get: async (req, res) => {
    const { movieId } = req.params;
    console.log(movieId);
    try {
      const result = await review.findAll({ where: { movieId } });
      console.log(result);
      if (result.length) {
        let resArr = [];
        result.forEach((elem) => {
          let obj = {};
          const { title, id } = elem;
          obj.reviewId = id;
          obj.title = title;
          resArr.push(obj);
        });
        res.status(200).json({ results: resArr });
      } else {
        res.status(204).send("해당 영화는 리뷰가 존재하지 않습니다.");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
