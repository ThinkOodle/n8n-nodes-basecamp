import { INodeProperties, INodeType, INodeTypeDescription } from 'n8n-workflow';

const properties2: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Card Tables',
				value: 'Card Tables',
				description: '',
			},
		],
		default: '',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Card Tables'],
			},
		},
		options: [
			{
				name: 'Get Card Table',
				value: 'Get Card Table',
				action: 'Get a card table',
				description: 'Returns a specific card table',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{$parameter["bucketId"]}}/card_tables/{{$parameter["cardTableId"]}}.json',
					},
				},
			},
			{
				name: 'Get Cards In Column',
				value: 'Get Cards In Column',
				action: 'Get cards in a column',
				description: 'Returns a paginated list of cards in a specific column',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{$parameter["bucketId"]}}/card_tables/lists/{{$parameter["columnId"]}}/cards.json',
					},
				},
			},
			{
				name: 'Create Card',
				value: 'Create Card',
				action: 'Create a card',
				description: 'Creates a new card in a specific column',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{$parameter["bucketId"]}}/card_tables/lists/{{$parameter["columnId"]}}/cards.json',
					},
				},
			},
			{
				name: 'Get Card',
				value: 'Get Card',
				action: 'Get a card',
				description: 'Returns details of a specific card',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{$parameter["bucketId"]}}/card_tables/cards/{{$parameter["cardId"]}}.json',
					},
				},
			},
			{
				name: 'Update Card',
				value: 'Update Card',
				action: 'Update a card',
				description: 'Updates a specific card',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{$parameter["bucketId"]}}/card_tables/cards/{{$parameter["cardId"]}}.json',
					},
				},
			},
			{
				name: 'Move Card',
				value: 'Move Card',
				action: 'Move a card',
				description: 'Moves a card to a different column',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{$parameter["bucketId"]}}/card_tables/cards/{{$parameter["cardId"]}}/moves.json',
					},
				},
			},
			{
				name: 'Get Column',
				value: 'Get Column',
				action: 'Get a column',
				description: 'Returns a specific column in a card table',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{$parameter["bucketId"]}}/card_tables/lists/{{$parameter["columnId"]}}.json',
					},
				},
			},
			{
				name: 'Update Column',
				value: 'Update Column',
				action: 'Update a column',
				description: 'Updates a specific column in a card table',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{$parameter["bucketId"]}}/card_tables/lists/{{$parameter["columnId"]}}.json',
					},
				},
			},
			{
				name: 'Create Column',
				value: 'Create Column',
				action: 'Create a column',
				description: 'Creates a new column in a card table',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{$parameter["bucketId"]}}/card_tables/{{$parameter["cardTableId"]}}/columns.json',
					},
				},
			},
			{
				name: 'Move Column',
				value: 'Move Column',
				action: 'Move a column',
				description: 'Moves a column to a new position in the card table',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{$parameter["bucketId"]}}/card_tables/{{$parameter["cardTableId"]}}/moves.json',
					},
				},
			},
		],
		default: '',
	},
	{
		displayName: 'GET /buckets/{bucketId}/card_tables/{cardTableId}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Card Table'],
			},
		},
	},
	{
		displayName: 'Bucket Id',
		name: 'bucketId',
		required: true,
		description: 'The ID of the project (bucket)',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Card Table'],
			},
		},
	},
	{
		displayName: 'Card Table Id',
		name: 'cardTableId',
		required: true,
		description: 'The ID of the card table',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Card Table'],
			},
		},
	},
	{
		displayName: 'GET /buckets/{bucketId}/card_tables/lists/{columnId}/cards.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Cards In Column'],
			},
		},
	},
	{
		displayName: 'Bucket Id',
		name: 'bucketId',
		required: true,
		description: 'The ID of the project (bucket)',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Cards In Column'],
			},
		},
	},
	{
		displayName: 'Column Id',
		name: 'columnId',
		required: true,
		description: 'The ID of the column',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Cards In Column'],
			},
		},
	},
	{
		displayName: 'POST /buckets/{bucketId}/card_tables/lists/{columnId}/cards.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Card'],
			},
		},
	},
	{
		displayName: 'Bucket Id',
		name: 'bucketId',
		required: true,
		description: 'The ID of the project (bucket)',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Card'],
			},
		},
	},
	{
		displayName: 'Column Id',
		name: 'columnId',
		required: true,
		description: 'The ID of the column',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Card'],
			},
		},
	},
	{
		required: true,
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Card'],
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'content',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Card'],
			},
		},
	},
	{
		displayName: 'Due On',
		name: 'due_on',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'due_on',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Card'],
			},
		},
	},
	{
		displayName: 'Notify',
		name: 'notify',
		type: 'boolean',
		default: false,
		routing: {
			send: {
				property: 'notify',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Card'],
			},
		},
	},
	{
		displayName: 'GET /buckets/{bucketId}/card_tables/cards/{cardId}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Card'],
			},
		},
	},
	{
		displayName: 'Bucket Id',
		name: 'bucketId',
		required: true,
		description: 'The ID of the project (bucket)',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Card'],
			},
		},
	},
	{
		displayName: 'Card Id',
		name: 'cardId',
		required: true,
		description: 'The ID of the card',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Card'],
			},
		},
	},
	{
		displayName: 'PUT /buckets/{bucketId}/card_tables/cards/{cardId}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Card'],
			},
		},
	},
	{
		displayName: 'Bucket Id',
		name: 'bucketId',
		required: true,
		description: 'The ID of the project (bucket)',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Card'],
			},
		},
	},
	{
		displayName: 'Card Id',
		name: 'cardId',
		required: true,
		description: 'The ID of the card',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Card'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Card'],
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'content',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Card'],
			},
		},
	},
	{
		displayName: 'Due On',
		name: 'due_on',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'due_on',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Card'],
			},
		},
	},
	{
		displayName: 'Assignee Ids',
		name: 'assignee_ids',
		type: 'json',
		default: '[\n  null\n]',
		routing: {
			send: {
				property: 'assignee_ids',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ JSON.parse($value) }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Card'],
			},
		},
	},
	{
		displayName: 'POST /buckets/{bucketId}/card_tables/cards/{cardId}/moves.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Move Card'],
			},
		},
	},
	{
		displayName: 'Bucket Id',
		name: 'bucketId',
		required: true,
		description: 'The ID of the project (bucket)',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Move Card'],
			},
		},
	},
	{
		displayName: 'Card Id',
		name: 'cardId',
		required: true,
		description: 'The ID of the card',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Move Card'],
			},
		},
	},
	{
		required: true,
		displayName: 'Column Id',
		name: 'column_id',
		type: 'number',
		default: 0,
		routing: {
			send: {
				property: 'column_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Move Card'],
			},
		},
	},
	{
		displayName: 'GET /buckets/{bucketId}/card_tables/lists/{columnId}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Column'],
			},
		},
	},
	{
		displayName: 'Bucket Id',
		name: 'bucketId',
		required: true,
		description: 'The ID of the project (bucket)',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Column'],
			},
		},
	},
	{
		displayName: 'Column Id',
		name: 'columnId',
		required: true,
		description: 'The ID of the column',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Get Column'],
			},
		},
	},
	{
		displayName: 'PUT /buckets/{bucketId}/card_tables/lists/{columnId}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Column'],
			},
		},
	},
	{
		displayName: 'Bucket Id',
		name: 'bucketId',
		required: true,
		description: 'The ID of the project (bucket)',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Column'],
			},
		},
	},
	{
		displayName: 'Column Id',
		name: 'columnId',
		required: true,
		description: 'The ID of the column',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Column'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Column'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'description',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Update Column'],
			},
		},
	},
	{
		displayName: 'POST /buckets/{bucketId}/card_tables/{cardTableId}/columns.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Column'],
			},
		},
	},
	{
		displayName: 'Bucket Id',
		name: 'bucketId',
		required: true,
		description: 'The ID of the project (bucket)',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Column'],
			},
		},
	},
	{
		displayName: 'Card Table Id',
		name: 'cardTableId',
		required: true,
		description: 'The ID of the card table',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Column'],
			},
		},
	},
	{
		required: true,
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Column'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		routing: {
			send: {
				property: 'description',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Create Column'],
			},
		},
	},
	{
		displayName: 'POST /buckets/{bucketId}/card_tables/{cardTableId}/moves.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Move Column'],
			},
		},
	},
	{
		displayName: 'Bucket Id',
		name: 'bucketId',
		required: true,
		description: 'The ID of the project (bucket)',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Move Column'],
			},
		},
	},
	{
		displayName: 'Card Table Id',
		name: 'cardTableId',
		required: true,
		description: 'The ID of the card table',
		default: 0,
		type: 'number',
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Move Column'],
			},
		},
	},
	{
		required: true,
		displayName: 'Source Id',
		name: 'source_id',
		type: 'number',
		default: 0,
		routing: {
			send: {
				property: 'source_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Move Column'],
			},
		},
	},
	{
		required: true,
		displayName: 'Target Id',
		name: 'target_id',
		type: 'number',
		default: 0,
		routing: {
			send: {
				property: 'target_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Move Column'],
			},
		},
	},
	{
		displayName: 'Position',
		name: 'position',
		type: 'number',
		default: 1,
		routing: {
			send: {
				property: 'position',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
		displayOptions: {
			show: {
				resource: ['Card Tables'],
				operation: ['Move Column'],
			},
		},
	},
	{
		displayName: 'Return Full Response',
		name: 'returnFullResponse',
		type: 'boolean',
		default: false,
		description:
			'Whether to return the full response (status code, headers, body) instead of only body',
		noDataExpression: true,
	},
];

// Step 2: Simple loop to modify all operations to use the toggle
properties2.forEach((prop: any) => {
	if (prop.name === 'operation' && prop.options) {
		prop.options.forEach((option: any) => {
			if (option.routing?.request) {
				// Set returnFullResponse based on the parameter
				option.routing.request.returnFullResponse = '={{ $parameter["returnFullResponse"] }}';

				// Initialize output if needed
				if (!option.routing.output) {
					option.routing.output = {};
				}

				// Use declarative postReceive - no function needed
				option.routing.output.postReceive = [
					{
						type: 'set',
						enabled: '={{ $parameter["returnFullResponse"] }}',
						properties: {
							value: '={{ $response }}',
						},
					},
				];
			}
		});
	}
});

// Do not delete. For debug.
// console.log(JSON.stringify(properties, null, 2));

export class Basecamp4 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Basecamp',
		name: 'basecamp4',
		icon: 'file:Basecamp.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Interact with Basecamp API',
		defaults: {
			name: 'Basecamp',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'basecamp4OAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			baseURL: '={{"https://3.basecampapi.com/" + $credentials.accountId}}',
		},
		properties: properties2,
	};
}
