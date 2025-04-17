// Upload resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const uploadOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['upload'],
			},
		},
		default: 'getUploads',
		options: [
		{
			name: 'Get uploads',
			value: 'getUploads',
			action: 'Get uploads',
			description: 'Returns a list of uploads in the specified vault',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/uploads.json'
				}
			}
		},
		{
			name: 'Create an upload',
			value: 'createUpload',
			action: 'Create an upload',
			description: 'Creates a new upload in the specified vault',
			routing: {
				request: {
					method: 'POST',
					url: '=/buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/uploads.json'
				}
			}
		},
		{
			name: 'Get an upload',
			value: 'getUpload',
			action: 'Get an upload',
			description: 'Returns details for a specific upload',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/uploads/{{ $parameter["uploadId"] }}.json'
				}
			}
		},
		{
			name: 'Update an upload',
			value: 'updateUpload',
			action: 'Update an upload',
			description: 'Updates a specific upload',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/uploads/{{ $parameter["uploadId"] }}.json'
				}
			}
		}
		],
	}
];
export const uploadFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/uploads.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['getUploads']
			}
		}
	},
	/*----------------------------------------
	         Upload: getUploads Parameters
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
				resource: ['upload'],
				operation: ['getUploads']
			}
		}
	},
	{
		displayName: 'Vault ID',
		name: 'vaultId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the vault - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['getUploads']
			}
		}
	},
	{
		displayName: 'POST /buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/uploads.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['createUpload']
			}
		}
	},
	/*----------------------------------------
	         Upload: createUpload Parameters
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
				resource: ['upload'],
				operation: ['createUpload']
			}
		}
	},
	{
		displayName: 'Vault ID',
		name: 'vaultId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the vault - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['createUpload']
			}
		}
	},
	{
		displayName: 'Attachment SGID',
		name: 'attachableSgid',
		type: 'string',
		default: "",
		required: true,
		description: 'The SGID for the attachment to upload. Obtained from the Create an attachment endpoint',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['createUpload']
			}
		},
		routing: {
			send: {
				property: 'attachable_sgid',
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
		description: 'Optional description of the upload. May contain HTML',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['createUpload']
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
		displayName: 'Base Filename',
		name: 'baseName',
		type: 'string',
		default: "",
		required: false,
		description: 'Optional new base filename for the upload (without extension)',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['createUpload']
			}
		},
		routing: {
			send: {
				property: 'base_name',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/uploads/{{ $parameter["uploadId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['getUpload']
			}
		}
	},
	/*----------------------------------------
	         Upload: getUpload Parameters
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
				resource: ['upload'],
				operation: ['getUpload']
			}
		}
	},
	{
		displayName: 'Upload ID',
		name: 'uploadId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the upload - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['getUpload']
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/uploads/{{ $parameter["uploadId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['updateUpload']
			}
		}
	},
	/*----------------------------------------
	         Upload: updateUpload Parameters
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
				resource: ['upload'],
				operation: ['updateUpload']
			}
		}
	},
	{
		displayName: 'Upload ID',
		name: 'uploadId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the upload - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['updateUpload']
			}
		}
	},
	{
		displayName: 'Upload Fields',
		name: 'uploadFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['upload'],
				operation: ['updateUpload']
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
						description: 'The description of the upload. May contain HTML',
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
				name: 'baseName',
				displayName: 'Base Filename',
				values: [
					{
						displayName: 'Base Filename',
						name: 'baseName',
						type: 'string',
						default: '',
						description: 'New base filename for the upload (without extension)',
						routing: {
							send: {
								property: 'base_name',
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