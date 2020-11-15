const { review } = require('../../models');

module.exports = {
  post: async (req, res) => {
    const { reviewId } = req.body;
    try {
      const result = await review.destroy({ where: { id: reviewId } });
      console.log(result);

      if (result === 1) {
        res.status(200).send('삭제 성공');
      } else {
        res.status(404).send('삭제할 리뷰가 없습니다.');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
