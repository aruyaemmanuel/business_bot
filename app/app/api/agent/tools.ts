// agent/tools.ts
import Groq from 'groq-sdk';

export const agentTools: Groq.Chat.Completions.ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'getBusinessInfo', // Changed to match your handler check in LLMHandler.ts
      description: 'Get detailed information about our business services, background, and key contact links/CTA when a user asks what the business does.',
      parameters: {
        type: 'object',
        properties: {
          topic: {
            type: ['string', 'null'], // Allows either a string or null without failing schema validation
            description: "Optional specific topic requested (e.g., 'pricing', 'services', 'about', 'contact'). Omit or leave null for general info.",
          },
        },
        required: [],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'showServiceInfo',
      description: 'Displays service details and interactive buttons for web development, AI automation, mobile apps, or custom bots to the user.',
      parameters: {
        type: 'object',
        properties: {
          serviceKey: {
            type: 'string',
            enum: ['web_dev', 'ai_auto', 'mobile_app', 'custom_bot'],
            description: 'The key of the service requested.',
          },
        },
        required: ['serviceKey'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'showMainMenu',
      description: 'Displays the agency main menu with all service options to the user.',
      parameters: {
        type: 'object',
        properties: {
          userName: { type: 'string' },
        },
        required: ['userName'],
      },
    },
  },
];
