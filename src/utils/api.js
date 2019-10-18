import axios from "axios";

const request = axios.create({
  baseURL: "https://djmac19-be-nc-news.herokuapp.com/api"
});

export const getArticles = async (sort_by, order, author, topic, limit, p) => {
  const { data } = await request.get("/articles", {
    params: { sort_by, order, author, topic, limit, p }
  });
  return data;
};

export const getArticle = async article_id => {
  const { data } = await request.get(`/articles/${article_id}`);
  return data;
};

export const getTopics = async () => {
  const { data } = await request.get("/topics");
  return data;
};

export const getComments = async (article_id, sort_by, order, limit, p) => {
  const { data } = await request.get(`/articles/${article_id}/comments`, {
    params: { sort_by, order, limit, p }
  });
  return data;
};

export const postComment = async (article_id, username, body) => {
  const { data } = await request.post(`/articles/${article_id}/comments`, {
    username,
    body
  });
  return data;
};

export const patchVotes = async (item, id, inc_votes) => {
  const { data } = await request.patch(`/${item}/${id}`, {
    inc_votes
  });
  return data;
};

export const deleteComment = async comment_id => {
  const { data } = await request.delete(`/comments/${comment_id}`);
  return data;
};
