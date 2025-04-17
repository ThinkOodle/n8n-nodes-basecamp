// Recording resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const recordingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['recording'],
			},
		},
		default: 'getRecordings',
		options: [
		{
			name: 'Get recordings',
			value: 'getRecordings',
			action: 'Get recordings',
			description: 'Returns a paginated list of recordings for the given type.',
			routing: {
				request: {
					method: 'GET',
					url: '=/projects/recordings.json'
				}
			}
		},
		{
			name: 'Trash a recording',
			value: 'trashRecording',
			action: 'Trash a recording',
			description: 'Marks the specified recording as trashed in the specified project.',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/status/trashed.json'
				}
			}
		},
		{
			name: 'Archive a recording',
			value: 'archiveRecording',
			action: 'Archive a recording',
			description: 'Marks the specified recording as archived in the specified project.',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/status/archived.json'
				}
			}
		},
		{
			name: 'Unarchive a recording',
			value: 'unarchiveRecording',
			action: 'Unarchive a recording',
			description: 'Marks the specified recording as active in the specified project.',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/status/active.json'
				}
			}
		}
		],
	}
];
export const recordingFields: INodeProperties[] = [
	{
		displayName: 'GET /projects/recordings.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['getRecordings']
			}
		}
	},
	/*----------------------------------------
	         Recording: getRecordings Parameters
	----------------------------------------*/
	{
		displayName: 'Recording Type',
		name: 'type',
		type: 'string',
		default: "Comment",
		required: true,
		description: 'The type of recording to retrieve',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['getRecordings']
			}
		},
		routing: {
			send: {
				property: 'type',
				propertyInDotNotation: false,
				type: 'query',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Projects Filter',
		name: 'bucket',
		type: 'string',
		default: "",
		required: false,
		description: 'Single or comma separated list of project IDs. Default is all active projects visible to the current user',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['getRecordings']
			}
		},
		routing: {
			send: {
				property: 'bucket',
				propertyInDotNotation: false,
				type: 'query',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		default: "active",
		required: false,
		description: 'The status of recordings to retrieve',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['getRecordings']
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
		displayName: 'Sort Field',
		name: 'sort',
		type: 'string',
		default: "created_at",
		required: false,
		description: 'The field to sort by',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['getRecordings']
			}
		},
		routing: {
			send: {
				property: 'sort',
				propertyInDotNotation: false,
				type: 'query',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'Sort Direction',
		name: 'direction',
		type: 'string',
		default: "desc",
		required: false,
		description: 'The sort direction',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['getRecordings']
			}
		},
		routing: {
			send: {
				property: 'direction',
				propertyInDotNotation: false,
				type: 'query',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/status/trashed.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['trashRecording']
			}
		}
	},
	/*----------------------------------------
	         Recording: trashRecording Parameters
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
				resource: ['recording'],
				operation: ['trashRecording']
			}
		}
	},
	{
		displayName: 'Recording ID',
		name: 'recordingId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the recording - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['trashRecording']
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/status/archived.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['archiveRecording']
			}
		}
	},
	/*----------------------------------------
	         Recording: archiveRecording Parameters
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
				resource: ['recording'],
				operation: ['archiveRecording']
			}
		}
	},
	{
		displayName: 'Recording ID',
		name: 'recordingId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the recording - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['archiveRecording']
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/recordings/{{ $parameter["recordingId"] }}/status/active.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['unarchiveRecording']
			}
		}
	},
	/*----------------------------------------
	         Recording: unarchiveRecording Parameters
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
				resource: ['recording'],
				operation: ['unarchiveRecording']
			}
		}
	},
	{
		displayName: 'Recording ID',
		name: 'recordingId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the recording - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['recording'],
				operation: ['unarchiveRecording']
			}
		}
	}
];