const express = require('express');
const router = express.Router();

const { movieReviewsController } = require('../controllers');

// [X] MovieInfo에서 해당 영화의 리뷰 list -> 조회수, 좋아요수 출력(DB 조회), 좋아요 버튼 누르면 -> POST 요청
// * GET /movie/:movieId : req(movieId), res(revieId, title)
router.get('/:movieId', movieReviewsController.findAllReview.get); //findAll

// [X] Mypage의 내가 쓴 리뷰 list
// * GET /movie/reviews/:userId : req(userId), res(reviewId,title)
router.get('/reviews/:userId', movieReviewsController.findAllMyReview.get); //findAll

// [X] 리뷰 상세 내용 -> 조회수 올라간 후 출력, 좋아요 수 출력, 좋아요 버튼 누르면 -> POST 요청
// * GET /movie/reviewinfo/:reviewId : req(reviewId), res(reviewId, title, text, movieId, movieName, nickName, views, createdAt, totalLikes)
router.get('/reviewinfo/:reviewId', movieReviewsController.findOneReview.get); //findOne

// [X] 리뷰 상세 내용 -> 좋아요 버튼 누르면 좋아요수 +1
// 단, likes 테이블에 이미 reviewId와 userId 두개가 동시에 들어가 있다면, 좋아요 delete
// * POST /movie/reviewinfo/:reviewId : req(userId), res(reviewId, totalLikes)
// findeOne -> update(+1)
//          -> delete(-1)
router.post('/reviewinfo/:reviewId', movieReviewsController.updateLikes.post);

// [X] Mypage에서 리뷰 삭제
// * POST /movie/deletereview:  req(reviewId), res(삭제성공(200), 실패(400))
router.post('/deletereview', movieReviewsController.deleteReview.post); //delete

// [X] 리뷰 처음 작성 or 리뷰 수정
// * POST /movie/writereview : req(text,title,movieId,movieName, userId, [reviewId]), res(작성성공시-reviewId, 수정성공시(200) 실패-404)
router.post('/writereview', movieReviewsController.writeReview.post); //create OR update

module.exports = router;
