import chalk, { Chalk } from "chalk";

export enum MessageTypes {
  SUCCESS = "SUCCESS",
  INFO = "INFO",
  NOTE = "NOTE",
  WARNING = "WARNING",
  ERROR = "ERROR"
}

const TITLES = {
  SUCCESS: " SUCCESS ",
  INFO: "  INFO   ",
  NOTE: "  NOTE   ",
  WARNING: " WARNING ",
  ERROR: "  ERROR  "
};

const COLORS = {
  SUCCESS: "green",
  INFO: "blue",
  NOTE: "white",
  WARNING: "yellow",
  ERROR: "red"
};

export function capitalize(
  [first, ...rest]: string,
  lowerRest: boolean = false
): string {
  return `${first.toUpperCase()}${
    lowerRest ? rest.join("").toLowerCase() : rest.join("")
  }`;
}

export function bgColor(type: MessageTypes): string {
  return `bg${capitalize(COLORS[type])}`;
}

export function formatTitle(type: MessageTypes) {
  return ((chalk as any)[bgColor(type)] as Chalk).black(TITLES[type]);
}

export function formatMessage(type: MessageTypes, message: string): string {
  return (chalk as any)[COLORS[type]](message);
}

export function outlineMessage(
  message: string,
  padding: number = 2,
  outlineChar: string = "*"
): string {
  const placeholder = new Array<string>(padding).fill(" ").join("");
  return `${outlineChar}${placeholder}${message}${placeholder}${outlineChar}`;
}
