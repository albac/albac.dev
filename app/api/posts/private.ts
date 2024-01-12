import { fetchPrivatePosts } from '../../../utils/apiUtils';
import { Auth } from 'aws-amplify';

export default async function handler(req, res) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const userGroups = user.signInUserSession.accessToken.payload["cognito:groups"] || [];
    console.log(userGroups)

    if (userGroups.includes('Admins') || userGroups.includes('Editors')) {
      const posts = await fetchPrivatePosts();
      res.status(200).json(posts);
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
}
