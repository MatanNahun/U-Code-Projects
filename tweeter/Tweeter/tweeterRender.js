const tweeterRender = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    for (const post of posts) {
      let postToAppend = `<div class="post post-text" id="${post.id}"> ${post.text} <button class="delete">delete</button> <div><input type="text" class="inputComment" placeHolder="comment here"> <button class="addCommentButton">add comment</button>  </div> </div>`;

      $("#posts").append(postToAppend);

      for (let comment of post.comments) {
        let commentToAppend = `<div class="comments" id="${comment.id}"> ${comment.text}  <button class="delete-comment">delete</button> </div>`;

        $(`#${post.id}`).append(commentToAppend);
      }
    }
  };
  return { renderPosts };
};
