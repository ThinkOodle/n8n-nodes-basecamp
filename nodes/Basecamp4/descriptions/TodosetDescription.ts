// Todoset resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const todosetOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['todoset'],
			},
		},
		default: 'getTodoset',
		options: [
		{
			name: 'Get to-Do Set',
			value: 'getTodoset',
			action: 'Get to do set',
			description: 'Returns the to-do set for the specified project',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/todosets/{{ $parameter["todosetId"] }}.json'
				}
			}
		}
		],
	}
];
export const todosetFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/todosets/{{ $parameter["todosetId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todoset'],
				operation: ['getTodoset']
			}
		}
	},
	/*----------------------------------------
	         Todoset: getTodoset Parameters
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
				resource: ['todoset'],
				operation: ['getTodoset']
			}
		}
	},
	{
		displayName: 'To-Do Set ID',
		name: 'todosetId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do set - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todoset'],
				operation: ['getTodoset']
			}
		}
	}
];