// Person resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const personOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['person'],
			},
		},
		default: 'getPeople',
		options: [
		{
			name: 'Get a Person',
			value: 'getPerson',
			action: 'Get a person',
			description: 'Returns the profile information for a specific person',
			routing: {
				request: {
					method: 'GET',
					url: '=/people/{{ $parameter["personId"] }}.json'
				}
			}
		},
		{
			name: 'Get My Profile',
			value: 'getMyProfile',
			action: 'Get my profile',
			description: 'Returns the profile of the current user',
			routing: {
				request: {
					method: 'GET',
					url: '=/my/profile.json'
				}
			}
		},
		{
			name: 'Get People',
			value: 'getPeople',
			action: 'Get people',
			description: 'Returns a list of all people visible to the current user',
			routing: {
				request: {
					method: 'GET',
					url: '=/people.json'
				}
			}
		},
		{
			name: 'Get People in My Company/firm',
			value: 'getCompanyPeople',
			action: 'Get people in my company firm',
			description: 'Returns a list of people in the current user\'s company/firm',
			routing: {
				request: {
					method: 'GET',
					url: '=/my/company/people.json'
				}
			}
		},
		{
			name: 'Get People on a Project',
			value: 'getProjectPeople',
			action: 'Get people on a project',
			description: 'Returns a list of people with access to a specific project',
			routing: {
				request: {
					method: 'GET',
					url: '=/projects/{{ $parameter["projectId"] }}/people.json'
				}
			}
		},
		{
			name: 'Manage People on a Project',
			value: 'manageProjectUsers',
			action: 'Manage people on a project',
			description: 'Grant and revoke people\'s access to a project',
			routing: {
				request: {
					method: 'PUT',
					url: '=/projects/{{ $parameter["projectId"] }}/people/users.json'
				}
			}
		}
		],
	}
];
export const personFields: INodeProperties[] = [
	{
		displayName: 'GET /people.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['getPeople']
			}
		}
	},
	{
		displayName: 'GET /people/{{ $parameter["personId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['getPerson']
			}
		}
	},
	/*----------------------------------------
	         Person: getPerson Parameters
	----------------------------------------*/
	{
		displayName: 'Person ID',
		name: 'personId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['getPerson']
			}
		},
		description: 'Used in the API endpoint path'
	},
	{
		displayName: 'GET /my/profile.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['getMyProfile']
			}
		}
	},
	{
		displayName: 'GET /projects/{{ $parameter["projectId"] }}/people.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['getProjectPeople']
			}
		}
	},
	/*----------------------------------------
	         Person: getProjectPeople Parameters
	----------------------------------------*/
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['getProjectPeople']
			}
		},
		description: 'Used in the API endpoint path'
	},
	{
		displayName: 'PUT /projects/{{ $parameter["projectId"] }}/people/users.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['manageProjectUsers']
			}
		}
	},
	/*----------------------------------------
	         Person: manageProjectUsers Parameters
	----------------------------------------*/
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['manageProjectUsers']
			}
		},
		description: 'Used in the API endpoint path'
	},
	{
		displayName: 'Grant Access To',
		name: 'grant',
		type: 'string',
		default: "{}",
		description: 'Array of people IDs to be granted access',
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['manageProjectUsers']
			}
		},
		routing: {
			send: {
				property: 'grant',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Revoke Access From',
		name: 'revoke',
		type: 'string',
		default: "{}",
		description: 'Array of people IDs to be revoked access',
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['manageProjectUsers']
			}
		},
		routing: {
			send: {
				property: 'revoke',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Create People',
		name: 'create',
		type: 'string',
		default: "{}",
		description: 'Array of new people to be created',
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['manageProjectUsers']
			}
		},
		routing: {
			send: {
				property: 'create',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'GET /my/company/people.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['person'],
				operation: ['getCompanyPeople']
			}
		}
	}
];