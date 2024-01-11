import { fetchPublicPosts } from '../../../utils/apiUtils'

export default async function handler(req, res) {
  const posts = await fetchPublicPosts();
  res.status(200).json(posts);
}

