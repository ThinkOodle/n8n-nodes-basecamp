// Webhook resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const webhookOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webhook'],
			},
		},
		default: 'getWebhooks',
		options: [
		{
			name: 'Get webhooks',
			value: 'getWebhooks',
			action: 'Get webhooks',
			description: 'Returns a list of webhooks in the specified project',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/webhooks.json'
				}
			}
		},
		{
			name: 'Create a webhook',
			value: 'createWebhook',
			action: 'Create a webhook',
			description: 'Creates a new webhook in the specified project',
			routing: {
				request: {
					method: 'POST',
					url: '=/buckets/{{ $parameter["bucketId"] }}/webhooks.json'
				}
			}
		},
		{
			name: 'Get a webhook',
			value: 'getWebhook',
			action: 'Get a webhook',
			description: 'Returns details for a specific webhook including recent deliveries',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/webhooks/{{ $parameter["webhookId"] }}.json'
				}
			}
		},
		{
			name: 'Update a webhook',
			value: 'updateWebhook',
			action: 'Update a webhook',
			description: 'Updates a specific webhook',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/webhooks/{{ $parameter["webhookId"] }}.json'
				}
			}
		},
		{
			name: 'Delete a webhook',
			value: 'deleteWebhook',
			action: 'Delete a webhook',
			description: 'Permanently deletes a webhook',
			routing: {
				request: {
					method: 'DELETE',
					url: '=/buckets/{{ $parameter["bucketId"] }}/webhooks/{{ $parameter["webhookId"] }}.json'
				}
			}
		}
		],
	}
];
export const webhookFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/webhooks.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['getWebhooks']
			}
		}
	},
	/*----------------------------------------
	         Webhook: getWebhooks Parameters
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
				resource: ['webhook'],
				operation: ['getWebhooks']
			}
		}
	},
	{
		displayName: 'POST /buckets/{{ $parameter["bucketId"] }}/webhooks.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['createWebhook']
			}
		}
	},
	/*----------------------------------------
	         Webhook: createWebhook Parameters
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
				resource: ['webhook'],
				operation: ['createWebhook']
			}
		}
	},
	{
		displayName: 'Payload URL',
		name: 'payloadUrl',
		type: 'string',
		default: "",
		required: true,
		description: 'The HTTPS URL that Basecamp will call when a matching event occurs',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['createWebhook']
			}
		},
		routing: {
			send: {
				property: 'payload_url',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Event Types',
		name: 'types',
		type: 'string',
		default: "",
		required: false,
		description: 'The types of events that will trigger this webhook',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['createWebhook']
			}
		},
		routing: {
			send: {
				property: 'types',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/webhooks/{{ $parameter["webhookId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['getWebhook']
			}
		}
	},
	/*----------------------------------------
	         Webhook: getWebhook Parameters
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
				resource: ['webhook'],
				operation: ['getWebhook']
			}
		}
	},
	{
		displayName: 'Webhook ID',
		name: 'webhookId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the webhook - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['getWebhook']
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/webhooks/{{ $parameter["webhookId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['updateWebhook']
			}
		}
	},
	/*----------------------------------------
	         Webhook: updateWebhook Parameters
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
				resource: ['webhook'],
				operation: ['updateWebhook']
			}
		}
	},
	{
		displayName: 'Webhook ID',
		name: 'webhookId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the webhook - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['updateWebhook']
			}
		}
	},
	{
		displayName: 'Payload URL',
		name: 'payloadUrl',
		type: 'string',
		default: '',
		required: true,
		description: 'The HTTPS URL that Basecamp will call when a matching event occurs',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['updateWebhook']
			}
		},
		routing: {
			send: {
				property: 'payload_url',
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Webhook Fields',
		name: 'webhookFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['updateWebhook']
			}
		},
		options: [
			{
				name: 'types',
				displayName: 'Event Types',
				values: [
					{
						displayName: 'Event Types',
						name: 'types',
						type: 'string',
						default: '',
						description: 'The types of events that will trigger this webhook',
						routing: {
							send: {
								property: 'types',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'active',
				displayName: 'Active',
				values: [
					{
						displayName: 'Active',
						name: 'active',
						type: 'boolean',
						default: false,
						description: 'Whether this webhook should be active',
						routing: {
							send: {
								property: 'active',
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
		displayName: 'DELETE /buckets/{{ $parameter["bucketId"] }}/webhooks/{{ $parameter["webhookId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['deleteWebhook']
			}
		}
	},
	/*----------------------------------------
	         Webhook: deleteWebhook Parameters
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
				resource: ['webhook'],
				operation: ['deleteWebhook']
			}
		}
	},
	{
		displayName: 'Webhook ID',
		name: 'webhookId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the webhook - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['webhook'],
				operation: ['deleteWebhook']
			}
		}
	}
];