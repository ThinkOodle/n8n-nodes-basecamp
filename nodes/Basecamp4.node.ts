import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { N8NPropertiesBuilder, N8NPropertiesBuilderConfig } from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json';

const config: N8NPropertiesBuilderConfig = {};
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build();

export class Basecamp4 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Basecamp',
		name: 'basecamp4',
		icon: 'file:Basecamp.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Interact with Basecamp API',
		defaults: {
			name: 'Basecamp',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'basecamp4OAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			baseURL: '={{"https://3.basecampapi.com/" + $credentials.accountId}}',
		},
		properties: properties,
	};
}
