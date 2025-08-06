import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "689012c7d83e58fb1b05beca", 
  requiresAuth: true // Ensure authentication is required for all operations
});
