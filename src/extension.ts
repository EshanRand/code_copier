// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "code thief" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('codeThief.stealCode', async () => {
		// Display a message box to the user
		vscode.window.showInformationMessage('Beginning code stealing');

		// Show input box for "Source"
		const source = await vscode.window.showInputBox({
			placeHolder: 'Enter the source path',
			prompt: 'Source',
		});

		// Show input box for "Destination"
		const destination = await vscode.window.showInputBox({
			placeHolder: 'Enter the destination path',
			prompt: 'Destination',
		});

		// Log the input values for debugging
		console.log('Source:', source);
		console.log('Destination:', destination);

		// Further logic can be implemented here using the source and destination values
		if (source && destination) {
			vscode.window.showInformationMessage(`Source: ${source}, Destination: ${destination}`);
		} else {
			vscode.window.showErrorMessage('Please provide both Source and Destination paths.');
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
