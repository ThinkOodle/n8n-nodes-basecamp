// Event resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const eventOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['event'],
			},
		},
		default: 'getEvents',
		options: [
			{
				name: 'Get events',
				value: 'getEvents',
				action: 'Get events',
				description:
					'Returns a paginated list of events for the specified recording in the specified project.',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/events.json',
					},
				},
			},
		],
	},
];
export const eventFields: INodeProperties[] = [
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/events.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['getEvents'],
			},
		},
	},
	/*----------------------------------------
	         Event: getEvents Parameters
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
				resource: ['event'],
				operation: ['getEvents'],
			},
		},
	},
	{
		displayName: 'Recording ID',
		name: 'recordingId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the recording - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['event'],
				operation: ['getEvents'],
			},
		},
	},
];
