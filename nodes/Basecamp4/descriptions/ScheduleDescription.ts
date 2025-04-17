// Schedule resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const scheduleOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['schedule'],
			},
		},
		default: 'getSchedule',
		options: [
		{
			name: 'Get schedule',
			value: 'getSchedule',
			action: 'Get schedule',
			description: 'Returns the schedule for a project',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/schedules/{{ $parameter["scheduleId"] }}.json'
				}
			}
		},
		{
			name: 'Update a schedule',
			value: 'updateSchedule',
			action: 'Update a schedule',
			description: 'Updates a project\'s schedule settings',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/schedules/{{ $parameter["scheduleId"] }}.json'
				}
			}
		}
		],
	}
];
export const scheduleFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/schedules/{{ $parameter["scheduleId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['getSchedule']
			}
		}
	},
	/*----------------------------------------
	         Schedule: getSchedule Parameters
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
				resource: ['schedule'],
				operation: ['getSchedule']
			}
		}
	},
	{
		displayName: 'Schedule ID',
		name: 'scheduleId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the schedule - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['getSchedule']
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/schedules/{{ $parameter["scheduleId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['updateSchedule']
			}
		}
	},
	/*----------------------------------------
	         Schedule: updateSchedule Parameters
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
				resource: ['schedule'],
				operation: ['updateSchedule']
			}
		}
	},
	{
		displayName: 'Schedule ID',
		name: 'scheduleId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the schedule - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['updateSchedule']
			}
		}
	},
	{
		displayName: 'Schedule Fields',
		name: 'scheduleFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['schedule'],
				operation: ['updateSchedule']
			}
		},
		options: [
			{
				name: 'includeDueAssignments',
				displayName: 'Include Due Assignments',
				values: [
					{
						displayName: 'Include Due Assignments',
						name: 'includeDueAssignments',
						type: 'boolean',
						default: false,
						description: 'Whether the schedule should include due dates from to-dos, cards and steps',
						routing: {
							send: {
								property: 'include_due_assignments',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
		],
	}
];