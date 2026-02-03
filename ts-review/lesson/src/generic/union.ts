//object

export const programModeEnumMap = {
  online: "online",
  offline: "offline",
  error: "error",
} as const;

type IOnline = (typeof programModeEnumMap)[Exclude<
  keyof typeof programModeEnumMap,
  "error" | "offline"
>];

type IOffline = (typeof programModeEnumMap)[Extract<
  keyof typeof programModeEnumMap,
  "offline"
>];

type IError = (typeof programModeEnumMap)["error"];

const isOnline: IOnline = "online";
const isOffline: IOffline = "offline";
const isError: IError = "error";

// event listener

type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type IEvent = Event["type"];

type IClickEvent = Extract<IEvent, "click">;
type IFocus = Exclude<Event, "click" | "keydown">;
type IKeydown = Extract<Event, "keydown">;

// array

const data = ["link", "hover", "a"] as const;

type IDataArr = (typeof data)[number];

const unionList: IDataArr = "link";

// array object

const kindofColors = [
  {
    type: "accent",
  },
  {
    type: "primary",
  },
  { type: "secondary" },
] as const;

// if you want to become union you need to add const

type IColors = (typeof kindofColors)[number]["type"];

type IPrimary = Extract<IColors, "primary">;

const isPrimary: IPrimary = "primary";

const testingTools = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
} as const;

type ITestLabel = ReturnType<
  () => typeof testingTools
>[keyof typeof testingTools]["label"];

type TestingFramework = keyof (typeof testingTools)[];
type ITestingToolLabel =
  (typeof testingTools)[keyof typeof testingTools]["label"];
