// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Tag, PostTag } = initSchema(schema);

export {
  Post,
  Tag,
  PostTag
};