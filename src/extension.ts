import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "fast-anchor" is now active!')
  const disposable = vscode.commands.registerCommand(
    "fast-anchor.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from fast-anchor!")
    }
  )
  context.subscriptions.push(disposable)
}

export function deactivate() { }
