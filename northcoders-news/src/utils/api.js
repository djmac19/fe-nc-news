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
