"use strict";

const chalk = require("chalk");

console.log(chalk.hex('#7FE5B2')("    ✨ ") + chalk.hex('#9999F3')("Modified") + chalk.hex('#F6D9B7')("  ") + chalk.hex('#FF9A7C')("Baileys") + chalk.hex('#7FE5B2')("  ✨"));
console.log(chalk.hex('#A5C7EC')("    🌸  ") + chalk.hex('#F0F3FF')("Hi, thank you for using my library") + chalk.hex('#A5C7EC')("  🌸"));
console.log(chalk.hex('#9DF0B3')("    📁  Information    :") + chalk.hex('#F0F3FF')(" Stable version with bug fixes and improvements"));
console.log(chalk.hex('#F991B9')("    🆕  Latest Update  :") + chalk.hex('#7450EF')(" 05 - 02 - 2026"));
console.log("");
console.log(chalk.hex('#E8A5EC')("    👨‍💻  Developer Information"));
console.log(chalk.hex('#7FE5B2')("    📱  WhatsApp      :") + chalk.hex('#EDB974')(" wa.me/6285189416130"));
console.log(chalk.hex('#9999F3')("    ✈️  Telegram      :") + chalk.hex('#FF9A7C')(" @pyhrinee"));
console.log("");
console.log(chalk.hex('#7FE5B2')("    🚀 Ready to connect..."));
console.log(chalk.hex('#E8A5EC')("    👨‍💻  Credits       :") + chalk.hex('#F0F3FF')(" WhiskeySockets Team"));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
 if (k2 === undefined) k2 = k;
 var desc = Object.getOwnPropertyDescriptor(m, k);
 if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
   desc = { enumerable: true, get: function() { return m[k]; } };
 }
 Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
 if (k2 === undefined) k2 = k;
 o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
 for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
 return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
