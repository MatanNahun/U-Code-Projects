const tweeterLogic = tweeterModule();
const tweeterView = tweeterRender();

tweeterView.renderPosts(tweeterLogic.getPosts());

/// addPost render
$("#post").on("click", function () {
  const input = $("#input").val();

  tweeterLogic.addPost(input);
  tweeterView.renderPosts(tweeterLogic.getPosts());
});

/// removePost render
$("#posts").on("click", ".delete", function () {
  const postId = $(this).closest(".post").attr("id");

  tweeterLogic.removePost(postId);
  tweeterView.renderPosts(tweeterLogic.getPosts());
});

/// addComment
$("#posts").on("click", ".addCommentButton", function () {
  const commentToAddId = $(this).siblings().val();

  const postId = $(this).closest(".post").attr("id");
  tweeterLogic.addComment(postId, commentToAddId);
  tweeterView.renderPosts(tweeterLogic.getPosts());
});

/// removeComment
// $("#posts").on("click", ".delete-comment", function () {
//   console.log("delete");
//     const postId = $(this).closest(".post").attr("id");
//     const commentToAddId = $(this).attr("id");
// });
