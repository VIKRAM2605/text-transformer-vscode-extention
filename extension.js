// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "casetransformer" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable1 = vscode.commands.registerTextEditorCommand('casetransformer.TOUPPERCASE', function (editor) {
		const selection = editor.selection;

		const selectedText = editor.document.getText(selection);

		const upperCase = toUpperCase(selectedText);

		editor.edit(function (editBuilder) {
			editBuilder.replace(selection, upperCase);
		})

		console.log(upperCase);
		vscode.window.showInformationMessage("Changed text from " + "'" + selectedText + "'" + " to " + "'" + upperCase + "'");
	});

	const disposable2 = vscode.commands.registerTextEditorCommand('casetransformer.tolowercase', function (editor) {
		const selection = editor.selection;

		const selectedText = editor.document.getText(selection);

		const toLowerCase = tolowercase(selectedText);

		editor.edit(function (editBuilder) {
			editBuilder.replace(selection, toLowerCase);
		});

		vscode.window.showInformationMessage('Changed text from ' + "'" + selectedText + "'" + " to " + "'" + toLowerCase + "'");
	});

	const disposable3 = vscode.commands.registerTextEditorCommand('casetransformer.toTitleCase', function (editor) {
		const selection = editor.selection;

		const selectedText = editor.document.getText(selection);

		const totitlecase = toTitleCase(selectedText);

		if (selectedText.length > 0 && totitlecase.length === 0) {
			vscode.window.showInformationMessage("Use a proper seperator - '-','_',' '");
			return;
		}

		editor.edit(function (editBuilder) {
			editBuilder.replace(selection, totitlecase);
		})

		vscode.window.showInformationMessage('Changed text from ' + "'" + selectedText + "'" + " to " + "'" + totitlecase + "'");
	})

	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
	context.subscriptions.push(disposable3);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}

function toUpperCase(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {

		let code = str.charCodeAt(i);

		if (code >= 97 && code <= 122) {
			result += String.fromCharCode(code - 32);
		} else {
			result += str[i];
		}
	}
	return result;
}

function tolowercase(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);

		if (code >= 65 && code <= 90) {
			result += String.fromCharCode(code + 32);
		} else {
			result += str[i];
		}
	}
	return result;
}

function toTitleCase(str) {
	let words = [];
	let pattern = "";
	let currentWord = "";
	for (let i = 0; i < str.length; i++) {

		let char = str[i];

		if (pattern === "" && (char === " " || char === "-" || char === "_")) {
			pattern += char;
		}

		if (char === pattern && pattern != "") {
			if (currentWord.length > 0) {
				words.push(currentWord);
				currentWord = "";
			}
		}
		else {
			currentWord += char;
		}
	}

	if (currentWord.length > 0) {
		words.push(currentWord);
	}

	if(pattern === "") return "";

	let result = "";
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		let capitalizedWord = "";
		for (let j = 0; j < word.length; j++) {
			let code = word.charCodeAt(j);
			if (j === 0) {
				if (code >= 97 && code <= 122) capitalizedWord += String.fromCharCode(code - 32);
				else capitalizedWord += String.fromCharCode(code);
			} else if (code >= 65 && code <= 90) {
				capitalizedWord += String.fromCharCode(code + 32);
			} else {
				capitalizedWord += String.fromCharCode(code);
			}
		}
		if (i != words.length - 1) {
			result += (capitalizedWord + " ")
		} else {
			result += capitalizedWord;
		}
	}

	return result;

}

// function toCamelCase(str){

// }								//future updates.

// function toSnakeCase(str){

// }