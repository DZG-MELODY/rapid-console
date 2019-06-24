import rConsole from "../index";

(async () => {
  rConsole.title(" welcome to rapid-console ");
  rConsole.line(2);
  await rConsole.colorFlash(" 10 9 8 7 6 5 4 3 2 1... ", 5000);
  rConsole.line(2);
  rConsole.plain("default message types:");
  rConsole.split(25);
  rConsole.note("this is note");
  rConsole.info("this is info");
  rConsole.success("this is success");
  rConsole.warning("this is warning");
  rConsole.error("this is error");
  rConsole.split(25);
  rConsole.line(2);
})();
