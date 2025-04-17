// TodolistGroup resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const todolistGroupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['todolistGroup'],
			},
		},
		default: 'getTodolistGroups',
		options: [
		{
			name: 'List to-do list groups',
			value: 'getTodolistGroups',
			action: 'List to-do list groups',
			description: 'Returns a paginated list of active groups in the to-do list',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}/groups.json'
				}
			}
		},
		{
			name: 'Create a to-do list group',
			value: 'createTodolistGroup',
			action: 'Create a to-do list group',
			description: 'Creates a to-do group within the specified to-do list',
			routing: {
				request: {
					method: 'POST',
					url: '=/buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}/groups.json'
				}
			}
		},
		{
			name: 'Reposition a to-do list group',
			value: 'repositionTodolistGroup',
			action: 'Reposition a to-do list group',
			description: 'Changes the position of the to-do list group',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/todolists/groups/{{ $parameter["groupId"] }}/position.json'
				}
			}
		}
		],
	}
];
export const todolistGroupFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}/groups.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todolistGroup'],
				operation: ['getTodolistGroups']
			}
		}
	},
	/*----------------------------------------
	         TodolistGroup: getTodolistGroups Parameters
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
				resource: ['todolistGroup'],
				operation: ['getTodolistGroups']
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
				resource: ['todolistGroup'],
				operation: ['getTodolistGroups']
			}
		}
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		default: "archived",
		required: false,
		description: 'Filter by to-do list group status',
		displayOptions: {
			show: {
				resource: ['todolistGroup'],
				operation: ['getTodolistGroups']
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
		displayName: 'POST /buckets/{{ $parameter["bucketId"] }}/todolists/{{ $parameter["todolistId"] }}/groups.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todolistGroup'],
				operation: ['createTodolistGroup']
			}
		}
	},
	/*----------------------------------------
	         TodolistGroup: createTodolistGroup Parameters
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
				resource: ['todolistGroup'],
				operation: ['createTodolistGroup']
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
				resource: ['todolistGroup'],
				operation: ['createTodolistGroup']
			}
		}
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: "",
		required: true,
		description: 'The name of the to-do list group',
		displayOptions: {
			show: {
				resource: ['todolistGroup'],
				operation: ['createTodolistGroup']
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
		displayName: 'Color',
		name: 'color',
		type: 'string',
		default: "",
		required: false,
		description: 'The color of the to-do list group',
		displayOptions: {
			show: {
				resource: ['todolistGroup'],
				operation: ['createTodolistGroup']
			}
		},
		routing: {
			send: {
				property: 'color',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/todolists/groups/{{ $parameter["groupId"] }}/position.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['todolistGroup'],
				operation: ['repositionTodolistGroup']
			}
		}
	},
	/*----------------------------------------
	         TodolistGroup: repositionTodolistGroup Parameters
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
				resource: ['todolistGroup'],
				operation: ['repositionTodolistGroup']
			}
		}
	},
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the to-do list group - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['todolistGroup'],
				operation: ['repositionTodolistGroup']
			}
		}
	},
	{
		displayName: 'Position',
		name: 'position',
		type: 'number',
		default: 0,
		required: true,
		description: 'The new position for the to-do list group',
		displayOptions: {
			show: {
				resource: ['todolistGroup'],
				operation: ['repositionTodolistGroup']
			}
		},
		routing: {
			send: {
				property: 'position',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	}
];