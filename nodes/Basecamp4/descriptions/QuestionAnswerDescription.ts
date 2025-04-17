// QuestionAnswer resource for Basecamp
import { INodeProperties } from 'n8n-workflow';
export const questionAnswerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['questionAnswer'],
			},
		},
		default: 'getQuestionAnswers',
		options: [
		{
			name: 'Get Question Answers',
			value: 'getQuestionAnswers',
			action: 'Get question answers',
			description: 'Returns a paginated list of answers to a specific question',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/questions/{{ $parameter["questionId"] }}/answers.json'
				}
			}
		},
		{
			name: 'Get a Question Answer',
			value: 'getQuestionAnswer',
			action: 'Get a question answer',
			description: 'Returns a specific answer to a question',
			routing: {
				request: {
					method: 'GET',
					url: '=/buckets/{{ $parameter["bucketId"] }}/question_answers/{{ $parameter["answerId"] }}.json'
				}
			}
		}
		],
	}
];
export const questionAnswerFields: INodeProperties[] = [
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/questions/{{ $parameter["questionId"] }}/answers.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['questionAnswer'],
				operation: ['getQuestionAnswers']
			}
		}
	},
	/*----------------------------------------
	         QuestionAnswer: getQuestionAnswers Parameters
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
				resource: ['questionAnswer'],
				operation: ['getQuestionAnswers']
			}
		}
	},
	{
		displayName: 'Question ID',
		name: 'questionId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the question - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['questionAnswer'],
				operation: ['getQuestionAnswers']
			}
		}
	},
	{
		displayName: 'GET /buckets/{{ $parameter["bucketId"] }}/question_answers/{{ $parameter["answerId"] }}.json',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['questionAnswer'],
				operation: ['getQuestionAnswer']
			}
		}
	},
	/*----------------------------------------
	         QuestionAnswer: getQuestionAnswer Parameters
	----------------------------------------*/
	{
		displayName: 'bucketId',
		name: 'bucketId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the project (bucket) - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['questionAnswer'],
				operation: ['getQuestionAnswer']
			}
		}
	},
	{
		displayName: 'Answer ID',
		name: 'answerId',
		type: 'number',
		default: 0,
		required: true,
		description: 'The ID of the answer - Used in the API endpoint path',
		displayOptions: {
			show: {
				resource: ['questionAnswer'],
				operation: ['getQuestionAnswer']
			}
		}
	}
];