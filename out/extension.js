"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    console.log('ErrorHide has been triggered.');
    vscode.commands.executeCommand('notifications.clearAll');
}
exports.activate = activate;
function deactivate() {
    console.log('ErrorHide has been disabled.');
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map