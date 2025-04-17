// Vault resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const vaultOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['vault'],
			},
		},
		default: 'getVaults',
		options: [
		{
			name: 'Get Vaults',
			value: 'getVaults',
			action: 'Get vaults',
			description: 'Returns a list of vaults in the specified vault (folder)',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/vaults.json'
				}
			}
		},
		{
			name: 'Create a Vault',
			value: 'createVault',
			action: 'Create a vault',
			description: 'Creates a new vault in the specified parent vault',
			routing: {
				request: {
					method: 'POST',
					url: '=/buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/vaults.json'
				}
			}
		},
		{
			name: 'Get a Vault',
			value: 'getVault',
			action: 'Get a vault',
			description: 'Returns details for a specific vault',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}.json'
				}
			}
		},
		{
			name: 'Update a Vault',
			value: 'updateVault',
			action: 'Update a vault',
			description: 'Updates a specific vault',
			routing: {
				request: {
					method: 'PUT',
					url: '=/buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}.json'
				}
			}
		}
		],
	}
];
export const vaultFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/vaults.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['vault'],
				operation: ['getVaults']
			}
		}
	},
	/*----------------------------------------
	         Vault: getVaults Parameters
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
				resource: ['vault'],
				operation: ['getVaults']
			}
		}
	},
	{
		displayName: 'Vault ID',
		name: 'vaultId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the parent vault - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['vault'],
				operation: ['getVaults']
			}
		}
	},
	{
		displayName: 'POST /buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}/vaults.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['vault'],
				operation: ['createVault']
			}
		}
	},
	/*----------------------------------------
	         Vault: createVault Parameters
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
				resource: ['vault'],
				operation: ['createVault']
			}
		}
	},
	{
		displayName: 'Vault ID',
		name: 'vaultId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the parent vault - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['vault'],
				operation: ['createVault']
			}
		}
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: "",
		required: true,
		description: 'The name of the vault',
		displayOptions: {
			show: {
				resource: ['vault'],
				operation: ['createVault']
			}
		},
		routing: {
			send: {
				property: 'title',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['vault'],
				operation: ['getVault']
			}
		}
	},
	/*----------------------------------------
	         Vault: getVault Parameters
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
				resource: ['vault'],
				operation: ['getVault']
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
				resource: ['vault'],
				operation: ['getVault']
			}
		}
	},
	{
		displayName: 'PUT /buckets/{{ $parameter["bucketId"] }}/vaults/{{ $parameter["vaultId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['vault'],
				operation: ['updateVault']
			}
		}
	},
	/*----------------------------------------
	         Vault: updateVault Parameters
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
				resource: ['vault'],
				operation: ['updateVault']
			}
		}
	},
	{
		displayName: 'vaultId',
		name: 'vaultId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the vault - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['vault'],
				operation: ['updateVault']
			}
		}
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the vault',
		displayOptions: {
			show: {
				resource: ['vault'],
				operation: ['updateVault']
			}
		},
		routing: {
			send: {
				property: 'title',
				type: 'body',
				value: '={{ $value }}',
			}
		}
	}
];