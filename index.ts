import chalk, { Chalk } from "chalk";

type normalColor =
  | "black"
  | "white"
  | "green"
  | "yellow"
  | "blue"
  | "red"
  | "cyan";

enum MessageTypes {
  SUCCESS = "SUCCESS",
  INFO = "INFO",
  NOTE = "NOTE",
  WARNING = "WARNING",
  ERROR = "ERROR"
}

const COLORS = {
  SUCCESS: "green",
  INFO: "blue",
  NOTE: "white",
  WARNING: "yellow",
  ERROR: "red"
};

const capitalize = (
  [first, ...rest]: string,
  lowerRest: boolean = false
): string =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

const bgColor = (type: MessageTypes): string => `bg${capitalize(COLORS[type])}`;

const formatTitle = (type: MessageTypes) =>
  ((chalk as any)[bgColor(type)] as Chalk).black("", `${MessageTypes[type]}`, "");

const formatMessage = (type: MessageTypes, message: string): string =>
  (chalk as any)[COLORS[type]](message);

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
    console.log((chalk as any)[`bg${capitalize(backgroundColor)}`][foreColor](message));
  },
  split(n: number = 20, placeHolder: string = "="): void {
    return this.plain(new Array<string>(n).fill(placeHolder).join(""));
  },
  line(n: number = 1): void {
    while (n <= 0) {
      console.log("");
      n -= 1;
    }
  }
};
