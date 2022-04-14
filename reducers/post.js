export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickName: "제로초",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://wonism.github.io/static/rxjs-302e84a92c1dcfa8e75d3a718a21d62d.jpg",
        },
        {
          src: "https://wonism.github.io/static/rxjs-302e84a92c1dcfa8e75d3a718a21d62d.jpg",
        },
        {
          src: "https://wonism.github.io/static/rxjs-302e84a92c1dcfa8e75d3a718a21d62d.jpg",
        },
      ],
      Comment: [
        {
          User: {
            nickName: "nero",
          },
          content: "우와",
        },
        {
          User: {
            nickName: "hero",
          },
          content: "good",
        },
        {
          User: {
            nickName: "nero",
          },
          content: "우와",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickName: "제로초",
  },
  Images: [],
  Comment: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
