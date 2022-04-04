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
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.jinbo.net%2Fdiary%2F382&psig=AOvVaw0MpG0pJVfKfdWafJwxvZy3&ust=1649151146245000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICy6vSM-vYCFQAAAAAdAAAAABAJ",
        },
        {
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.jinbo.net%2Fdiary%2F382&psig=AOvVaw0MpG0pJVfKfdWafJwxvZy3&ust=1649151146245000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICy6vSM-vYCFQAAAAAdAAAAABAJ",
        },
        {
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.jinbo.net%2Fdiary%2F382&psig=AOvVaw0MpG0pJVfKfdWafJwxvZy3&ust=1649151146245000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICy6vSM-vYCFQAAAAAdAAAAABAJ",
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
