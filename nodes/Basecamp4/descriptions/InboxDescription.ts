// Inbox resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const inboxOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['inbox'],
			},
		},
		default: 'getInbox',
		options: [
		{
			name: 'Get Inbox',
			value: 'getInbox',
			action: 'Get inbox',
			description: 'Returns the inbox for the specified project',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/inboxes/{{ $parameter["inboxId"] }}.json'
				}
			}
		}
		],
	}
];
export const inboxFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/inboxes/{{ $parameter["inboxId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['inbox'],
				operation: ['getInbox']
			}
		}
	},
	/*----------------------------------------
	         Inbox: getInbox Parameters
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
				resource: ['inbox'],
				operation: ['getInbox']
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
				resource: ['inbox'],
				operation: ['getInbox']
			}
		}
	}
];