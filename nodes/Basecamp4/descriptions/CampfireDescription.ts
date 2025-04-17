// Campfire resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const campfireOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['campfire'],
			},
		},
		default: 'getCampfires',
		options: [
			{
				name: 'Get Campfires',
				value: 'getCampfires',
				action: 'Get Campfires',
				description: 'Returns a paginated list of all active Campfires visible to the current user',
				routing: {
					request: {
						method: 'GET',
						url: '=/chats.json',
					},
				},
			},
			{
				name: 'Get a Campfire',
				value: 'getCampfire',
				action: 'Get a Campfire',
				description: 'Returns the Campfire with the specified ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}.json',
					},
				},
			},
			{
				name: 'Get Campfire lines',
				value: 'getCampfireLines',
				action: 'Get Campfire lines',
				description: 'Returns a paginated list of lines in the Campfire',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/lines.json',
					},
				},
			},
			{
				name: 'Create a Campfire line',
				value: 'createCampfireLine',
				action: 'Create a Campfire line',
				description: 'Creates a new line in the Campfire',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/lines.json',
					},
				},
			},
			{
				name: 'Get a Campfire line',
				value: 'getCampfireLine',
				action: 'Get a Campfire line',
				description: 'Returns a specific line in the Campfire',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/lines/{{ $parameter["lineId"] }}.json',
					},
				},
			},
			{
				name: 'Delete a Campfire line',
				value: 'deleteCampfireLine',
				action: 'Delete a Campfire line',
				description: 'Deletes a specific line from the Campfire',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/lines/{{ $parameter["lineId"] }}.json',
					},
				},
			},
		],
	},
];
export const campfireFields: INodeProperties[] = [
	{
		displayName: 'GET /chats.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['getCampfires'],
			},
		},
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['getCampfire'],
			},
		},
	},
	/*----------------------------------------
	         Campfire: getCampfire Parameters
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
				resource: ['campfire'],
				operation: ['getCampfire'],
			},
		},
	},
	{
		displayName: 'Campfire ID',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['getCampfire'],
			},
		},
	},
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/lines.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['getCampfireLines'],
			},
		},
	},
	/*----------------------------------------
	         Campfire: getCampfireLines Parameters
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
				resource: ['campfire'],
				operation: ['getCampfireLines'],
			},
		},
	},
	{
		displayName: 'chatId',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['getCampfireLines'],
			},
		},
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/lines.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['createCampfireLine'],
			},
		},
	},
	/*----------------------------------------
	         Campfire: createCampfireLine Parameters
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
				resource: ['campfire'],
				operation: ['createCampfireLine'],
			},
		},
	},
	{
		displayName: 'chatId',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['createCampfireLine'],
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
		description: 'The text content of the campfire line',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['createCampfireLine'],
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
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/lines/{{ $parameter["lineId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['getCampfireLine'],
			},
		},
	},
	/*----------------------------------------
	         Campfire: getCampfireLine Parameters
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
				resource: ['campfire'],
				operation: ['getCampfireLine'],
			},
		},
	},
	{
		displayName: 'chatId',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['getCampfireLine'],
			},
		},
	},
	{
		displayName: 'Line ID',
		name: 'lineId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the campfire line - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['getCampfireLine'],
			},
		},
	},
	{
		displayName:
			'DELETE /buckets/{{ $parameter["bucketId"] }}/chats/{{ $parameter["chatId"] }}/lines/{{ $parameter["lineId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['deleteCampfireLine'],
			},
		},
	},
	/*----------------------------------------
	         Campfire: deleteCampfireLine Parameters
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
				resource: ['campfire'],
				operation: ['deleteCampfireLine'],
			},
		},
	},
	{
		displayName: 'chatId',
		name: 'chatId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the campfire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['deleteCampfireLine'],
			},
		},
	},
	{
		displayName: 'lineId',
		name: 'lineId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the campfire line - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['campfire'],
				operation: ['deleteCampfireLine'],
			},
		},
	},
];
