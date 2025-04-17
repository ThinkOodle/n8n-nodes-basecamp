// Todolist resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const todolistOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['todolist'],
			},
		},
		default: 'getTodolists',
		options: [
		{
			name: 'Get to-do lists',
			value: 'getTodolists',
			action: 'Get to-do lists',
			description: 'Returns a list of to-do lists in the specified project',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/todosets/{{ $parameter["todosetId"] }}/todolists.json'
				}
			}
		},
		{
			name: 'Create a to-do list',
			value: 'createTodolist',
			action: 'Create a to-do list',
			description: 'Creates a new to-do list in the specified project',
			routing: {
				request: {
					method: 'POST',
					url: '=/buckets/{{ $parameter["bucketId"] }}/todosets/{{ $parameter["todosetId"] }}/todolists.json'
				}
			}
		},
		{
			name: 'Get a to-do list',
			value: 'getTodolist',
			action: 'Get a to-do list',
			description: 'Returns details for a specific to-do list',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}.json'
				}
			}
		},
		{
			name: 'Update a to-do list',
			value: 'updateTodolist',
			action: 'Update a to-do list',
			description: 'Updates a specific to-do list',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}.json'
				}
			}
		},
		{
			name: 'Trash a to-do list',
			value: 'trashTodolist',
			action: 'Trash a to-do list',
			description: 'Marks the to-do list with the given ID as trashed',
			routing: {
				request: {
					method: 'DELETE',
					url: '=/buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}.json'
				}
			}
		}
		],
	}
];
export const todolistFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/todosets/{{ $parameter["todosetId"] }}/todolists.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['getTodolists']
			}
		}
	},
	/*----------------------------------------
	         Todolist: getTodolists Parameters
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
				resource: ['todolist'],
				operation: ['getTodolists']
			}
		}
	},
	{
		displayName: 'To-do Set ID',
		name: 'todosetId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do set - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['getTodolists']
			}
		}
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		default: "archived",
		required: false,
		description: 'Filter to-do lists by status',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['getTodolists']
			}
		},
		routing: {
			send: {
				property: 'status',
				propertyInDotNotation: false,
				type: 'query',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'POST /buckets/{{ $parameter["bucketId"] }}/todosets/{{ $parameter["todosetId"] }}/todolists.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['createTodolist']
			}
		}
	},
	/*----------------------------------------
	         Todolist: createTodolist Parameters
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
				resource: ['todolist'],
				operation: ['createTodolist']
			}
		}
	},
	{
		displayName: 'todosetId',
		name: 'todosetId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do set - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['createTodolist']
			}
		}
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: "",
		required: true,
		description: 'Name of the todolist',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['createTodolist']
			}
		},
		routing: {
			send: {
				property: 'name',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: "",
		required: false,
		description: 'Optional description of the todolist. May contain HTML',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['createTodolist']
			}
		},
		routing: {
			send: {
				property: 'description',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['getTodolist']
			}
		}
	},
	/*----------------------------------------
	         Todolist: getTodolist Parameters
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
				resource: ['todolist'],
				operation: ['getTodolist']
			}
		}
	},
	{
		displayName: 'To-do List ID',
		name: 'todolistId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do list - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['getTodolist']
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['updateTodolist']
			}
		}
	},
	/*----------------------------------------
	         Todolist: updateTodolist Parameters
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
				resource: ['todolist'],
				operation: ['updateTodolist']
			}
		}
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
				resource: ['todolist'],
				operation: ['updateTodolist']
			}
		}
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Name of the todolist',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['updateTodolist']
			}
		},
		routing: {
			send: {
				property: 'name',
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Todolist Fields',
		name: 'todolistFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['updateTodolist']
			}
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
						description: 'Description of the todolist. May contain HTML',
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
		displayName: 'DELETE /buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todolist'],
				operation: ['trashTodolist']
			}
		}
	},
	/*----------------------------------------
	         Todolist: trashTodolist Parameters
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
				resource: ['todolist'],
				operation: ['trashTodolist']
			}
		}
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
				resource: ['todolist'],
				operation: ['trashTodolist']
			}
		}
	}
];