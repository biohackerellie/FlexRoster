/**
 * Copied from `nextra-theme-docs`
 * @link https://github.com/shuding/nextra/blob/main/packages/nextra-theme-docs/src/components/callout.tsx
 */
import type { ComponentProps, ReactElement, ReactNode } from "react";
import React from "react";
import clsx from "clsx";

export function InformationCircleIcon(
  props: ComponentProps<"svg">,
): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width="20"
      height="20"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      />
    </svg>
  );
}

const TypeToEmoji = {
  default: "🤔",
  error: "😡",
  info: "🤔",
  warning: "😲",
  success: "😊",
};

type CalloutType = keyof typeof TypeToEmoji;

const classes: Record<CalloutType, string> = {
  default: clsx(
    "border-orange-200 bg-orange-100 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300",
  ),
  error: clsx(
    "border-red-200 bg-red-100 text-red-900 dark:border-red-200/30 dark:bg-red-900/30 dark:text-red-200",
  ),
  info: clsx(
    "border-blue-200 bg-blue-100 text-blue-900 dark:border-blue-200/30 dark:bg-blue-900/30 dark:text-blue-200",
  ),
  warning: clsx(
    "border-yellow-200 bg-yellow-100 text-yellow-900 dark:border-yellow-200/30 dark:bg-yellow-700/30 dark:text-yellow-200",
  ),
  success: clsx(
    "border-green-200 bg-green-100 text-green-900 dark:border-green-200/30 dark:bg-green-900/30 dark:text-green-200",
  ),
};

interface CalloutProps {
  type?: CalloutType;
  emoji?: string | ReactElement;
  children: ReactNode;
}

export function Callout(props: CalloutProps): ReactElement {
  const { children, type = "default", emoji = TypeToEmoji[type] } = props;

  return (
    <div
      className={clsx(
        "mt-6 flex rounded-lg border p-4",
        "contrast-more:border-current contrast-more:dark:border-current",
        classes[type],
      )}
    >
      <div
        className="select-none pr-2 text-xl"
        style={{
          fontFamily:
            '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        {emoji}
      </div>
      <div className="w-full min-w-0 leading-7">{children}</div>
    </div>
  );
}
