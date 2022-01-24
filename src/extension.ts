import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('ErrorHide has been triggered.');

	vscode.commands.executeCommand('notifications.clearAll');
}

export function deactivate() {
	console.log('ErrorHide has been disabled.');
}
