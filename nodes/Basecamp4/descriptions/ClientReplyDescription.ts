// ClientReply resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const clientReplyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['clientReply'],
			},
		},
		default: 'getClientReplies',
		options: [
			{
				name: 'Get Client Replies',
				value: 'getClientReplies',
				action: 'Get client replies',
				description: 'Returns a paginated list of client replies for the specified recording in the specified project',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/client/recordings/{{ $parameter["recordingId"] }}/replies.json',
					},
				},
			},
			{
				name: 'Get a Client Reply',
				value: 'getClientReply',
				action: 'Get a client reply',
				description: 'Returns the client reply with the specified ID for the specified recording in the specified project',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/client/recordings/{{ $parameter["recordingId"] }}/replies/{{ $parameter["replyId"] }}.json',
					},
				},
			},
		],
	},
];
export const clientReplyFields: INodeProperties[] = [
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/client/recordings/{{ $parameter["recordingId"] }}/replies.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['clientReply'],
				operation: ['getClientReplies'],
			},
		},
	},
	/*----------------------------------------
	         ClientReply: getClientReplies Parameters
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
				resource: ['clientReply'],
				operation: ['getClientReplies'],
			},
		},
	},
	{
		displayName: 'Recording ID',
		name: 'recordingId',
		type: 'number',
		default: 0,
		required: true,
		description:
			'The ID of the recording (client correspondence or client approval) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['clientReply'],
				operation: ['getClientReplies'],
			},
		},
	},
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/client/recordings/{{ $parameter["recordingId"] }}/replies/{{ $parameter["replyId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['clientReply'],
				operation: ['getClientReply'],
			},
		},
	},
	/*----------------------------------------
	         ClientReply: getClientReply Parameters
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
				resource: ['clientReply'],
				operation: ['getClientReply'],
			},
		},
	},
	{
		displayName: 'Recording ID',
		name: 'recordingId',
		type: 'number',
		default: 0,
		required: true,
		description:
			'The ID of the recording (client correspondence or client approval) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['clientReply'],
				operation: ['getClientReply'],
			},
		},
	},
	{
		displayName: 'Reply ID',
		name: 'replyId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the client reply - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['clientReply'],
				operation: ['getClientReply'],
			},
		},
	},
];
