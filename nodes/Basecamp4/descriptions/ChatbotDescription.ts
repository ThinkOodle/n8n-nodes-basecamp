// Chatbot resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const chatbotOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['chatbot'],
			},
		},
		default: 'getChatbots',
		options: [
			{
				name: 'Create a Chatbot',
				value: 'createChatbot',
				action: 'Create a chatbot',
				description: 'Creates a chatbot on the account and returns the new chatbot with the lines URL from the specified project',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/integrations.json',
					},
				},
			},
			{
				name: 'Create a Chatbot Line',
				value: 'createChatbotLine',
				action: 'Create a chatbot line',
				description: 'Creates a line in the specified Campfire using the chatbot key',
				routing: {
					request: {
						method: 'POST',
						url: '=/integrations/{{ $parameter["chatbotKey"] }}/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/lines.json',
					},
				},
			},
			{
				name: 'Delete a Chatbot',
				value: 'deleteChatbot',
				action: 'Delete a chatbot',
				description: 'Deletes the specified chatbot across the account',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/integrations/{{ $parameter["integrationId"] }}.json',
					},
				},
			},
			{
				name: 'Get a Chatbot',
				value: 'getChatbot',
				action: 'Get a chatbot',
				description: 'Returns the chatbot with the specified ID with the line URL from the specified project',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/integrations/{{ $parameter["integrationId"] }}.json',
					},
				},
			},
			{
				name: 'Get All Chatbots',
				value: 'getChatbots',
				action: 'Get all chatbots',
				description: 'Returns all the chatbots from the account with the line URL for the campfire on the specified basecamp',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/integrations.json',
					},
				},
			},
			{
				name: 'Update a Chatbot',
				value: 'updateChatbot',
				action: 'Update a chatbot',
				description: 'Allows changing the service name and commandURL of the specified chatbot in the specified project',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/integrations/{{ $parameter["integrationId"] }}.json',
					},
				},
			},
		],
	},
];
export const chatbotFields: INodeProperties[] = [
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/integrations.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['getChatbots'],
			},
		},
	},
	/*----------------------------------------
	         Chatbot: getChatbots Parameters
	----------------------------------------*/
	{
		displayName: 'Project ID',
		name: 'bucketId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the project (bucket) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['getChatbots'],
			},
		},
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the chat/campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['getChatbots'],
			},
		},
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/integrations.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbot'],
			},
		},
	},
	/*----------------------------------------
	         Chatbot: createChatbot Parameters
	----------------------------------------*/
	{
		displayName: 'Project ID',
		name: 'bucketId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the project (bucket) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbot'],
			},
		},
	},
	{
		displayName: 'chatId',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the chat/campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbot'],
			},
		},
	},
	{
		displayName: 'Service Name',
		name: 'serviceName',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the chatbot service, which will be used to invoke queries and commands. No spaces, emoji or non-word charac...',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbot'],
			},
		},
		routing: {
			send: {
				property: 'service_name',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Command URL',
		name: 'commandUrl',
		type: 'string',
		default: '',
		description: 'The HTTPS URL that Basecamp should call when the bot is addressed',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbot'],
			},
		},
		routing: {
			send: {
				property: 'command_url',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/integrations/{{ $parameter["integrationId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['getChatbot'],
			},
		},
	},
	/*----------------------------------------
	         Chatbot: getChatbot Parameters
	----------------------------------------*/
	{
		displayName: 'Project ID',
		name: 'bucketId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the project (bucket) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['getChatbot'],
			},
		},
	},
	{
		displayName: 'chatId',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the chat/campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['getChatbot'],
			},
		},
	},
	{
		displayName: 'Integration ID',
		name: 'integrationId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the chatbot/integration - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['getChatbot'],
			},
		},
	},
	{
		displayName:
			'PUT /buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/integrations/{{ $parameter["integrationId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['updateChatbot'],
			},
		},
	},
	/*----------------------------------------
	         Chatbot: updateChatbot Parameters
	----------------------------------------*/
	{
		displayName: 'Project ID',
		name: 'bucketId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the project (bucket) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['updateChatbot'],
			},
		},
	},
	{
		displayName: 'chatId',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the chat/campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['updateChatbot'],
			},
		},
	},
	{
		displayName: 'integrationId',
		name: 'integrationId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the chatbot/integration - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['updateChatbot'],
			},
		},
	},
	{
		displayName: 'Service Name',
		name: 'serviceName',
		type: 'string',
		default: '',
		required: true,
		description:
			'The name of the chatbot service, which will be used to invoke queries and commands. No spaces, emoji or non-word characters.',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['updateChatbot'],
			},
		},
		routing: {
			send: {
				property: 'service_name',
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Chatbot Fields',
		name: 'chatbotFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['updateChatbot'],
			},
		},
		options: [
			{
				name: 'commandUrl',
				displayName: 'Command URL',
				values: [
					{
						displayName: 'Command URL',
						name: 'commandUrl',
						type: 'string',
						default: '',
						description: 'The HTTPS URL that Basecamp should call when the bot is addressed',
						routing: {
							send: {
								property: 'command_url',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
		],
	},
	{
		displayName:
			'DELETE /buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/integrations/{{ $parameter["integrationId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['deleteChatbot'],
			},
		},
	},
	/*----------------------------------------
	         Chatbot: deleteChatbot Parameters
	----------------------------------------*/
	{
		displayName: 'Project ID',
		name: 'bucketId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the project (bucket) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['deleteChatbot'],
			},
		},
	},
	{
		displayName: 'chatId',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the chat/campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['deleteChatbot'],
			},
		},
	},
	{
		displayName: 'integrationId',
		name: 'integrationId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the chatbot/integration - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['deleteChatbot'],
			},
		},
	},
	{
		displayName:
			'POST /integrations/{{ $parameter["chatbotKey"] }}/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/lines.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbotLine'],
			},
		},
	},
	/*----------------------------------------
	         Chatbot: createChatbotLine Parameters
	----------------------------------------*/
	{
		displayName: 'Chatbot Key',
		name: 'chatbotKey',
		type: 'string',
		default: '',
		required: true,
		description: 'The key for the chatbot - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbotLine'],
			},
		},
	},
	{
		displayName: 'Project ID',
		name: 'bucketId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the project (bucket) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbotLine'],
			},
		},
	},
	{
		displayName: 'chatId',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the chat/campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbotLine'],
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		typeOptions: {
			editor: 'htmlEditor',
		},
		default: '',
		required: true,
		description: 'The body for the Campfire line. HTML formatting is supported including additional tags for chatbot lines: table, tr, td...',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbotLine'],
			},
		},
		routing: {
			send: {
				property: 'content',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Content Parameter Name',
		name: 'contentParam',
		type: 'string',
		default: '',
		description:
			"Modifies the name of the required 'content' param to support webhooks from a third-party",
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['createChatbotLine'],
			},
		},
		routing: {
			send: {
				property: 'content_param',
				propertyInDotNotation: false,
				type: 'query',
				value: '={{ $value }}',
			},
		},
	},
];
