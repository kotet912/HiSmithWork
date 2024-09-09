import axios from 'axios';

export default defineEventHandler(async (event) => {
  const response = await axios.get('http://static.feed.rbc.ru/rbc/logical/footer/news.rss');
  return response.data;
});