// Forward resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const forwardOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['forward'],
			},
		},
		default: 'getForwards',
		options: [
		{
			name: 'Get Forwards',
			value: 'getForwards',
			action: 'Get forwards',
			description: 'Returns a paginated list of active forwards in the specified inbox',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/inboxes/{{ $parameter["inboxId"] }}/forwards.json'
				}
			}
		},
		{
			name: 'Get a Forward',
			value: 'getForward',
			action: 'Get a forward',
			description: 'Returns a specific forward',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/inbox_forwards/{{ $parameter["forwardId"] }}.json'
				}
			}
		}
		],
	}
];
export const forwardFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/inboxes/{{ $parameter["inboxId"] }}/forwards.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['forward'],
				operation: ['getForwards']
			}
		}
	},
	/*----------------------------------------
	         Forward: getForwards Parameters
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
				resource: ['forward'],
				operation: ['getForwards']
			}
		}
	},
	{
		displayName: 'Inbox ID',
		name: 'inboxId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the inbox - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['forward'],
				operation: ['getForwards']
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/inbox_forwards/{{ $parameter["forwardId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['forward'],
				operation: ['getForward']
			}
		}
	},
	/*----------------------------------------
	         Forward: getForward Parameters
	----------------------------------------*/
	{
		displayName: 'bucketId',
		name: 'bucketId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the project (bucket) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['forward'],
				operation: ['getForward']
			}
		}
	},
	{
		displayName: 'Forward ID',
		name: 'forwardId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the forward - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['forward'],
				operation: ['getForward']
			}
		}
	}
];