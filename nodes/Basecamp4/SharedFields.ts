import { INodeProperties, IExecuteSingleFunctions, IHttpRequestOptions } from 'n8n-workflow';

export const returnAllField: INodeProperties[] = [
	{
		displayName: 'Return All Results',
		name: 'returnAll',
		type: 'boolean',
		routing: {
			operations: {
				pagination: {
					type: 'generic',
					properties: {
						// $response.headers.link ? true : false
						continue: '={{ $response.headers.link ? true : false }}',
						request: {
							url: '={{ $response.headers.link ? $response.headers.link.split(";")[0].replace("<", "").replace(">", "") : null }}',
						},
					},
				},
			},
			send: {
				paginate: '={{ $value }}',
				preSend: [
					async function (
						this: IExecuteSingleFunctions,
						requestOptions: IHttpRequestOptions,
					): Promise<IHttpRequestOptions> {
						// NOTE: THIS IS A HACKISH WORKAROUND
						//
						// For some reason, when paginate: true, the URL is not properly combined. After 2 days of
						// debugging, I chose to manually combine the baseURL and url properties.
						//
						// The behavior is that when paginate: true, ONLY the baseURL is used for the initial request.
						//
						// If we have both baseURL and url, combine them properly
						if (requestOptions.baseURL && requestOptions.url) {
							// Clean the URL parts to avoid double slashes
							const baseURL = requestOptions.baseURL.endsWith('/')
								? requestOptions.baseURL.slice(0, -1)
								: requestOptions.baseURL;

							const urlPath = requestOptions.url.startsWith('/')
								? requestOptions.url
								: `/${requestOptions.url}`;

							// Store the full URL in baseURL and clear the url property
							requestOptions.baseURL = `${baseURL}${urlPath}`;
							requestOptions.url = '';

							// console.log('Combined URL:', requestOptions.baseURL);
						}

						return requestOptions;
					},
				],
			},
		},
		displayOptions: {
			show: {
				// resource: ['Card Tables'],
				operation: [
					'getCardsInColumn',
					'getCampfires',
					'getCampfireLines',
					'getChatbots',
					'getClientApprovals',
					'getClientCorrespondences',
					'getClientReplies',
					'getComments',
					'getDocuments',
					'getEvents',
					'getForwards',
					'getInboxReplies',
					'getMessages',
					'getMessageTypes',
					'getPeople',
					'getProjectPeople',
					'getCompanyPeople',
					'getProjects',
					'getQuestionAnswers',
					'getQuestions',
					'getRecordings',
					'getScheduleEntries',
					'getTemplates',
					'getTodos',
					'getTodolists',
					'getTodolistGroups',
					'getUploads',
					'getVaults',
					'getWebhooks',
				],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
];

export const returnFullResponseField: INodeProperties[] = [
	{
		displayName: 'Return Full Response',
		name: 'returnFullResponse',
		type: 'boolean',
		default: false,
		description:
			'Whether to return the full response (status code, headers, body) instead of only body',
		noDataExpression: true,
		routing: {
			send: {
				property: 'returnFullResponse',
				value: '={{$value}}',
			},
			output: {
				postReceive: [
					{
						type: 'set',
						enabled: '={{ $value }}',
						properties: {
							value: '={{ $response }}',
						},
					},
				],
			},
		},
	},
];
