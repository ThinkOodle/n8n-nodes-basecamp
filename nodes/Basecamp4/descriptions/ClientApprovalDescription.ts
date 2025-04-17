// ClientApproval resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const clientApprovalOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['clientApproval'],
			},
		},
		default: 'getClientApprovals',
		options: [
		{
			name: 'Get client approvals',
			value: 'getClientApprovals',
			action: 'Get client approvals',
			description: 'Returns a paginated list of client approvals in the project',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/client/approvals.json'
				}
			}
		},
		{
			name: 'Get a client approval',
			value: 'getClientApproval',
			action: 'Get a client approval',
			description: 'Returns a specific client approval',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/client/approvals/{{ $parameter["approvalId"] }}.json'
				}
			}
		}
		],
	}
];
export const clientApprovalFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/client/approvals.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['clientApproval'],
				operation: ['getClientApprovals']
			}
		}
	},
	/*----------------------------------------
	         ClientApproval: getClientApprovals Parameters
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
				resource: ['clientApproval'],
				operation: ['getClientApprovals']
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/client/approvals/{{ $parameter["approvalId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['clientApproval'],
				operation: ['getClientApproval']
			}
		}
	},
	/*----------------------------------------
	         ClientApproval: getClientApproval Parameters
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
				resource: ['clientApproval'],
				operation: ['getClientApproval']
			}
		}
	},
	{
		displayName: 'Approval ID',
		name: 'approvalId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the client approval - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['clientApproval'],
				operation: ['getClientApproval']
			}
		}
	}
];