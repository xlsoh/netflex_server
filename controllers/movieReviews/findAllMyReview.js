const REVIEW = require('../../models').review;

// Mypage의 내가 쓴 리뷰 list
module.exports = {
  get: async (req, res) => {
    const { userId } = req.params;
    try {
      const result = await REVIEW.findAll({ where: { userId } });

      // 리뷰가 여러개 있을 경우 배열로!
      console.log(result);

      if (result.length) {
        let resArr = [];
        result.forEach((elem) => {
          let obj = {};
          const { id, title } = elem;
          obj.reviewId = id;
          obj.title = title;

          resArr.push(obj);
        });
        res.status(200).json({ results: resArr });
      } else {
        res.status(404).send('내가 작성한 리뷰가 없습니다');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
