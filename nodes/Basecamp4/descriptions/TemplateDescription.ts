// Template resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const templateOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['template'],
			},
		},
		default: 'getTemplates',
		options: [
		{
			name: 'Create a Project Construction',
			value: 'createProjectConstruction',
			action: 'Create a project construction',
			description: 'Creates a new project from a template',
			routing: {
				request: {
					method: 'POST',
					url: '=/templates/{{ $parameter["templateId"] }}/project_constructions.json'
				}
			}
		},
		{
			name: 'Create a Template',
			value: 'createTemplate',
			action: 'Create a template',
			description: 'Creates a new template',
			routing: {
				request: {
					method: 'POST',
					url: '=/templates.json'
				}
			}
		},
		{
			name: 'Get a Template',
			value: 'getTemplate',
			action: 'Get a template',
			description: 'Returns details of a specific template',
			routing: {
				request: {
					method: 'GET',
					url: '=/templates/{{ $parameter["templateId"] }}.json'
				}
			}
		},
		{
			name: 'Get Templates',
			value: 'getTemplates',
			action: 'Get templates',
			description: 'Returns a paginated list of active Templates visible to the current user',
			routing: {
				request: {
					method: 'GET',
					url: '=/templates.json'
				}
			}
		},
		{
			name: 'Trash a Template',
			value: 'trashTemplate',
			action: 'Trash a template',
			description: 'Marks a template as trashed',
			routing: {
				request: {
					method: 'DELETE',
					url: '=/templates/{{ $parameter["templateId"] }}.json'
				}
			}
		},
		{
			name: 'Update a Template',
			value: 'updateTemplate',
			action: 'Update a template',
			description: 'Updates a specific template',
			routing: {
				request: {
					method: 'PUT',
					url: '=/templates/{{ $parameter["templateId"] }}.json'
				}
			}
		}
		],
	}
];
export const templateFields: INodeProperties[] = [
	{
		displayName: 'GET /templates.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['getTemplates']
			}
		}
	},
	/*----------------------------------------
	         Template: getTemplates Parameters
	----------------------------------------*/
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		default: "active",
		description: 'Filter templates by status',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['getTemplates']
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
		displayName: 'POST /templates.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate']
			}
		}
	},
	/*----------------------------------------
	         Template: createTemplate Parameters
	----------------------------------------*/
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: "",
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate']
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
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createTemplate']
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
		displayName: 'GET /templates/{{ $parameter["templateId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['getTemplate']
			}
		}
	},
	/*----------------------------------------
	         Template: getTemplate Parameters
	----------------------------------------*/
	{
		displayName: 'Template ID',
		name: 'templateId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['getTemplate']
			}
		},
		description: 'Used in the API endpoint path'
	},
	{
		displayName: 'PUT /templates/{{ $parameter["templateId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['updateTemplate']
			}
		}
	},
	/*----------------------------------------
	         Template: updateTemplate Parameters
	----------------------------------------*/
	{
		displayName: 'templateId',
		name: 'templateId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['updateTemplate']
			}
		},
		description: 'Used in the API endpoint path'
	},
	{
		displayName: 'Template Fields',
		name: 'templateFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['updateTemplate']
			}
		},
		options: [
			{
				name: 'name',
				displayName: 'Name',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: 'name',
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
		displayName: 'DELETE /templates/{{ $parameter["templateId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['trashTemplate']
			}
		}
	},
	/*----------------------------------------
	         Template: trashTemplate Parameters
	----------------------------------------*/
	{
		displayName: 'templateId',
		name: 'templateId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['trashTemplate']
			}
		},
		description: 'Used in the API endpoint path'
	},
	{
		displayName: 'POST /templates/{{ $parameter["templateId"] }}/project_constructions.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createProjectConstruction']
			}
		}
	},
	/*----------------------------------------
	         Template: createProjectConstruction Parameters
	----------------------------------------*/
	{
		displayName: 'templateId',
		name: 'templateId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createProjectConstruction']
			}
		},
		description: 'Used in the API endpoint path'
	},
	{
		displayName: 'Project',
		name: 'project',
		type: 'string',
		default: "{}",
		required: true,
		displayOptions: {
			show: {
				resource: ['template'],
				operation: ['createProjectConstruction']
			}
		},
		routing: {
			send: {
				property: 'project',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	}
];