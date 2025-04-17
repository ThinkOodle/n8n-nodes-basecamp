// MessageType resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const messageTypeOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['messageType'],
			},
		},
		default: 'getMessageTypes',
		options: [
		{
			name: 'Create a Message Type',
			value: 'createMessageType',
			action: 'Create a message type',
			description: 'Creates a new message type in the specified project',
			routing: {
				request: {
					method: 'POST',
					url: '=/buckets/{{ $parameter["bucketId"] }}/categories.json'
				}
			}
		},
		{
			name: 'Destroy a Message Type',
			value: 'destroyMessageType',
			action: 'Destroy a message type',
			description: 'Deletes a specific message type',
			routing: {
				request: {
					method: 'DELETE',
					url: '=/buckets/{{ $parameter["bucketId"] }}/categories/{{ $parameter["categoryId"] }}.json'
				}
			}
		},
		{
			name: 'Get a Message Type',
			value: 'getMessageType',
			action: 'Get a message type',
			description: 'Returns a specific message type',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/categories/{{ $parameter["categoryId"] }}.json'
				}
			}
		},
		{
			name: 'Get Message Types',
			value: 'getMessageTypes',
			action: 'Get message types',
			description: 'Returns all message types in the specified project',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/categories.json'
				}
			}
		},
		{
			name: 'Update a Message Type',
			value: 'updateMessageType',
			action: 'Update a message type',
			description: 'Updates a specific message type',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/categories/{{ $parameter["categoryId"] }}.json'
				}
			}
		}
		],
	}
];
export const messageTypeFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/categories.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['getMessageTypes']
			}
		}
	},
	/*----------------------------------------
	         MessageType: getMessageTypes Parameters
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
				resource: ['messageType'],
				operation: ['getMessageTypes']
			}
		}
	},
	{
		displayName: 'POST /buckets/{{ $parameter["bucketId"] }}/categories.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['createMessageType']
			}
		}
	},
	/*----------------------------------------
	         MessageType: createMessageType Parameters
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
				resource: ['messageType'],
				operation: ['createMessageType']
			}
		}
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: "",
		required: true,
		description: 'The name of the message type',
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['createMessageType']
			}
		},
		routing: {
			send: {
				property: 'name',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Icon',
		name: 'icon',
		type: 'string',
		default: "",
		required: true,
		description: 'The emoji icon to use for the message type',
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['createMessageType']
			}
		},
		routing: {
			send: {
				property: 'icon',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/categories/{{ $parameter["categoryId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['getMessageType']
			}
		}
	},
	/*----------------------------------------
	         MessageType: getMessageType Parameters
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
				resource: ['messageType'],
				operation: ['getMessageType']
			}
		}
	},
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the message type (category) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['getMessageType']
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/categories/{{ $parameter["categoryId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['updateMessageType']
			}
		}
	},
	/*----------------------------------------
	         MessageType: updateMessageType Parameters
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
				resource: ['messageType'],
				operation: ['updateMessageType']
			}
		}
	},
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the message type (category) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['updateMessageType']
			}
		}
	},
	{
		displayName: 'Message Type Fields',
		name: 'messageTypeFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['updateMessageType']
			}
		},
		options: [
			{
				name: 'name',
				displayName: 'Name',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'The name of the message type',
						routing: {
							send: {
								property: 'name',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'icon',
				displayName: 'Icon',
				values: [
					{
						displayName: 'Icon',
						name: 'icon',
						type: 'string',
						default: '',
						description: 'The emoji icon to use for the message type',
						routing: {
							send: {
								property: 'icon',
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
		displayName: 'DELETE /buckets/{{ $parameter["bucketId"] }}/categories/{{ $parameter["categoryId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['destroyMessageType']
			}
		}
	},
	/*----------------------------------------
	         MessageType: destroyMessageType Parameters
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
				resource: ['messageType'],
				operation: ['destroyMessageType']
			}
		}
	},
	{
		displayName: 'categoryId',
		name: 'categoryId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the message type (category) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['messageType'],
				operation: ['destroyMessageType']
			}
		}
	}
];