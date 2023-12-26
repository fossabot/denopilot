import { AsciiVCode } from "./AsciiVCodeModel.ts";

export enum Key {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Shift = 16,
  Ctrl = 17,
  Alt = 18,
  PauseBreak = 19,
  CapsLock = 20,
  Escape = 27,
  Space = 32,
  PageUp = 33,
  PageDown = 34,
  End = 35,
  Home = 36,

  LeftArrow = 37,
  UpArrow = 38,
  RightArrow = 39,
  DownArrow = 40,

  Insert = 45,
  Delete = 46,

  Zero = 48,
  ClosedParen = Zero,
  One = 49,
  ExclamationMark = One,
  Two = 50,
  AtSign = Two,
  Three = 51,
  PoundSign = Three,
  Hash = PoundSign,
  Four = 52,
  DollarSign = Four,
  Five = 53,
  PercentSign = Five,
  Six = 54,
  Caret = Six,
  Hat = Caret,
  Seven = 55,
  Ampersand = Seven,
  Eight = 56,
  Star = Eight,
  Asterik = Star,
  Nine = 57,
  OpenParen = Nine,

  A = 65,
  B = 66,
  C = 67,
  D = 68,
  E = 69,
  F = 70,
  G = 71,
  H = 72,
  I = 73,
  J = 74,
  K = 75,
  L = 76,
  M = 77,
  N = 78,
  O = 79,
  P = 80,
  Q = 81,
  R = 82,
  S = 83,
  T = 84,
  U = 85,
  V = 86,
  W = 87,
  X = 88,
  Y = 89,
  Z = 90,

  LeftWindowKey = 91,
  RightWindowKey = 92,
  SelectKey = 93,

  Numpad0 = 96,
  Numpad1 = 97,
  Numpad2 = 98,
  Numpad3 = 99,
  Numpad4 = 100,
  Numpad5 = 101,
  Numpad6 = 102,
  Numpad7 = 103,
  Numpad8 = 104,
  Numpad9 = 105,

  Multiply = 106,
  Add = 107,
  Subtract = 109,
  DecimalPoint = 110,
  Divide = 111,

  F1 = 112,
  F2 = 113,
  F3 = 114,
  F4 = 115,
  F5 = 116,
  F6 = 117,
  F7 = 118,
  F8 = 119,
  F9 = 120,
  F10 = 121,
  F11 = 122,
  F12 = 123,

  NumLock = 144,
  ScrollLock = 145,

  SemiColon = 186,
  Equals = 187,
  Comma = 188,
  Dash = 189,
  Period = 190,
  UnderScore = Dash,
  PlusSign = Equals,
  ForwardSlash = 191,
  Tilde = 192,
  GraveAccent = Tilde,

  OpenBracket = 219,
  ClosedBracket = 221,
  Quote = 222,
}

