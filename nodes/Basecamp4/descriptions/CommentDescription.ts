// Comment resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const commentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['comment'],
			},
		},
		default: 'getComments',
		options: [
			{
				name: 'Get comments',
				value: 'getComments',
				action: 'Get comments',
				description: 'Returns a list of comments for the specified recording',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/comments.json',
					},
				},
			},
			{
				name: 'Create a comment',
				value: 'createComment',
				action: 'Create a comment',
				description: 'Creates a new comment on the specified recording',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/comments.json',
					},
				},
			},
			{
				name: 'Get a comment',
				value: 'getComment',
				action: 'Get a comment',
				description: 'Returns details for a specific comment',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/comments/{{ $parameter["commentId"] }}.json',
					},
				},
			},
			{
				name: 'Update a comment',
				value: 'updateComment',
				action: 'Update a comment',
				description: 'Updates a specific comment',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{ $parameter["bucketId"] }}/comments/{{ $parameter["commentId"] }}.json',
					},
				},
			},
		],
	},
];
export const commentFields: INodeProperties[] = [
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/comments.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['getComments'],
			},
		},
	},
	/*----------------------------------------
	         Comment: getComments Parameters
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
				resource: ['comment'],
				operation: ['getComments'],
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
				resource: ['comment'],
				operation: ['getComments'],
			},
		},
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/comments.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['createComment'],
			},
		},
	},
	/*----------------------------------------
	         Comment: createComment Parameters
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
				resource: ['comment'],
				operation: ['createComment'],
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
				resource: ['comment'],
				operation: ['createComment'],
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
		description: 'The content of the comment. May contain HTML',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['createComment'],
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
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/comments/{{ $parameter["commentId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['getComment'],
			},
		},
	},
	/*----------------------------------------
	         Comment: getComment Parameters
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
				resource: ['comment'],
				operation: ['getComment'],
			},
		},
	},
	{
		displayName: 'Comment ID',
		name: 'commentId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the comment - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['getComment'],
			},
		},
	},
	{
		displayName:
			'PUT /buckets/{{ $parameter["bucketId"] }}/comments/{{ $parameter["commentId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['updateComment'],
			},
		},
	},
	/*----------------------------------------
	         Comment: updateComment Parameters
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
				resource: ['comment'],
				operation: ['updateComment'],
			},
		},
	},
	{
		displayName: 'Comment ID',
		name: 'commentId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the comment - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['updateComment'],
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
		description: 'The content of the comment. May contain HTML',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['updateComment'],
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
