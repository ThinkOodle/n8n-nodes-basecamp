// MessageBoard resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const messageBoardOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['messageBoard'],
			},
		},
		default: 'getMessageBoard',
		options: [
		{
			name: 'Get Message Board',
			value: 'getMessageBoard',
			action: 'Get message board',
			description: 'Returns the message board for the specified project',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/message_boards/{{ $parameter["messageBoardId"] }}.json'
				}
			}
		}
		],
	}
];
export const messageBoardFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/message_boards/{{ $parameter["messageBoardId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['messageBoard'],
				operation: ['getMessageBoard']
			}
		}
	},
	/*----------------------------------------
	         MessageBoard: getMessageBoard Parameters
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
				resource: ['messageBoard'],
				operation: ['getMessageBoard']
			}
		}
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
				resource: ['messageBoard'],
				operation: ['getMessageBoard']
			}
		}
	}
];