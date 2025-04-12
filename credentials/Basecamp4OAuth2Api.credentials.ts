import type { ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

export class Basecamp4OAuth2Api implements ICredentialType {
	name = 'basecamp4OAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Basecamp OAuth2 API';

	documentationUrl = 'https://github.com/basecamp/api/blob/master/sections/authentication.md';

	icon: Icon = 'file:Basecamp.svg';

	properties: INodeProperties[] = [
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://launchpad.37signals.com/authorization/new?type=web_server',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://launchpad.37signals.com/authorization/token?type=web_server',
		},
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
	];
}
