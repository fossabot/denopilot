import {
  Balloon,
  IScreenRegion,
  ScreenshotMode,
  Speech,
} from "./models/system.ts";
import * as nirCmd from "./nirCmd.ts";

/**
 * Take a screenshot of monitor, region or window
 * @date 12/29/2023 - 10:30:52 AM
 *
 * @export
 * @async
 * @param {(ScreenshotMode | IScreenRegion)} mode
 * @param {string} imagePath Image path, supported: .bmp, .gif, .png, .jpg, .tiff. if *clipboard* is used the image will be copied to clipboard.
 * @example
 * ```ts
 * import * as system from "https://deno.land/x/denopilot/mod_system.ts"
 * //Take a screenshot of active window and save the image.
 * await system.screenshot("ActiveWindow", "c:\\temp\\deno.png")
 * ```
 *
 * @example
 * ```ts
 * import * as system from "https://deno.land/x/denopilot/mod_system.ts"
 * //Take a screenshot of all monitors
 * await system.screenshot("AllMonitors", "c:\\temp\\deno.png")
 * ```
 *
 * @example
 * ```ts
 * import * as system from "https://deno.land/x/denopilot/mod_system.ts"
 * //Take a screenshot of primary monitor
 * await system.screenshot("PrimaryMonitor", "c:\\temp\\deno.png")
 * ```
 *
 * @example
 * ```ts
 * import * as system from "https://deno.land/x/denopilot/mod_system.ts"
 * //Take a screenshot of a region
 * await system.screenshot({x:10, y:20, width:300, height:500}, "c:\\temp\\deno.png")
 * ```
 * @returns {Promise<number>}
 */
export async function screenshot(
  mode: ScreenshotMode | IScreenRegion,
  imagePath: string,
): Promise<number> {
  const args: string[] = [];

  if (typeof mode === "string") {
    const modeMap: Record<string, string> = {
      ActiveWindow: "savescreenshotwin",
      AllMonitors: "savescreenshotfull",
      PrimaryMonitor: "savescreenshot",
    };
    args.push(modeMap[mode], imagePath);
  } else {
    args.push("savescreenshot", imagePath, ...Object.values(mode).map(String));
  }

  return await nirCmd.runNirCmd(args);
}

/**
 * Plays a beep
 * @date 12/29/2023 - 10:48:23 AM
 *
 * @export
 * @async
 * @param {number} frequency - Frequency in hertz
 * @param {number} duration - Duration in milliseconds
 * @example
 * ```ts
 * import * as system from "https://deno.land/x/denopilot/mod_system.ts"
 * //Play 500 Hz beep for 1 sec (1000 milliseconds)
 * await system.beep(500, 1000)
 * ```
 * @returns {Promise<number>}
 */
export async function beep(
  frequency: number,
  duration: number,
): Promise<number> {
  const args: string[] = ["beep", frequency.toString(), duration.toString()];
  return await nirCmd.runNirCmd(args);
}

/**
 * Plays the standard beep of Windows.
 * @date 12/29/2023 - 10:52:04 AM
 *
 * @export
 * @async
 * @example
 * ```ts
 * import * as system from "https://deno.land/x/denopilot/mod_system.ts"
 * await system.winbeep()
 * ```
 * @returns {Promise<number>}
 */
export async function winbeep(): Promise<number> {
  const args: string[] = ["stdbeep"];
  return await nirCmd.runNirCmd(args);
}

/**
 * Speaks the contents of the text
 * @date 12/29/2023 - 9:06:45 PM
 *
 * @export
 * @async
 * @param {Speech} speech - Speech parameter
 * @param {string} speech.text - Text to speak
 * @param {number=} speech.rate - Optional: Speech rate between -10 (very slow) and 10 (very fast)
 * @param {number=} speech.volume - Optional: Volume of the Speech between 0 and 100
 * @returns {Promise<number>}
 */
export async function speak(speech: Speech): Promise<number> {
  const args: string[] = ["speak", "text", speech.text];
  const rate = speech.rate ?? 0;
  args.push(rate.toString());
  if (speech.volume) {
    args.push(speech.volume.toString());
  }
  return await nirCmd.runNirCmd(args);
}

/**
 * Set the specified text into the clipboard.
 * @date 12/27/2023 - 9:40:51 PM
 *
 * @export
 * @async
 * @param {string} text cliboard text
 * @example
 * ```ts
 * await system.setClipboard("Hello Deno.")
 * ```
 * @returns {Promise<number>} process exit code.
 */
export async function setClipboard(text: string): Promise<number> {
  return await nirCmd.runNirCmd(["clipboard", "set", text]);
}

/**
 * Clear the clipboard.
 * @date 12/27/2023 - 9:43:06 PM
 *
 * @export
 * @async
 * @example
 * ```ts
 * await system.clearClipboard()
 * ```
 * @returns {Promise<number>}
 */
export async function clearClipboard(): Promise<number> {
  return await nirCmd.runNirCmd(["clipboard", "clear"]);
}


/**
 * Description placeholder
 * @date 12/29/2023 - 11:24:46 PM
 *
 * @export
 * @async
 * @param {Balloon} balloon - Balloon parameter
 * @param {string} balloon.title - Tray Balloon title
 * @param {string} balloon.text - Tray Balloon text
 * @param {number} balloon.icon - Tray Balloon icon, icon number in shell32.dll
 * @param {number} balloon.timeout - Tray Ballon timeout in milliseconds.
 * @example
 * ```ts
 * await system.trayBalloon({title:"Deno", text:"Hello from deno", icon: 300, timeout:2000})
 * ```
 * @returns {Promise<number>}
 */
export async function trayBalloon(balloon: Balloon): Promise<number> {
  const args: string[] = [
    "trayballoon",
    balloon.title,
    balloon.text,
    `shell32.dll,${balloon.icon}`,
    balloon.timeout.toString(),
  ];
  return await nirCmd.runNirCmd(args);
}