export const ASCII_VCODE: Array<AsciiVCode> = [
  { ascii: 13, vCode: 13, shift: false, desc: "Enter" },
  { ascii: 10, vCode: 13, shift: false, desc: "Enter" },
  { ascii: 9, vCode: 9, shift: false, desc: "Tab" },
  { ascii: 32, vCode: 32, shift: false, desc: "Space" },
  { ascii: 33, vCode: 49, shift: true, desc: "Exclamation mark" },
  {
    ascii: 34,
    vCode: 222,
    shift: true,
    desc: "Double quotes (or speech marks)",
  },
  { ascii: 35, vCode: 51, shift: true, desc: "Number sign" },
  { ascii: 36, vCode: 52, shift: true, desc: "Dollar" },
  { ascii: 37, vCode: 53, shift: true, desc: "Per cent sign" },
  { ascii: 38, vCode: 55, shift: true, desc: "Ampersand" },
  { ascii: 39, vCode: 222, shift: false, desc: "Single quote" },
  {
    ascii: 40,
    vCode: 57,
    shift: true,
    desc: "Open parenthesis (or open bracket)",
  },
  {
    ascii: 41,
    vCode: 48,
    shift: true,
    desc: "Close parenthesis (or close bracket)",
  },
  { ascii: 42, vCode: 56, shift: true, desc: "Asterisk" },
  { ascii: 43, vCode: 187, shift: true, desc: "Plus" },
  { ascii: 44, vCode: 188, shift: false, desc: "Comma" },
  { ascii: 45, vCode: 189, shift: false, desc: "Hyphen-minus" },
  { ascii: 46, vCode: 190, shift: false, desc: "Period, dot or full stop" },
  { ascii: 47, vCode: 111, shift: false, desc: "Slash or divide" },
  { ascii: 48, vCode: 48, shift: false, desc: "Zero" },
  { ascii: 49, vCode: 49, shift: false, desc: "One" },
  { ascii: 50, vCode: 50, shift: false, desc: "Two" },
  { ascii: 51, vCode: 51, shift: false, desc: "Three" },
  { ascii: 52, vCode: 52, shift: false, desc: "Four" },
  { ascii: 53, vCode: 53, shift: false, desc: "Five" },
  { ascii: 54, vCode: 54, shift: false, desc: "Six" },
  { ascii: 55, vCode: 55, shift: false, desc: "Seven" },
  { ascii: 56, vCode: 56, shift: false, desc: "Eight" },
  { ascii: 57, vCode: 57, shift: false, desc: "Nine" },
  { ascii: 58, vCode: 186, shift: true, desc: "Colon" },
  { ascii: 59, vCode: 186, shift: false, desc: "Semicolon" },
  {
    ascii: 60,
    vCode: 188,
    shift: true,
    desc: "Less than (or open angled bracket)",
  },
  { ascii: 61, vCode: 187, shift: false, desc: "Equals" },
  {
    ascii: 62,
    vCode: 190,
    shift: true,
    desc: "Greater than (or close angled bracket)",
  },
  { ascii: 63, vCode: 191, shift: true, desc: "Question mark" },
  { ascii: 64, vCode: 50, shift: true, desc: "At sign" },
  { ascii: 65, vCode: 65, shift: true, desc: "Uppercase A" },
  { ascii: 66, vCode: 66, shift: true, desc: "Uppercase B" },
  { ascii: 67, vCode: 67, shift: true, desc: "Uppercase C" },
  { ascii: 68, vCode: 68, shift: true, desc: "Uppercase D" },
  { ascii: 69, vCode: 69, shift: true, desc: "Uppercase E" },
  { ascii: 70, vCode: 70, shift: true, desc: "Uppercase F" },
  { ascii: 71, vCode: 71, shift: true, desc: "Uppercase G" },
  { ascii: 72, vCode: 72, shift: true, desc: "Uppercase H" },
  { ascii: 73, vCode: 73, shift: true, desc: "Uppercase I" },
  { ascii: 74, vCode: 74, shift: true, desc: "Uppercase J" },
  { ascii: 75, vCode: 75, shift: true, desc: "Uppercase K" },
  { ascii: 76, vCode: 76, shift: true, desc: "Uppercase L" },
  { ascii: 77, vCode: 77, shift: true, desc: "Uppercase M" },
  { ascii: 78, vCode: 78, shift: true, desc: "Uppercase N" },
  { ascii: 79, vCode: 79, shift: true, desc: "Uppercase O" },
  { ascii: 80, vCode: 80, shift: true, desc: "Uppercase P" },
  { ascii: 81, vCode: 81, shift: true, desc: "Uppercase Q" },
  { ascii: 82, vCode: 82, shift: true, desc: "Uppercase R" },
  { ascii: 83, vCode: 83, shift: true, desc: "Uppercase S" },
  { ascii: 84, vCode: 84, shift: true, desc: "Uppercase T" },
  { ascii: 85, vCode: 85, shift: true, desc: "Uppercase U" },
  { ascii: 86, vCode: 86, shift: true, desc: "Uppercase V" },
  { ascii: 87, vCode: 87, shift: true, desc: "Uppercase W" },
  { ascii: 88, vCode: 88, shift: true, desc: "Uppercase X" },
  { ascii: 89, vCode: 89, shift: true, desc: "Uppercase Y" },
  { ascii: 90, vCode: 90, shift: true, desc: "Uppercase Z" },
  { ascii: 91, vCode: 219, shift: false, desc: "Opening bracket" },
  { ascii: 92, vCode: 220, shift: false, desc: "Backslash" },
  { ascii: 93, vCode: 221, shift: false, desc: "Closing bracket" },
  { ascii: 94, vCode: 54, shift: true, desc: "Caret - circumflex" },
  { ascii: 95, vCode: 189, shift: true, desc: "Underscore" },
  { ascii: 96, vCode: 192, shift: false, desc: "Grave accent" },
  { ascii: 97, vCode: 65, shift: false, desc: "Lowercase a" },
  { ascii: 98, vCode: 66, shift: false, desc: "Lowercase b" },
  { ascii: 99, vCode: 67, shift: false, desc: "Lowercase c" },
  { ascii: 100, vCode: 68, shift: false, desc: "Lowercase d" },
  { ascii: 101, vCode: 69, shift: false, desc: "Lowercase e" },
  { ascii: 102, vCode: 70, shift: false, desc: "Lowercase f" },
  { ascii: 103, vCode: 71, shift: false, desc: "Lowercase g" },
  { ascii: 104, vCode: 72, shift: false, desc: "Lowercase h" },
  { ascii: 105, vCode: 73, shift: false, desc: "Lowercase i" },
  { ascii: 106, vCode: 74, shift: false, desc: "Lowercase j" },
  { ascii: 107, vCode: 75, shift: false, desc: "Lowercase k" },
  { ascii: 108, vCode: 76, shift: false, desc: "Lowercase l" },
  { ascii: 109, vCode: 77, shift: false, desc: "Lowercase m" },
  { ascii: 110, vCode: 78, shift: false, desc: "Lowercase n" },
  { ascii: 111, vCode: 79, shift: false, desc: "Lowercase o" },
  { ascii: 112, vCode: 80, shift: false, desc: "Lowercase p" },
  { ascii: 113, vCode: 81, shift: false, desc: "Lowercase q" },
  { ascii: 114, vCode: 82, shift: false, desc: "Lowercase r" },
  { ascii: 115, vCode: 83, shift: false, desc: "Lowercase s" },
  { ascii: 116, vCode: 84, shift: false, desc: "Lowercase t" },
  { ascii: 117, vCode: 85, shift: false, desc: "Lowercase u" },
  { ascii: 118, vCode: 86, shift: false, desc: "Lowercase v" },
  { ascii: 119, vCode: 87, shift: false, desc: "Lowercase w" },
  { ascii: 120, vCode: 88, shift: false, desc: "Lowercase x" },
  { ascii: 121, vCode: 89, shift: false, desc: "Lowercase y" },
  { ascii: 122, vCode: 90, shift: false, desc: "Lowercase z" },
  { ascii: 123, vCode: 219, shift: true, desc: "Opening brace" },
  { ascii: 124, vCode: 220, shift: true, desc: "Vertical bar" },
  { ascii: 125, vCode: 221, shift: true, desc: "Closing brace" },
  { ascii: 126, vCode: 192, shift: true, desc: "Equivalency sign - tilde" },
];
