// ClientVisibility resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const clientVisibilityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['clientVisibility'],
			},
		},
		default: 'toggleClientVisibility',
		options: [
		{
			name: 'Toggle client visibility',
			value: 'toggleClientVisibility',
			action: 'Toggle client visibility',
			description: 'Changes the client visibility for the specified recording in the specified project.',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/client_visibility.json'
				}
			}
		}
		],
	}
];
export const clientVisibilityFields: INodeProperties[] = [
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/client_visibility.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['clientVisibility'],
				operation: ['toggleClientVisibility']
			}
		}
	},
	/*----------------------------------------
	         ClientVisibility: toggleClientVisibility Parameters
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
				resource: ['clientVisibility'],
				operation: ['toggleClientVisibility']
			}
		}
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
				resource: ['clientVisibility'],
				operation: ['toggleClientVisibility']
			}
		}
	},
	{
		displayName: 'visible_to_clients',
		name: 'visibleToClients',
		type: 'boolean',
		default: false,
		required: true,
		description: 'Whether the recording should be visible to clients',
		displayOptions: {
			show: {
				resource: ['clientVisibility'],
				operation: ['toggleClientVisibility']
			}
		},
		routing: {
			send: {
				property: 'visible_to_clients',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	}
];