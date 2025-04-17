import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { campfireFields, campfireOperations } from './descriptions/CampfireDescription';
import { cardTableFields, cardTableOperations } from './descriptions/CardTableDescription';
import { chatbotFields, chatbotOperations } from './descriptions/ChatbotDescription';
import { clientApprovalFields, clientApprovalOperations } from './descriptions/ClientApprovalDescription';
import { clientCorrespondenceFields, clientCorrespondenceOperations } from './descriptions/ClientCorrespondenceDescription';
import { clientReplyFields, clientReplyOperations } from './descriptions/ClientReplyDescription';
import { clientVisibilityFields, clientVisibilityOperations } from './descriptions/ClientVisibilityDescription';
import { commentFields, commentOperations } from './descriptions/CommentDescription';
import { documentFields, documentOperations } from './descriptions/DocumentDescription';
import { eventFields, eventOperations } from './descriptions/EventDescription';
import { forwardFields, forwardOperations } from './descriptions/ForwardDescription';
import { inboxFields, inboxOperations } from './descriptions/InboxDescription';
import { inboxReplyFields, inboxReplyOperations } from './descriptions/InboxReplyDescription';
import { lineupMarkerFields, lineupMarkerOperations } from './descriptions/LineupMarkerDescription';
import { messageFields, messageOperations } from './descriptions/MessageDescription';
import { messageBoardFields, messageBoardOperations } from './descriptions/MessageBoardDescription';
import { messageTypeFields, messageTypeOperations } from './descriptions/MessageTypeDescription';
import { personFields, personOperations } from './descriptions/PersonDescription';
import { projectFields, projectOperations } from './descriptions/ProjectDescription';
import { questionFields, questionOperations } from './descriptions/QuestionDescription';
import { questionAnswerFields, questionAnswerOperations } from './descriptions/QuestionAnswerDescription';
import { questionnaireFields, questionnaireOperations } from './descriptions/QuestionnaireDescription';
import { recordingFields, recordingOperations } from './descriptions/RecordingDescription';
import { scheduleFields, scheduleOperations } from './descriptions/ScheduleDescription';
import { scheduleEntryFields, scheduleEntryOperations } from './descriptions/ScheduleEntryDescription';
import { templateFields, templateOperations } from './descriptions/TemplateDescription';
import { todoFields, todoOperations } from './descriptions/TodoDescription';
import { todolistFields, todolistOperations } from './descriptions/TodolistDescription';
import { todolistGroupFields, todolistGroupOperations } from './descriptions/TodolistGroupDescription';
import { todosetFields, todosetOperations } from './descriptions/TodosetDescription';
import { uploadFields, uploadOperations } from './descriptions/UploadDescription';
import { vaultFields, vaultOperations } from './descriptions/VaultDescription';
import { webhookFields, webhookOperations } from './descriptions/WebhookDescription';
import { returnAllField, returnFullResponseField } from './SharedFields';

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
			returnFullResponse: true,
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Campfire',
						value: 'campfire',
					},
					{
						name: 'Card Table',
						value: 'cardTable',
					},
					{
						name: 'Chatbot',
						value: 'chatbot',
					},
					{
						name: 'Client Approval',
						value: 'clientApproval',
					},
					{
						name: 'Client Correspondence',
						value: 'clientCorrespondence',
					},
					{
						name: 'Client Reply',
						value: 'clientReply',
					},
					{
						name: 'Client Visibility',
						value: 'clientVisibility',
					},
					{
						name: 'Comment',
						value: 'comment',
					},
					{
						name: 'Document',
						value: 'document',
					},
					{
						name: 'Event',
						value: 'event',
					},
					{
						name: 'Forward',
						value: 'forward',
					},
					{
						name: 'Inbox',
						value: 'inbox',
					},
					{
						name: 'Inbox Reply',
						value: 'inboxReply',
					},
					{
						name: 'Lineup Marker',
						value: 'lineupMarker',
					},
					{
						name: 'Message',
						value: 'message',
					},
					{
						name: 'Message Board',
						value: 'messageBoard',
					},
					{
						name: 'Message Type',
						value: 'messageType',
					},
					{
						name: 'Person',
						value: 'person',
					},
					{
						name: 'Project',
						value: 'project',
					},
					{
						name: 'Question',
						value: 'question',
					},
					{
						name: 'Question Answer',
						value: 'questionAnswer',
					},
					{
						name: 'Questionnaire',
						value: 'questionnaire',
					},
					{
						name: 'Recording',
						value: 'recording',
					},
					{
						name: 'Schedule',
						value: 'schedule',
					},
					{
						name: 'Schedule Entry',
						value: 'scheduleEntry',
					},
					{
						name: 'Template',
						value: 'template',
					},
					{
						name: 'Todo',
						value: 'todo',
					},
					{
						name: 'Todolist',
						value: 'todolist',
					},
					{
						name: 'Todolist Group',
						value: 'todolistGroup',
					},
					{
						name: 'Todoset',
						value: 'todoset',
					},
					{
						name: 'Upload',
						value: 'upload',
					},
					{
						name: 'Vault',
						value: 'vault',
					},
					{
						name: 'Webhook',
						value: 'webhook',
					},
				],
				default: 'campfire',
			},

			...campfireOperations,
			...campfireFields,
			...cardTableOperations,
			...cardTableFields,
			...chatbotOperations,
			...chatbotFields,
			...clientApprovalOperations,
			...clientApprovalFields,
			...clientCorrespondenceOperations,
			...clientCorrespondenceFields,
			...clientReplyOperations,
			...clientReplyFields,
			...clientVisibilityOperations,
			...clientVisibilityFields,
			...commentOperations,
			...commentFields,
			...documentOperations,
			...documentFields,
			...eventOperations,
			...eventFields,
			...forwardOperations,
			...forwardFields,
			...inboxOperations,
			...inboxFields,
			...inboxReplyOperations,
			...inboxReplyFields,
			...lineupMarkerOperations,
			...lineupMarkerFields,
			...messageOperations,
			...messageFields,
			...messageBoardOperations,
			...messageBoardFields,
			...messageTypeOperations,
			...messageTypeFields,
			...personOperations,
			...personFields,
			...projectOperations,
			...projectFields,
			...questionOperations,
			...questionFields,
			...questionAnswerOperations,
			...questionAnswerFields,
			...questionnaireOperations,
			...questionnaireFields,
			...recordingOperations,
			...recordingFields,
			...scheduleOperations,
			...scheduleFields,
			...scheduleEntryOperations,
			...scheduleEntryFields,
			...templateOperations,
			...templateFields,
			...todoOperations,
			...todoFields,
			...todolistOperations,
			...todolistFields,
			...todolistGroupOperations,
			...todolistGroupFields,
			...todosetOperations,
			...todosetFields,
			...uploadOperations,
			...uploadFields,
			...vaultOperations,
			...vaultFields,
			...webhookOperations,
			...webhookFields,
			...returnAllField,
			...returnFullResponseField,
		],
	};
}
