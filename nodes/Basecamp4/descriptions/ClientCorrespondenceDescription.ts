// ClientCorrespondence resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const clientCorrespondenceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['clientCorrespondence'],
			},
		},
		default: 'getClientCorrespondences',
		options: [
		{
			name: 'Get client correspondences',
			value: 'getClientCorrespondences',
			action: 'Get client correspondences',
			description: 'Returns a paginated list of client correspondences in the specified project.',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/client/correspondences.json'
				}
			}
		},
		{
			name: 'Get a client correspondence',
			value: 'getClientCorrespondence',
			action: 'Get a client correspondence',
			description: 'Returns the client correspondence with the specified ID in the specified project.',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/client/correspondences/{{ $parameter["correspondenceId"] }}.json'
				}
			}
		}
		],
	}
];
export const clientCorrespondenceFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/client/correspondences.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['clientCorrespondence'],
				operation: ['getClientCorrespondences']
			}
		}
	},
	/*----------------------------------------
	         ClientCorrespondence: getClientCorrespondences Parameters
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
				resource: ['clientCorrespondence'],
				operation: ['getClientCorrespondences']
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/client/correspondences/{{ $parameter["correspondenceId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['clientCorrespondence'],
				operation: ['getClientCorrespondence']
			}
		}
	},
	/*----------------------------------------
	         ClientCorrespondence: getClientCorrespondence Parameters
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
				resource: ['clientCorrespondence'],
				operation: ['getClientCorrespondence']
			}
		}
	},
	{
		displayName: 'Correspondence ID',
		name: 'correspondenceId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the client correspondence - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['clientCorrespondence'],
				operation: ['getClientCorrespondence']
			}
		}
	}
];