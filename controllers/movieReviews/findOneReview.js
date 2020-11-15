const REVIEW = require('../../models').review;
const USER = require('../../models').user;

// 리뷰 id에 해당하는 것 조회
module.exports = {
  get: async (req, res) => {
    const { reviewId } = req.params;

    const result = await REVIEW.findOne({ where: { id: reviewId } });
    console.log(result);
    if (result) {
      const { id, title, userId, createdAt, movieName, text, movieId } = result;
      // 1. userId를 통해 user Table에 nickName 가져오기
      const userRes = await USER.findOne({ where: { id: userId } });
      const { nickName } = userRes;

      res.status(200).json({
        reviewId: id,
        title,
        text,
        movieId,
        movieName,
        nickName,
        createdAt,
      });
    } else {
      res.status(404).send('존재하지 않는 리뷰입니다.');
    }
  },
};
