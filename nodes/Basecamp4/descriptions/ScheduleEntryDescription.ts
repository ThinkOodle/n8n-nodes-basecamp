// ScheduleEntry resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const scheduleEntryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
			},
		},
		default: 'getScheduleEntries',
		options: [
		{
			name: 'Create a Schedule Entry',
			value: 'createScheduleEntry',
			action: 'Create a schedule entry',
			description: 'Creates a new entry in the specified schedule',
			routing: {
				request: {
					method: 'POST',
					url: '=/buckets/{{ $parameter["bucketId"] }}/schedules/{{ $parameter["scheduleId"] }}/entries.json'
				}
			}
		},
		{
			name: 'Get a Schedule Entry',
			value: 'getScheduleEntry',
			action: 'Get a schedule entry',
			description: 'Returns details for a specific schedule entry',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/schedule_entries/{{ $parameter["entryId"] }}.json'
				}
			}
		},
		{
			name: 'Get a Schedule Entry Occurrence',
			value: 'getScheduleEntryOccurrence',
			action: 'Get a schedule entry occurrence',
			description: 'Returns details for a specific schedule entry occurrence on a date',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/schedule_entries/{{ $parameter["entryId"] }}/occurrences/{{ $parameter["date"] }}.json'
				}
			}
		},
		{
			name: 'Get Schedule Entries',
			value: 'getScheduleEntries',
			action: 'Get schedule entries',
			description: 'Returns a list of entries in the specified schedule',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/schedules/{{ $parameter["scheduleId"] }}/entries.json'
				}
			}
		},
		{
			name: 'Update a Schedule Entry',
			value: 'updateScheduleEntry',
			action: 'Update a schedule entry',
			description: 'Updates a specific schedule entry',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/schedule_entries/{{ $parameter["entryId"] }}.json'
				}
			}
		}
		],
	}
];
export const scheduleEntryFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/schedules/{{ $parameter["scheduleId"] }}/entries.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntries']
			}
		}
	},
	/*----------------------------------------
	         ScheduleEntry: getScheduleEntries Parameters
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
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntries']
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
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntries']
			}
		}
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		default: "upcoming",
		description: 'Filter entries by status',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntries']
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
		displayName: 'POST /buckets/{{ $parameter["bucketId"] }}/schedules/{{ $parameter["scheduleId"] }}/entries.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['createScheduleEntry']
			}
		}
	},
	/*----------------------------------------
	         ScheduleEntry: createScheduleEntry Parameters
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
				resource: ['scheduleEntry'],
				operation: ['createScheduleEntry']
			}
		}
	},
	{
		displayName: 'scheduleId',
		name: 'scheduleId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the schedule - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['createScheduleEntry']
			}
		}
	},
	{
		displayName: 'Summary',
		name: 'summary',
		type: 'string',
		default: "",
		required: true,
		description: 'Brief summary of what the schedule entry is about',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['createScheduleEntry']
			}
		},
		routing: {
			send: {
				property: 'summary',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Start Date/Time',
		name: 'startsAt',
		type: 'string',
		default: "",
		required: true,
		description: 'When the schedule entry starts (ISO 8601)',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['createScheduleEntry']
			}
		},
		routing: {
			send: {
				property: 'starts_at',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'End Date/Time',
		name: 'endsAt',
		type: 'string',
		default: "",
		required: true,
		description: 'When the schedule entry ends (ISO 8601)',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['createScheduleEntry']
			}
		},
		routing: {
			send: {
				property: 'ends_at',
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
		description: 'More detailed information about the schedule entry. May contain HTML.',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['createScheduleEntry']
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
		displayName: 'Participant IDs',
		name: 'participantIds',
		type: 'string',
		default: "{}",
		description: 'IDs of people participating in this schedule entry',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['createScheduleEntry']
			}
		},
		routing: {
			send: {
				property: 'participant_ids',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'All Day Event',
		name: 'allDay',
		type: 'boolean',
		default: false,
		description: 'Whether the schedule entry should be an all-day event',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['createScheduleEntry']
			}
		},
		routing: {
			send: {
				property: 'all_day',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Send Notifications',
		name: 'notify',
		type: 'boolean',
		default: false,
		description: 'Whether to notify participants about the entry',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['createScheduleEntry']
			}
		},
		routing: {
			send: {
				property: 'notify',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/schedule_entries/{{ $parameter["entryId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntry']
			}
		}
	},
	/*----------------------------------------
	         ScheduleEntry: getScheduleEntry Parameters
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
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntry']
			}
		}
	},
	{
		displayName: 'Entry ID',
		name: 'entryId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the schedule entry - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntry']
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/schedule_entries/{{ $parameter["entryId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['updateScheduleEntry']
			}
		}
	},
	/*----------------------------------------
	         ScheduleEntry: updateScheduleEntry Parameters
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
				resource: ['scheduleEntry'],
				operation: ['updateScheduleEntry']
			}
		}
	},
	{
		displayName: 'entryId',
		name: 'entryId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the schedule entry - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['updateScheduleEntry']
			}
		}
	},
	{
		displayName: 'Start Date/Time',
		name: 'startsAt',
		type: 'dateTime',
		default: '',
		description: 'When the schedule entry starts (leave empty to keep existing value)',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['updateScheduleEntry']
			}
		},
		routing: {
			send: {
				property: 'starts_at',
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'End Date/Time',
		name: 'endsAt',
		type: 'dateTime',
		default: '',
		description: 'When the schedule entry ends (leave empty to keep existing value)',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['updateScheduleEntry']
			}
		},
		routing: {
			send: {
				property: 'ends_at',
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Entry Fields',
		name: 'entryFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['updateScheduleEntry']
			}
		},
		options: [
			{
				name: 'summary',
				displayName: 'Summary',
				values: [
					{
						displayName: 'Summary',
						name: 'summary',
						type: 'string',
						default: '',
						description: 'Brief summary of what the schedule entry is about',
						routing: {
							send: {
								property: 'summary',
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
						description: 'More detailed information about the schedule entry. May contain HTML.',
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
				name: 'participantIds',
				displayName: 'Participant IDs',
				values: [
					{
						displayName: 'Participant IDs',
						name: 'participantIds',
						type: 'string',
						default: '{}',
						description: 'IDs of people participating in this schedule entry',
						routing: {
							send: {
								property: 'participant_ids',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'allDay',
				displayName: 'All Day Event',
				values: [
					{
						displayName: 'All Day Event',
						name: 'allDay',
						type: 'boolean',
						default: false,
						description: 'Whether the schedule entry should be an all-day event',
						routing: {
							send: {
								property: 'all_day',
								type: 'body',
								value: '={{ $value }}',
							},
						},
					},
				],
			},
			{
				name: 'notify',
				displayName: 'Send Notifications',
				values: [
					{
						displayName: 'Send Notifications',
						name: 'notify',
						type: 'boolean',
						default: false,
						description: 'Whether to notify participants about the entry',
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
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/schedule_entries/{{ $parameter["entryId"] }}/occurrences/{{ $parameter["date"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntryOccurrence']
			}
		}
	},
	/*----------------------------------------
	         ScheduleEntry: getScheduleEntryOccurrence Parameters
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
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntryOccurrence']
			}
		}
	},
	{
		displayName: 'entryId',
		name: 'entryId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the schedule entry - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntryOccurrence']
			}
		}
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		default: "",
		required: true,
		description: 'The date of the occurrence (YYYY-MM-DD) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['scheduleEntry'],
				operation: ['getScheduleEntryOccurrence']
			}
		}
	}
];