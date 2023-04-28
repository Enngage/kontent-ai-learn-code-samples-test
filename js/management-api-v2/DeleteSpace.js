// DocSection: cm_api_v2_delete_space
// Tip: Find more about JS/TS SDKs at https://kontent.ai/learn/javascript
// Using ES6 syntax
import { ManagementClient } from '@kontent-ai/management-sdk';

const client = new ManagementClient({
  environmentId: '<YOUR_ENVIRONMENT_ID>',
  apiKey: '<YOUR_API_KEY>'
});

const response = await client
  .deleteSpace()
  .bySpaceCodename('my_new_space')
  .toPromise();
// EndDocSection