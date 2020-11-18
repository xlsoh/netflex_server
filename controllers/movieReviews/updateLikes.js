const LIKE = require("../../models").like;
module.exports = {
  post: async (req, res) => {
    const { reviewId } = req.params;
    const { userId } = req.body;
    console.log(reviewId, userId);

    try {
      const [findRes, isCreated] = await LIKE.findOrCreate({
        where: { reviewId, userId },
      });
      console.log(findRes);
      console.log(isCreated);

      //생성됐으면 -> 좋아요
      if (isCreated) {
        // 해당 리뷰의 증가된 좋아요 수 구하기
        const likeRes = await LIKE.count({
          where: { reviewId },
        });
        console.log(likeRes);
        res.status(201).json({ reviewId, totalLikes: likeRes });
      } else {
        //생성 안됐으면 -> 좋아요 취소(delete)
        const result = await LIKE.destroy({ where: { id: findRes.id } });
        console.log(result);
        if (result === 1) {
          res.status(200).send("좋아요 취소");
        } else {
          res.status(404).send("취소할 좋아요가 없습니다.");
        }
      }
    } catch (err) {
      // 존재하지 않는 reviewId 또는 userId가 req에 담겨있을 경우
      res.status(500).send(err);
    }
  },
};
