// Questionnaire resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const questionnaireOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['questionnaire'],
			},
		},
		default: 'getQuestionnaire',
		options: [
		{
			name: 'Get Questionnaire',
			value: 'getQuestionnaire',
			action: 'Get questionnaire',
			description: 'Returns the questionnaire for the project',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/questionnaires/{{ $parameter["questionnaireId"] }}.json'
				}
			}
		}
		],
	}
];
export const questionnaireFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/questionnaires/{{ $parameter["questionnaireId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['questionnaire'],
				operation: ['getQuestionnaire']
			}
		}
	},
	/*----------------------------------------
	         Questionnaire: getQuestionnaire Parameters
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
				resource: ['questionnaire'],
				operation: ['getQuestionnaire']
			}
		}
	},
	{
		displayName: 'Questionnaire ID',
		name: 'questionnaireId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the questionnaire - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['questionnaire'],
				operation: ['getQuestionnaire']
			}
		}
	}
];