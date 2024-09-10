// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import axios from 'axios';

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
			placeHolder: 'Enter victim address',
			prompt: 'Source',
		});

		
        // Determine the default directory for the "Destination"
        const defaultDirectory = vscode.workspace.workspaceFolders 
            ? vscode.workspace.workspaceFolders[0].uri.fsPath 
            : path.resolve(__dirname);

        // Prompt the user for the "Destination" directory
        const destinationUri = await vscode.window.showOpenDialog({
            canSelectFolders: true,
            canSelectFiles: true,
            canSelectMany: false,
            defaultUri: vscode.Uri.file(defaultDirectory),
            openLabel: 'Select Destination Folder'
        });

        // Check if both inputs were provided
        if (!source) {
            vscode.window.showErrorMessage('Please provide a valid Source path.');
            return;
        }

        const destination = destinationUri ? destinationUri[0].fsPath : defaultDirectory;

        // Show confirmation of the paths
        vscode.window.showInformationMessage(`Source: ${source}, Destination: ${destination}`);
        
        // Further logic can be implemented here using the source and destination values
    });

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

