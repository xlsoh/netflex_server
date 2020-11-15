const express = require('express');
const router = express.Router();

const { movieReviewsController } = require('../controllers');

// MovieInfo에서 해당 영화의 리뷰 list
// * GET /movie/:movieId : req(movieId), res(revieId, title)
router.get('/:movieId', movieReviewsController.findAllReview.get); //findAll

// Mypage의 내가 쓴 리뷰 list
// * GET /movie/reviews/:userId : req(userId), res(reviewId,title)
router.get('/reviews/:userId', movieReviewsController.findAllMyReview.get); //findAll

// 리뷰 상세 내용
// * GET /movie/reviewinfo/:reviewId : req(reviewId), res(reviewId, title, text, movieId, movieName, nickName, createdAt )
router.get('/reviewinfo/:reviewId', movieReviewsController.findOneReview.get); //findOne

// Mypage에서 리뷰 삭제
// * POST /movie/deletereview:  req(reviewId), res(삭제성공(200), 실패(400))
router.post('/deletereview', movieReviewsController.deleteReview.post); //delete

// 리뷰 처음 작성 or 리뷰 수정
// * POST /movie/writereview : req(text,title,movieId,movieName, userId, [reviewId]), res(작성성공시-reviewId, 수정성공시(200) 실패-404)
router.post('/writereview', movieReviewsController.writeReview.post); //create OR update

module.exports = router;
