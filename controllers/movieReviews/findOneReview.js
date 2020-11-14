const { review } = require('../../models');

// 리뷰 id에 해당하는 것 조회
module.exports = {
  get: async (req, res) => {
    const reviewId = req.body.review_id;

    const result = await review.findOne({ where: { id: reviewId } });
    console.log(result);
    const { title, nickname, createdAt, text } = result;
    if (result) {
      res.status(200).json({
        title,
        nickname,
        createdAt,
        text,
      });
    } else {
      res.status(404).json('존재하지 않는 리뷰입니다.');
    }
  },
};
