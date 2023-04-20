// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Posts } = initSchema(schema);

export {
  Posts
};