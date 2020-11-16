const REVIEW = require('../../models').review;
const USER = require('../../models').user;
const LIKE = require('../../models').like;

// 리뷰 id에 해당하는 것 조회
module.exports = {
  get: async (req, res) => {
    const { reviewId } = req.params;

    const likeRes = await LIKE.count({ where: { reviewId } });
    const result = await REVIEW.findOne({ where: { id: reviewId } });

    if (result) {
      const updatedRes = await result.increment('views');
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
        views: updatedRes.views + 1,
        totalLikes: likeRes,
        nickName,
        createdAt,
      });
    } else {
      res.status(404).send('존재하지 않는 리뷰입니다.');
    }
  },
};
