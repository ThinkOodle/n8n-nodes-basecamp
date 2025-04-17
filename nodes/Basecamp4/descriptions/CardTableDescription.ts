// CardTable resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const cardTableOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['cardTable'],
			},
		},
		default: 'getCardTable',
		options: [
			{
				name: 'Get a card table',
				value: 'getCardTable',
				action: 'Get a card table',
				description: 'Returns a specific card table',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/card_tables/{{ $parameter["cardTableId"] }}.json',
					},
				},
			},
			{
				name: 'Get cards in a column',
				value: 'getCardsInColumn',
				action: 'Get cards in a column',
				description: 'Returns a paginated list of cards in a specific column',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/card_tables/lists/{{ $parameter["columnId"] }}/cards.json',
					},
				},
			},
			{
				name: 'Create a card',
				value: 'createCard',
				action: 'Create a card',
				description: 'Creates a new card in a specific column',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/card_tables/lists/{{ $parameter["columnId"] }}/cards.json',
					},
				},
			},
			{
				name: 'Get a card',
				value: 'getCard',
				action: 'Get a card',
				description: 'Returns details of a specific card',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/card_tables/cards/{{ $parameter["cardId"] }}.json',
					},
				},
			},
			{
				name: 'Update a card',
				value: 'updateCard',
				action: 'Update a card',
				description: 'Updates a specific card',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{ $parameter["bucketId"] }}/card_tables/cards/{{ $parameter["cardId"] }}.json',
					},
				},
			},
			{
				name: 'Move a card',
				value: 'moveCard',
				action: 'Move a card',
				description: 'Moves a card to a different column',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/card_tables/cards/{{ $parameter["cardId"] }}/moves.json',
					},
				},
			},
			{
				name: 'Get a column',
				value: 'getColumn',
				action: 'Get a column',
				description: 'Returns a specific column in a card table',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/card_tables/lists/{{ $parameter["columnId"] }}.json',
					},
				},
			},
			{
				name: 'Update a column',
				value: 'updateColumn',
				action: 'Update a column',
				description: 'Updates a specific column in a card table',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{ $parameter["bucketId"] }}/card_tables/lists/{{ $parameter["columnId"] }}.json',
					},
				},
			},
			{
				name: 'Create a column',
				value: 'createColumn',
				action: 'Create a column',
				description: 'Creates a new column in a card table',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/card_tables/{{ $parameter["cardTableId"] }}/columns.json',
					},
				},
			},
			{
				name: 'Move a column',
				value: 'moveColumn',
				action: 'Move a column',
				description: 'Moves a column to a new position in the card table',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/card_tables/{{ $parameter["cardTableId"] }}/moves.json',
					},
				},
			},
		],
	},
];
export const cardTableFields: INodeProperties[] = [
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/card_tables/{{ $parameter["cardTableId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['getCardTable'],
			},
		},
	},
	/*----------------------------------------
	         CardTable: getCardTable Parameters
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
				resource: ['cardTable'],
				operation: ['getCardTable'],
			},
		},
	},
	{
		displayName: 'Card Table ID',
		name: 'cardTableId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the card table - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['getCardTable'],
			},
		},
	},
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/card_tables/lists/{{ $parameter["columnId"] }}/cards.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['getCardsInColumn'],
			},
		},
	},
	/*----------------------------------------
	         CardTable: getCardsInColumn Parameters
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
				resource: ['cardTable'],
				operation: ['getCardsInColumn'],
			},
		},
	},
	{
		displayName: 'Column ID',
		name: 'columnId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the column - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['getCardsInColumn'],
			},
		},
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/card_tables/lists/{{ $parameter["columnId"] }}/cards.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['createCard'],
			},
		},
	},
	/*----------------------------------------
	         CardTable: createCard Parameters
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
				resource: ['cardTable'],
				operation: ['createCard'],
			},
		},
	},
	{
		displayName: 'Column ID',
		name: 'columnId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the column - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['createCard'],
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['createCard'],
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
		required: false,
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['createCard'],
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
		displayName: 'Due Date',
		name: 'dueOn',
		type: 'string',
		default: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['createCard'],
			},
		},
		routing: {
			send: {
				property: 'due_on',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value ? $value.split("T")[0] : "" }}',
			},
		},
	},
	{
		displayName: 'Send Notifications',
		name: 'notify',
		type: 'boolean',
		default: false,
		required: false,
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['createCard'],
			},
		},
		routing: {
			send: {
				property: 'notify',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/card_tables/cards/{{ $parameter["cardId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['getCard'],
			},
		},
	},
	/*----------------------------------------
	         CardTable: getCard Parameters
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
				resource: ['cardTable'],
				operation: ['getCard'],
			},
		},
	},
	{
		displayName: 'Card ID',
		name: 'cardId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the card - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['getCard'],
			},
		},
	},
	{
		displayName:
			'PUT /buckets/{{ $parameter["bucketId"] }}/card_tables/cards/{{ $parameter["cardId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['updateCard'],
			},
		},
	},
	/*----------------------------------------
	         CardTable: updateCard Parameters
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
				resource: ['cardTable'],
				operation: ['updateCard'],
			},
		},
	},
	{
		displayName: 'Card ID',
		name: 'cardId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the card - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['updateCard'],
			},
		},
	},
	{
		displayName: 'Due Date', // Basecamp API will wipe out the due date even if it's not provided in the request body so we always display this field
		name: 'dueOn',
		type: 'dateTime',
		default: '',
		description: 'Due date for the card (leave empty to remove the due date)',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['updateCard'],
			},
		},
		routing: {
			send: {
				property: 'due_on',
				type: 'body',
				value: '={{ $value ? $value.split("T")[0] : "" }}',
			},
		},
	},
	{
		displayName: 'Card Fields',
		name: 'cardFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['updateCard'],
			},
		},
		options: [
			{
				name: 'title',
				displayName: 'Title',
				values: [
					{
						displayName: 'Title',
						name: 'title',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: 'title',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'content',
				displayName: 'Content',
				values: [
					{
						displayName: 'Content',
						name: 'content',
						type: 'string',
						typeOptions: {
							editor: 'htmlEditor',
						},
						default: '',
						routing: {
							send: {
								property: 'content',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'assigneeIds',
				displayName: 'Assignee IDs',
				values: [
					{
						displayName: 'Assignee IDs',
						name: 'assigneeIds',
						type: 'string',
						default: '',
						description: 'JSON array of person IDs to assign',
						routing: {
							send: {
								property: 'assignee_ids',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
		],
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/card_tables/cards/{{ $parameter["cardId"] }}/moves.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['moveCard'],
			},
		},
	},
	/*----------------------------------------
	         CardTable: moveCard Parameters
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
				resource: ['cardTable'],
				operation: ['moveCard'],
			},
		},
	},
	{
		displayName: 'cardId',
		name: 'cardId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the card - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['moveCard'],
			},
		},
	},
	{
		displayName: 'Target Column ID',
		name: 'columnId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['moveCard'],
			},
		},
		routing: {
			send: {
				property: 'column_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/card_tables/lists/{{ $parameter["columnId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['getColumn'],
			},
		},
	},
	/*----------------------------------------
	         CardTable: getColumn Parameters
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
				resource: ['cardTable'],
				operation: ['getColumn'],
			},
		},
	},
	{
		displayName: 'Column ID',
		name: 'columnId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the column - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['getColumn'],
			},
		},
	},
	{
		displayName:
			'PUT /buckets/{{ $parameter["bucketId"] }}/card_tables/lists/{{ $parameter["columnId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['updateColumn'],
			},
		},
	},
	/*----------------------------------------
	         CardTable: updateColumn Parameters
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
				resource: ['cardTable'],
				operation: ['updateColumn'],
			},
		},
	},
	{
		displayName: 'Column ID',
		name: 'columnId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the column - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['updateColumn'],
			},
		},
	},
	{
		displayName: 'Column Fields',
		name: 'columnFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['updateColumn'],
			},
		},
		options: [
			{
				name: 'title',
				displayName: 'Title',
				values: [
					{
						displayName: 'Title',
						name: 'title',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: 'title',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'description',
				displayName: 'Description',
				values: [
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: 'description',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
		],
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/card_tables/{{ $parameter["cardTableId"] }}/columns.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['createColumn'],
			},
		},
	},
	/*----------------------------------------
	         CardTable: createColumn Parameters
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
				resource: ['cardTable'],
				operation: ['createColumn'],
			},
		},
	},
	{
		displayName: 'cardTableId',
		name: 'cardTableId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the card table - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['createColumn'],
			},
		},
	},
	{
		displayName: 'title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['createColumn'],
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
		displayName: 'description',
		name: 'description',
		type: 'string',
		default: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['createColumn'],
			},
		},
		routing: {
			send: {
				property: 'description',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/card_tables/{{ $parameter["cardTableId"] }}/moves.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['moveColumn'],
			},
		},
	},
	/*----------------------------------------
	         CardTable: moveColumn Parameters
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
				resource: ['cardTable'],
				operation: ['moveColumn'],
			},
		},
	},
	{
		displayName: 'cardTableId',
		name: 'cardTableId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the card table - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['moveColumn'],
			},
		},
	},
	{
		displayName: 'Source Column ID',
		name: 'sourceId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['moveColumn'],
			},
		},
		routing: {
			send: {
				property: 'source_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Target Position ID',
		name: 'targetId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['moveColumn'],
			},
		},
		routing: {
			send: {
				property: 'target_id',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Position',
		name: 'position',
		type: 'number',
		default: 0,
		required: false,
		displayOptions: {
			show: {
				resource: ['cardTable'],
				operation: ['moveColumn'],
			},
		},
		routing: {
			send: {
				property: 'position',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
];
