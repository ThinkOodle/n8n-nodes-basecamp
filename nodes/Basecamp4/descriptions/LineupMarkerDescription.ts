// LineupMarker resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const lineupMarkerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['lineupMarker'],
			},
		},
		default: 'createLineupMarker',
		options: [
			{
				name: 'Create a marker',
				value: 'createLineupMarker',
				action: 'Create a marker',
				description: 'Creates an account-wide marker that shows up in the Lineup.',
				routing: {
					request: {
						method: 'POST',
						url: '=/lineup/markers.json',
					},
				},
			},
			{
				name: 'Update a marker',
				value: 'updateLineupMarker',
				action: 'Update a marker',
				description: 'Changes the name and/or date of the specified marker.',
				routing: {
					request: {
						method: 'PUT',
						url: '=/lineup/markers/{{ $parameter["markerId"] }}.json',
					},
				},
			},
			{
				name: 'Delete a marker',
				value: 'deleteLineupMarker',
				action: 'Delete a marker',
				description: 'Permanently destroys the specified marker immediately.',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/lineup/markers/{{ $parameter["markerId"] }}.json',
					},
				},
			},
		],
	},
];
export const lineupMarkerFields: INodeProperties[] = [
	{
		displayName: 'POST /lineup/markers.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['lineupMarker'],
				operation: ['createLineupMarker'],
			},
		},
	},
	/*----------------------------------------
	         LineupMarker: createLineupMarker Parameters
	----------------------------------------*/
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		description: 'The name of the marker',
		displayOptions: {
			show: {
				resource: ['lineupMarker'],
				operation: ['createLineupMarker'],
			},
		},
		routing: {
			send: {
				property: 'name',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		default: '',
		required: true,
		description: 'The date for the marker in ISO8601 format (without time part)',
		displayOptions: {
			show: {
				resource: ['lineupMarker'],
				operation: ['createLineupMarker'],
			},
		},
		routing: {
			send: {
				property: 'date',
				propertyInDotNotation: false,
				type: 'body',
				value: '={{ $value }}',
			},
		},
	},
	{
		displayName: 'PUT /lineup/markers/{{ $parameter["markerId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['lineupMarker'],
				operation: ['updateLineupMarker'],
			},
		},
	},
	/*----------------------------------------
	         LineupMarker: updateLineupMarker Parameters
	----------------------------------------*/
	{
		displayName: 'Marker ID',
		name: 'markerId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the marker - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['lineupMarker'],
				operation: ['updateLineupMarker'],
			},
		},
	},
	{
		displayName: 'Marker Date',
		name: 'date',
		type: 'dateTime',
		default: '',
		description: 'The date for the marker in ISO8601 format (leave empty to keep existing date)',
		displayOptions: {
			show: {
				resource: ['lineupMarker'],
				operation: ['updateLineupMarker'],
			},
		},
		routing: {
			send: {
				property: 'date',
				type: 'body',
				value: '={{ $value ? $value.split("T")[0] : "" }}',
			},
		},
	},
	{
		displayName: 'Marker Fields',
		name: 'markerFields',
		placeholder: 'Add Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: false,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['lineupMarker'],
				operation: ['updateLineupMarker'],
			},
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
						description: 'The name of the marker',
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
		],
	},
	{
		displayName: 'DELETE /lineup/markers/{{ $parameter["markerId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['lineupMarker'],
				operation: ['deleteLineupMarker'],
			},
		},
	},
	/*----------------------------------------
	         LineupMarker: deleteLineupMarker Parameters
	----------------------------------------*/
	{
		displayName: 'Marker ID',
		name: 'markerId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the marker - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['lineupMarker'],
				operation: ['deleteLineupMarker'],
			},
		},
	},
];
