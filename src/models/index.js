// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ContactForm, Posts } = initSchema(schema);

export {
  ContactForm,
  Posts
};