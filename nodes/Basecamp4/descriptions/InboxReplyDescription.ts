// InboxReply resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const inboxReplyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['inboxReply'],
			},
		},
		default: 'getInboxReplies',
		options: [
		{
			name: 'Get Inbox Replies',
			value: 'getInboxReplies',
			action: 'Get inbox replies',
			description: 'Returns a paginated list of inbox replies for a forward',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/inbox_forwards/{{ $parameter["forwardId"] }}/replies.json'
				}
			}
		},
		{
			name: 'Get an Inbox Reply',
			value: 'getInboxReply',
			action: 'Get an inbox reply',
			description: 'Returns a specific inbox reply',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/inbox_forwards/{{ $parameter["forwardId"] }}/replies/{{ $parameter["replyId"] }}.json'
				}
			}
		}
		],
	}
];
export const inboxReplyFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/inbox_forwards/{{ $parameter["forwardId"] }}/replies.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['inboxReply'],
				operation: ['getInboxReplies']
			}
		}
	},
	/*----------------------------------------
	         InboxReply: getInboxReplies Parameters
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
				resource: ['inboxReply'],
				operation: ['getInboxReplies']
			}
		}
	},
	{
		displayName: 'Forward ID',
		name: 'forwardId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the forward - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['inboxReply'],
				operation: ['getInboxReplies']
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/inbox_forwards/{{ $parameter["forwardId"] }}/replies/{{ $parameter["replyId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['inboxReply'],
				operation: ['getInboxReply']
			}
		}
	},
	/*----------------------------------------
	         InboxReply: getInboxReply Parameters
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
				resource: ['inboxReply'],
				operation: ['getInboxReply']
			}
		}
	},
	{
		displayName: 'Forward ID',
		name: 'forwardId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the forward - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['inboxReply'],
				operation: ['getInboxReply']
			}
		}
	},
	{
		displayName: 'Reply ID',
		name: 'replyId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the reply - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['inboxReply'],
				operation: ['getInboxReply']
			}
		}
	}
];