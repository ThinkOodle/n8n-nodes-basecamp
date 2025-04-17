// Document resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const documentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['document'],
			},
		},
		default: 'getDocuments',
		options: [
			{
				name: 'Get documents',
				value: 'getDocuments',
				action: 'Get documents',
				description: 'Returns a list of documents in the specified vault',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/documents.json',
					},
				},
			},
			{
				name: 'Create a document',
				value: 'createDocument',
				action: 'Create a document',
				description: 'Creates a new document in the specified vault',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/documents.json',
					},
				},
			},
			{
				name: 'Get a document',
				value: 'getDocument',
				action: 'Get a document',
				description: 'Returns details for a specific document',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/documents/{{ $parameter["documentId"] }}.json',
					},
				},
			},
			{
				name: 'Update a document',
				value: 'updateDocument',
				action: 'Update a document',
				description: 'Updates a specific document',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{ $parameter["bucketId"] }}/documents/{{ $parameter["documentId"] }}.json',
					},
				},
			},
		],
	},
];
export const documentFields: INodeProperties[] = [
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/documents.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['getDocuments'],
			},
		},
	},
	/*----------------------------------------
	         Document: getDocuments Parameters
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
				resource: ['document'],
				operation: ['getDocuments'],
			},
		},
	},
	{
		displayName: 'Vault ID',
		name: 'vaultId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the vault - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['getDocuments'],
			},
		},
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/documents.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
	},
	/*----------------------------------------
	         Document: createDocument Parameters
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
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
	},
	{
		displayName: 'vaultId',
		name: 'vaultId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the vault - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'The title of the document',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		typeOptions: {
			editor: 'htmlEditor',
		},
		default: '',
		required: true,
		description: 'The content of the document. May contain HTML',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		routing: {
			send: {
				property: 'content',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		default: '',
		required: false,
		description: 'Set to active to publish immediately',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		routing: {
			send: {
				property: 'status',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/documents/{{ $parameter["documentId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['getDocument'],
			},
		},
	},
	/*----------------------------------------
	         Document: getDocument Parameters
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
				resource: ['document'],
				operation: ['getDocument'],
			},
		},
	},
	{
		displayName: 'Document ID',
		name: 'documentId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the document - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['getDocument'],
			},
		},
	},
	{
		displayName:
			'PUT /buckets/{{ $parameter["bucketId"] }}/documents/{{ $parameter["documentId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['updateDocument'],
			},
		},
	},
	/*----------------------------------------
	         Document: updateDocument Parameters
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
				resource: ['document'],
				operation: ['updateDocument'],
			},
		},
	},
	{
		displayName: 'documentId',
		name: 'documentId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the document - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['updateDocument'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'The title of the document',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['updateDocument'],
			},
		},
		routing: {
			send: {
				property: 'title',
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		typeOptions: {
			editor: 'htmlEditor',
		},
		default: '',
		required: true,
		description: 'The content of the document. May contain HTML',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['updateDocument'],
			},
		},
		routing: {
			send: {
				property: 'content',
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
];
