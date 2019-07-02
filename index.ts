import chalk from "chalk";
import { rainbow, Animation } from "chalk-animation";
import {
  capitalize,
  formatTitle,
  formatMessage,
  outlineMessage,
  MessageTypes
} from "./src/utils";

type normalColor =
  | "black"
  | "white"
  | "green"
  | "yellow"
  | "blue"
  | "red"
  | "cyan";

export function success(message: string): void {
  console.log(
    `${formatTitle(MessageTypes.SUCCESS)} ${formatMessage(
      MessageTypes.SUCCESS,
      message
    )}`
  );
}
export function info(message: string): void {
  console.log(
    `${formatTitle(MessageTypes.INFO)} ${formatMessage(
      MessageTypes.INFO,
      message
    )}`
  );
}
export function note(message: string): void {
  console.log(
    `${formatTitle(MessageTypes.NOTE)} ${formatMessage(
      MessageTypes.NOTE,
      message
    )}`
  );
}
export function warning(message: string): void {
  console.log(
    `${formatTitle(MessageTypes.WARNING)} ${formatMessage(
      MessageTypes.WARNING,
      message
    )}`
  );
}
export function error(message: string): void {
  console.log(
    `${formatTitle(MessageTypes.ERROR)} ${formatMessage(
      MessageTypes.ERROR,
      message
    )}`
  );
}
export function plain(
  message: string,
  colorNames: Array<normalColor> = ["white", "black"]
): void {
  const [foreColor = "white", backgroundColor = "black"] = colorNames;
  console.log(
    (chalk as any)[`bg${capitalize(backgroundColor)}`][foreColor](message)
  );
}
export function split(n: number = 20, placeHolder: string = "="): void {
  return plain(new Array<string>(n).fill(placeHolder).join(""));
}
export function line(n: number = 1): void {
  while (n > 0) {
    console.log("");
    n -= 1;
  }
}
export function title(message: string): void {
  const padding = 2;
  const len: number = message.length;
  const n = len + padding * 2;
  split(n + 2, "*");
  plain(
    outlineMessage(new Array<string>(len).fill(" ").join(""), padding, "*")
  );
  plain(outlineMessage(message, padding, "*"));
  plain(
    outlineMessage(new Array<string>(len).fill(" ").join(""), padding, "*")
  );
  split(n + 2, "*");
}
export function colorFlash(
  message: string,
  time: number = 2000
): Promise<boolean> {
  const animation: Animation = rainbow(message);
  return new Promise(resolve => {
    animation.start();
    setTimeout(() => {
      animation.stop();
      resolve(true);
    }, time);
  });
}

export default {
  success,
  info,
  note,
  warning,
  error,
  plain,
  split,
  title,
  line,
  colorFlash
};

exports = {
  success,
  info,
  note,
  warning,
  error,
  plain,
  split,
  title,
  line,
  colorFlash
};
