import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from "../src/graphql/queries";
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Auth } from 'aws-amplify';


const getDefaultPostFields = (post) => ({
  id: post.id,
  title: post.title ?? 'No Title',
  content: post.content ?? 'No Content',
  summary: post.summary ?? 'No Summary',
  state: post.state ?? false,
  createdAt: post.createdAt ?? new Date().toISOString(),
  updatedAt: post.updatedAt ?? new Date().toISOString()
});


export async function fetchPublicPosts() {
    try {
        const filter = { state: { eq: true } }; // Filter for public posts
        const postData = await API.graphql(graphqlOperation(listPosts, { filter })) as GraphQLResult<any>;
        return postData.data?.listPosts?.items.map(getDefaultPostFields) || [];
    } catch (error) {
        console.error("Error fetching public posts:", error);
        return [];
    }
}

export async function fetchPrivatePosts() {
    try {
        // No filter for private posts, fetches all posts
        const postData = await API.graphql(graphqlOperation(listPosts)) as GraphQLResult<any>;
        return postData.data?.listPosts?.items.map(getDefaultPostFields) || [];
    } catch (error) {
        console.error("Error fetching private posts:", error);
        return [];
    }
}

export async function getUserGroups() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user.signInUserSession.accessToken.payload["cognito:groups"] || [];
  } catch {
    return [];
  }
}
