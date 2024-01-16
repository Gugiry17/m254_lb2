import { logger, Client as CamundaClient } from 'camunda-external-task-client-js';
import nodemailer from 'nodemailer';

const camundaConfig = { baseUrl: 'http://localhost:8080/engine-rest', use: logger };
const client = new CamundaClient(camundaConfig);

const transporter = nodemailer.createTransport({
	host: 'mail.infomaniak.com',
	port: 465,
	secure: true,
	auth: {
		user: 'no-reply@lezurex.com',
		pass: '***REMOVED***'
	}
});

client.subscribe('sendConfirm', async ({ task, taskService }) => {
	await transporter.sendMail({
		from: 'no-reply@lezurex.com',
		to: task.variables.get('email'),
		subject: 'Dein Auftrag wurde empfangen',
		text: `Dein Auftrag "${task.variables.get('projectname')}" wurde empfangen`
	});
	await taskService.complete(task);
});

client.subscribe('sendRejection', async ({ task, taskService }) => {
	await transporter.sendMail({
		from: 'no-reply@lezurex.com',
		to: task.variables.get('email'),
		subject: 'Dein Auftrag wurde abgelehnt',
		text: `Dein Auftrag "${task.variables.get('projectname')}" wurde aufgrund mangelnder Kapazität abgelehnt`
	});
	await taskService.complete(task);
});

client.subscribe('sendBroSis', async ({ task, taskService }) => {
	await transporter.sendMail({
		from: 'no-reply@lezurex.com',
		to: task.variables.get('email'),
		subject: 'Dein Auftrag wird bearbeitet',
		text: `Dein Auftrag "${task.variables.get('projectname')}" wurde angenommen und wird nun von ${task.variables.get('broFound')} bearbeitet.`
	});
	await taskService.complete(task);
});

console.log('Worker started');
