// Project resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const projectOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['project'],
			},
		},
		default: 'getProjects',
		options: [
		{
			name: 'Create a Project',
			value: 'createProject',
			action: 'Create a project',
			description: 'Creates a new project',
			routing: {
				request: {
					method: 'POST',
					url: '=/projects.json'
				}
			}
		},
		{
			name: 'Get a Project',
			value: 'getProject',
			action: 'Get a project',
			description: 'Returns details for a specific project',
			routing: {
				request: {
					method: 'GET',
					url: '=/projects/{{ $parameter["projectId"] }}.json'
				}
			}
		},
		{
			name: 'Get Projects',
			value: 'getProjects',
			action: 'Get projects',
			description: 'Returns a list of active projects visible to the current user',
			routing: {
				request: {
					method: 'GET',
					url: '=/projects.json'
				}
			}
		},
		{
			name: 'Trash a Project',
			value: 'trashProject',
			action: 'Trash a project',
			description: 'Marks a project as trashed',
			routing: {
				request: {
					method: 'DELETE',
					url: '=/projects/{{ $parameter["projectId"] }}.json'
				}
			}
		},
		{
			name: 'Update a Project',
			value: 'updateProject',
			action: 'Update a project',
			description: 'Updates a specific project',
			routing: {
				request: {
					method: 'PUT',
					url: '=/projects/{{ $parameter["projectId"] }}.json'
				}
			}
		}
		],
	}
];
export const projectFields: INodeProperties[] = [
	{
		displayName: 'GET /projects.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['getProjects']
			}
		}
	},
	/*----------------------------------------
	         Project: getProjects Parameters
	----------------------------------------*/
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		default: "active",
		description: 'Filter by project status',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['getProjects']
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
		displayName: 'POST /projects.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['createProject']
			}
		}
	},
	/*----------------------------------------
	         Project: createProject Parameters
	----------------------------------------*/
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: "",
		required: true,
		description: 'Name of the new project',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['createProject']
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
		description: 'Optional description of the new project',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['createProject']
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
		displayName: 'GET /projects/{{ $parameter["projectId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['getProject']
			}
		}
	},
	/*----------------------------------------
	         Project: getProject Parameters
	----------------------------------------*/
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['getProject']
			}
		},
		description: 'Used in the API endpoint path'
	},
	{
		displayName: 'PUT /projects/{{ $parameter["projectId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['updateProject']
			}
		}
	},
	/*----------------------------------------
	         Project: updateProject Parameters
	----------------------------------------*/
	{
		displayName: 'projectId',
		name: 'projectId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['updateProject']
			}
		},
		description: 'Used in the API endpoint path'
	},
	{
		displayName: 'Project Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'Name of the project',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['updateProject']
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
		displayName: 'Project Fields',
		name: 'projectFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['updateProject']
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
						description: 'Optional description of the project',
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
				name: 'admissions',
				displayName: 'Admissions',
				values: [
					{
						displayName: 'Admissions',
						name: 'admissions',
						type: 'string',
						default: '',
						description: 'Specifies access policy for the project within the same account',
						routing: {
							send: {
								property: 'admissions',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'scheduleAttributes',
				displayName: 'Schedule Attributes',
				values: [
					{
						displayName: 'Schedule Attributes',
						name: 'scheduleAttributes',
						type: 'string',
						default: '{}',
						description: 'Optional schedule attributes for the project',
						routing: {
							send: {
								property: 'schedule_attributes',
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
		displayName: 'DELETE /projects/{{ $parameter["projectId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['trashProject']
			}
		}
	},
	/*----------------------------------------
	         Project: trashProject Parameters
	----------------------------------------*/
	{
		displayName: 'projectId',
		name: 'projectId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['project'],
				operation: ['trashProject']
			}
		},
		description: 'Used in the API endpoint path'
	}
];