const tweeterModule = function () {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let _nextPostsId = 3;

  let _nextCommentsId = 7;

  const postsIdMechanism = function () {
    return "p" + _nextPostsId++;
  };

  const commentsIdMechanism = function () {
    return "c" + _nextCommentsId++;
  };

  const getPosts = function () {
    return _posts;
  };

  const addPost = (post) => {
    _posts.push({
      text: post,
      id: postsIdMechanism(),
      comments: [],
    });
  };

  const removePost = function (postId) {
    for (const index in _posts) {
      if (_posts[index].id === postId) {
        return _posts.splice(index, 1);
      }
    }
  };

  const addComment = function (postId, string) {
    for (const index in _posts) {
      if (_posts[index].id === postId) {
        return _posts[index].comments.push({
          id: commentsIdMechanism(),
          text: string,
        });
      }
    }
  };

  const removeComment = function (postId, commentId) {
    for (const indexPosts in _posts) {
      if (_posts[indexPosts].id === postId) {
        for (const indexComments in _posts[indexPosts].comments) {
          if (_posts[indexPosts].comments[indexComments].id === commentId) {
            return _posts[indexPosts].comments.splice(indexComments, 1);
          }
        }
      }
    }
  };

  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};

const tweeter = tweeterModule();

tweeter.addPost("checkkk222");
tweeter.removePost("p2");
tweeter.addComment("p1", "blabla");
tweeter.removeComment("p1", "c7");
tweeter.addPost("checkkk224442");
tweeter.removeComment("p1", "c1");

console.log(tweeter.getPosts());
