// Message resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const messageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['message'],
			},
		},
		default: 'getMessages',
		options: [
			{
				name: 'Get Messages',
				value: 'getMessages',
				action: 'Get messages',
				description: 'Returns a list of messages in the specified message board',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/message_boards/{{ $parameter["messageBoardId"] }}/messages.json',
					},
				},
			},
			{
				name: 'Create a Message',
				value: 'createMessage',
				action: 'Create a message',
				description: 'Creates a new message in the specified message board',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/message_boards/{{ $parameter["messageBoardId"] }}/messages.json',
					},
				},
			},
			{
				name: 'Get a Message',
				value: 'getMessage',
				action: 'Get a message',
				description: 'Returns details for a specific message',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/messages/{{ $parameter["messageId"] }}.json',
					},
				},
			},
			{
				name: 'Update a Message',
				value: 'updateMessage',
				action: 'Update a message',
				description: 'Updates a specific message',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{ $parameter["bucketId"] }}/messages/{{ $parameter["messageId"] }}.json',
					},
				},
			},
		],
	},
];
export const messageFields: INodeProperties[] = [
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/message_boards/{{ $parameter["messageBoardId"] }}/messages.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['getMessages'],
			},
		},
	},
	/*----------------------------------------
	         Message: getMessages Parameters
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
				resource: ['message'],
				operation: ['getMessages'],
			},
		},
	},
	{
		displayName: 'Message Board ID',
		name: 'messageBoardId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the message board - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['getMessages'],
			},
		},
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/message_boards/{{ $parameter["messageBoardId"] }}/messages.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['createMessage'],
			},
		},
	},
	/*----------------------------------------
	         Message: createMessage Parameters
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
				resource: ['message'],
				operation: ['createMessage'],
			},
		},
	},
	{
		displayName: 'messageBoardId',
		name: 'messageBoardId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the message board - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['createMessage'],
			},
		},
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		default: '',
		required: true,
		description: 'The title of the message',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['createMessage'],
			},
		},
		routing: {
			send: {
				property: 'subject',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		default: '',
		required: true,
		description: 'Set to active to publish immediately',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['createMessage'],
			},
		},
		routing: {
			send: {
				property: 'status',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
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
		description: 'The body of the message. May contain HTML.',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['createMessage'],
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
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'number',
		default: 0,
		description: 'Optional. The ID of the message type/category.',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['createMessage'],
			},
		},
		routing: {
			send: {
				property: 'category_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Notification Recipients',
		name: 'subscriptions',
		type: 'string',
		default: '',
		description: 'Optional. IDs of people to be notified of the new message.',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['createMessage'],
			},
		},
		routing: {
			send: {
				property: 'subscriptions',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/messages/{{ $parameter["messageId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['getMessage'],
			},
		},
	},
	/*----------------------------------------
	         Message: getMessage Parameters
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
				resource: ['message'],
				operation: ['getMessage'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the message - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['getMessage'],
			},
		},
	},
	{
		displayName:
			'PUT /buckets/{{ $parameter["bucketId"] }}/messages/{{ $parameter["messageId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['updateMessage'],
			},
		},
	},
	/*----------------------------------------
	         Message: updateMessage Parameters
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
				resource: ['message'],
				operation: ['updateMessage'],
			},
		},
	},
	{
		displayName: 'messageId',
		name: 'messageId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the message - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['updateMessage'],
			},
		},
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		default: '',
		required: true,
		description: 'The title of the message',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['updateMessage'],
			},
		},
		routing: {
			send: {
				property: 'subject',
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Message Fields',
		name: 'messageFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['updateMessage'],
			},
		},
		options: [
			{
				name: 'content',
				displayName: 'Content',
				values: [
					{
						displayName: 'Content',
						name: 'content',
						type: 'string',
						typeOptions: {
							editor: 'htmlEditor',
						},
						default: '',
						description: 'The body of the message. May contain HTML.',
						routing: {
							send: {
								property: 'content',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'categoryId',
				displayName: 'Category ID',
				values: [
					{
						displayName: 'Category ID',
						name: 'categoryId',
						type: 'number',
						default: 0,
						description: 'The ID of the message type/category',
						routing: {
							send: {
								property: 'category_id',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
		],
	},
];
