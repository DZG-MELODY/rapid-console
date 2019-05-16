import chalk from "chalk";
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

export default {
  success(message: string): void {
    console.log(
      `${formatTitle(MessageTypes.SUCCESS)} ${formatMessage(
        MessageTypes.SUCCESS,
        message
      )}`
    );
  },
  info(message: string): void {
    console.log(
      `${formatTitle(MessageTypes.INFO)} ${formatMessage(
        MessageTypes.INFO,
        message
      )}`
    );
  },
  note(message: string): void {
    console.log(
      `${formatTitle(MessageTypes.NOTE)} ${formatMessage(
        MessageTypes.NOTE,
        message
      )}`
    );
  },
  warning(message: string): void {
    console.log(
      `${formatTitle(MessageTypes.WARNING)} ${formatMessage(
        MessageTypes.WARNING,
        message
      )}`
    );
  },
  error(message: string): void {
    console.log(
      `${formatTitle(MessageTypes.ERROR)} ${formatMessage(
        MessageTypes.ERROR,
        message
      )}`
    );
  },
  plain(
    message: string,
    colorNames: Array<normalColor> = ["white", "black"]
  ): void {
    const [foreColor = "white", backgroundColor = "black"] = colorNames;
    console.log(
      (chalk as any)[`bg${capitalize(backgroundColor)}`][foreColor](message)
    );
  },
  split(n: number = 20, placeHolder: string = "="): void {
    return this.plain(new Array<string>(n).fill(placeHolder).join(""));
  },
  line(n: number = 1): void {
    while (n > 0) {
      console.log("");
      n -= 1;
    }
  },
  title(message: string): void {
    const padding = 2;
    const len: number = message.length;
    const n = len + padding * 2;
    this.split(n + 2, "*");
    this.plain(
      outlineMessage(new Array<string>(len).fill(" ").join(""), padding, "*")
    );
    this.plain(outlineMessage(message, padding, "*"));
    this.plain(
      outlineMessage(new Array<string>(len).fill(" ").join(""), padding, "*")
    );
    this.split(n + 2, "*");
  }
};
