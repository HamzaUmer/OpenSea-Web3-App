// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user';
import nft from './nft';

export default createSchema({

  name: 'default',

  types: schemaTypes.concat([
   user,
   nft
  ]),
})
