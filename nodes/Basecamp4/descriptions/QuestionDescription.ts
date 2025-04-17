// Question resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const questionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['question'],
			},
		},
		default: 'getQuestions',
		options: [
			{
				name: 'Get Questions',
				value: 'getQuestions',
				action: 'Get questions',
				description: 'Returns a paginated list of questions in the questionnaire',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/questionnaires/{{ $parameter["questionnaireId"] }}/questions.json',
					},
				},
			},
			{
				name: 'Create a Question',
				value: 'createQuestion',
				action: 'Create a question',
				description: 'Creates a new question in the questionnaire',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/questionnaires/{{ $parameter["questionnaireId"] }}/questions.json',
					},
				},
			},
			{
				name: 'Get a Question',
				value: 'getQuestion',
				action: 'Get a question',
				description: 'Returns a specific question',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/questions/{{ $parameter["questionId"] }}.json',
					},
				},
			},
			{
				name: 'Update a Question',
				value: 'updateQuestion',
				action: 'Update a question',
				description: 'Updates a specific question',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{ $parameter["bucketId"] }}/questions/{{ $parameter["questionId"] }}.json',
					},
				},
			},
		],
	},
];
export const questionFields: INodeProperties[] = [
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/questionnaires/{{ $parameter["questionnaireId"] }}/questions.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['getQuestions'],
			},
		},
	},
	/*----------------------------------------
	         Question: getQuestions Parameters
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
				resource: ['question'],
				operation: ['getQuestions'],
			},
		},
	},
	{
		displayName: 'Questionnaire ID',
		name: 'questionnaireId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the questionnaire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['getQuestions'],
			},
		},
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/questionnaires/{{ $parameter["questionnaireId"] }}/questions.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['createQuestion'],
			},
		},
	},
	/*----------------------------------------
	         Question: createQuestion Parameters
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
				resource: ['question'],
				operation: ['createQuestion'],
			},
		},
	},
	{
		displayName: 'questionnaireId',
		name: 'questionnaireId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the questionnaire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['createQuestion'],
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
		description: 'The text of the question',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['createQuestion'],
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
		displayName: 'Schedule',
		name: 'schedule',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['createQuestion'],
			},
		},
		routing: {
			send: {
				property: 'schedule',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Presenting Group (JSON)',
		name: 'presentingGroupJson',
		type: 'string',
		default: '',
		description: 'Array of person IDs who will be asked to answer',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['createQuestion'],
			},
		},
		routing: {
			send: {
				property: 'presenting_group_json',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/questions/{{ $parameter["questionId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['getQuestion'],
			},
		},
	},
	/*----------------------------------------
	         Question: getQuestion Parameters
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
				resource: ['question'],
				operation: ['getQuestion'],
			},
		},
	},
	{
		displayName: 'Question ID',
		name: 'questionId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the question - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['getQuestion'],
			},
		},
	},
	{
		displayName:
			'PUT /buckets/{{ $parameter["bucketId"] }}/questions/{{ $parameter["questionId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['updateQuestion'],
			},
		},
	},
	/*----------------------------------------
	         Question: updateQuestion Parameters
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
				resource: ['question'],
				operation: ['updateQuestion'],
			},
		},
	},
	{
		displayName: 'questionId',
		name: 'questionId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the question - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['updateQuestion'],
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
		description: 'The text of the question',
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['updateQuestion'],
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
	{
		displayName: 'Question Fields',
		name: 'questionFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['question'],
				operation: ['updateQuestion'],
			},
		},
		options: [
			{
				name: 'schedule',
				displayName: 'Schedule',
				values: [
					{
						displayName: 'Schedule',
						name: 'schedule',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: 'schedule',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'presentingGroupJson',
				displayName: 'Presenting Group',
				values: [
					{
						displayName: 'Presenting Group JSON',
						name: 'presentingGroupJson',
						type: 'string',
						default: '',
						description: 'Array of person IDs who will be asked to answer',
						routing: {
							send: {
								property: 'presenting_group_json',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
		],
	},
];
