// Todo resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const todoOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['todo'],
			},
		},
		default: 'getTodos',
		options: [
			{
				name: 'Complete a to-Do',
				value: 'completeTodo',
				action: 'Complete a to do',
				description: 'Marks a to-do as completed',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/todos/{{ $parameter["todoId"] }}/completion.json',
					},
				},
			},
			{
				name: 'Create a to-Do',
				value: 'createTodo',
				action: 'Create a to do',
				description: 'Creates a new to-do in the specified to-do list',
				routing: {
					request: {
						method: 'POST',
						url: '=/buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}/todos.json',
					},
				},
			},
			{
				name: 'Get a to-Do',
				value: 'getTodo',
				action: 'Get a to do',
				description: 'Returns details for a specific to-do',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/todos/{{ $parameter["todoId"] }}.json',
					},
				},
			},
			{
				name: 'Get to-Dos',
				value: 'getTodos',
				action: 'Get to dos',
				description: 'Returns a list of to-dos in the specified to-do list',
				routing: {
					request: {
						method: 'GET',
						url: '=/buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}/todos.json',
					},
				},
			},
			{
				name: 'Reposition a to-Do',
				value: 'repositionTodo',
				action: 'Reposition a to do',
				description: 'Changes the position of a to-do within its parent list',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{ $parameter["bucketId"] }}/todos/{{ $parameter["todoId"] }}/position.json',
					},
				},
			},
			{
				name: 'Uncomplete a to-Do',
				value: 'uncompleteTodo',
				action: 'Uncomplete a to do',
				description: 'Marks a to-do as uncompleted',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/buckets/{{ $parameter["bucketId"] }}/todos/{{ $parameter["todoId"] }}/completion.json',
					},
				},
			},
			{
				name: 'Update a to-Do',
				value: 'updateTodo',
				action: 'Update a to do',
				description: 'Updates a specific to-do',
				routing: {
					request: {
						method: 'PUT',
						url: '=/buckets/{{ $parameter["bucketId"] }}/todos/{{ $parameter["todoId"] }}.json',
					},
				},
			},
		],
	},
];
export const todoFields: INodeProperties[] = [
	{
		displayName:
			'GET /buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}/todos.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['getTodos'],
			},
		},
	},
	/*----------------------------------------
	         Todo: getTodos Parameters
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
				resource: ['todo'],
				operation: ['getTodos'],
			},
		},
	},
	{
		displayName: 'To-Do List ID',
		name: 'todolistId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do list - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['getTodos'],
			},
		},
	},
	{
		displayName: 'Show Completed',
		name: 'completed',
		type: 'string',
		default: 'true',
		description: 'Filter todos by completion status',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['getTodos'],
			},
		},
		routing: {
			send: {
				property: 'completed',
				propertyInDotNotation: false,
				type: 'query',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Page Number',
		name: 'page',
		type: 'number',
		default: 0,
		description: 'Page number for paginated results',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['getTodos'],
			},
		},
		routing: {
			send: {
				property: 'page',
				propertyInDotNotation: false,
				type: 'query',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName:
			'POST /buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}/todos.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['createTodo'],
			},
		},
	},
	/*----------------------------------------
	         Todo: createTodo Parameters
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
				resource: ['todo'],
				operation: ['createTodo'],
			},
		},
	},
	{
		displayName: 'todolistId',
		name: 'todolistId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do list - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['createTodo'],
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
		description: 'The content/title of the todo',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['createTodo'],
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
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		description: 'Optional description of the todo. May contain HTML.',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['createTodo'],
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
		displayName: 'Assignee IDs',
		name: 'assigneeIds',
		type: 'string',
		default: '',
		description: 'IDs of people to assign to this todo',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['createTodo'],
			},
		},
		routing: {
			send: {
				property: 'assignee_ids',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Completion Subscriber IDs',
		name: 'completionSubscriberIds',
		type: 'string',
		default: '',
		description: 'IDs of people to notify when this todo is completed',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['createTodo'],
			},
		},
		routing: {
			send: {
				property: 'completion_subscriber_ids',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Send Notifications',
		name: 'notify',
		type: 'boolean',
		default: false,
		description: 'Whether to notify assignees about being assigned',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['createTodo'],
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
		displayName: 'Due Date',
		name: 'dueOn',
		type: 'string',
		default: '',
		description: 'The due date for the todo',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['createTodo'],
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
		displayName: 'Start Date',
		name: 'startsOn',
		type: 'string',
		default: '',
		description: 'The date when the todo starts',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['createTodo'],
			},
		},
		routing: {
			send: {
				property: 'starts_on',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/todos/{{ $parameter["todoId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['getTodo'],
			},
		},
	},
	/*----------------------------------------
	         Todo: getTodo Parameters
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
				resource: ['todo'],
				operation: ['getTodo'],
			},
		},
	},
	{
		displayName: 'To-Do ID',
		name: 'todoId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['getTodo'],
			},
		},
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/todos/{{ $parameter["todoId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['updateTodo'],
			},
		},
	},
	/*----------------------------------------
	         Todo: updateTodo Parameters
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
				resource: ['todo'],
				operation: ['updateTodo'],
			},
		},
	},
	{
		displayName: 'todoId',
		name: 'todoId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['updateTodo'],
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
		description: 'The content/title of the todo',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['updateTodo'],
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
		displayName: 'Due On',
		name: 'dueOn',
		type: 'dateTime',
		default: '',
		description: 'The due date for the todo (leave empty to remove the due date)',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['updateTodo'],
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
		displayName: 'Starts On',
		name: 'startsOn',
		type: 'dateTime',
		default: '',
		description: 'The date when the todo starts (leave empty to remove the start date)',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['updateTodo'],
			},
		},
		routing: {
			send: {
				property: 'starts_on',
				type: 'body',
				value: '={{ $value ? $value.split("T")[0] : "" }}',
			},
		},
	},
	{
		displayName: 'Todo Fields',
		name: 'todoFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['updateTodo'],
			},
		},
		options: [
			{
				name: 'description',
				displayName: 'Description',
				values: [
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description: 'Description of the todo. May contain HTML.',
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
			{
				name: 'assigneeIds',
				displayName: 'Assignee IDs',
				values: [
					{
						displayName: 'Assignee IDs',
						name: 'assigneeIds',
						type: 'string',
						default: '',
						description: 'IDs of people to assign to this todo',
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
			{
				name: 'completionSubscriberIds',
				displayName: 'Completion Subscriber IDs',
				values: [
					{
						displayName: 'Completion Subscriber IDs',
						name: 'completionSubscriberIds',
						type: 'string',
						default: '',
						description: 'IDs of people to notify when this todo is completed',
						routing: {
							send: {
								property: 'completion_subscriber_ids',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'notify',
				displayName: 'Notify',
				values: [
					{
						displayName: 'Notify',
						name: 'notify',
						type: 'boolean',
						default: false,
						description: 'Whether to notify assignees about being assigned',
						routing: {
							send: {
								property: 'notify',
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
			'POST /buckets/{{ $parameter["bucketId"] }}/todos/{{ $parameter["todoId"] }}/completion.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['completeTodo'],
			},
		},
	},
	/*----------------------------------------
	         Todo: completeTodo Parameters
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
				resource: ['todo'],
				operation: ['completeTodo'],
			},
		},
	},
	{
		displayName: 'todoId',
		name: 'todoId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['completeTodo'],
			},
		},
	},
	{
		displayName:
			'DELETE /buckets/{{ $parameter["bucketId"] }}/todos/{{ $parameter["todoId"] }}/completion.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['uncompleteTodo'],
			},
		},
	},
	/*----------------------------------------
	         Todo: uncompleteTodo Parameters
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
				resource: ['todo'],
				operation: ['uncompleteTodo'],
			},
		},
	},
	{
		displayName: 'todoId',
		name: 'todoId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['uncompleteTodo'],
			},
		},
	},
	{
		displayName:
			'PUT /buckets/{{ $parameter["bucketId"] }}/todos/{{ $parameter["todoId"] }}/position.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['repositionTodo'],
			},
		},
	},
	/*----------------------------------------
	         Todo: repositionTodo Parameters
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
				resource: ['todo'],
				operation: ['repositionTodo'],
			},
		},
	},
	{
		displayName: 'todoId',
		name: 'todoId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['repositionTodo'],
			},
		},
	},
	{
		displayName: 'Position',
		name: 'position',
		type: 'number',
		default: 0,
		required: true,
		description: 'The new position for the todo (1-based)',
		displayOptions: {
			show: {
				resource: ['todo'],
				operation: ['repositionTodo'],
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
