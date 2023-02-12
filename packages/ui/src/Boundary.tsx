import clsx from "clsx"
import React from "react"

const Label = ({
  children,
  animateRerendering,
  color,
}: {
  children: React.ReactNode
  animateRerendering?: boolean
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange"
}) => {
  return (
    <div
      className={clsx(
        "ui-rounded-full ui-px-1.5 ui-shadow-[0_0_1px_3px_black]",
        {
          "ui-bg-gray-800 ui-text-gray-300": color === "default",
          "ui-bg-vercel-pink ui-text-white": color === "pink",
          "ui-bg-vercel-blue ui-text-white": color === "blue",
          "ui-bg-vercel-cyan ui-text-white": color === "cyan",
          "ui-bg-vercel-violet ui-text-violet-100": color === "violet",
          "ui-bg-vercel-orange ui-text-white": color === "orange",
          "ui-animate-[highlight_1s_ease-in-out_1]": animateRerendering,
        }
      )}
    >
      {children}
    </div>
  )
}
export const Boundary = ({
  children,
  labels = ["children"],
  size = "default",
  color = "default",
  animateRerendering = true,
}: {
  children: React.ReactNode
  labels?: string[]
  size?: "small" | "default"
  color?: "default" | "pink" | "blue" | "violet" | "cyan" | "orange"
  animateRerendering?: boolean
}) => {
  return (
    <div
      className={clsx("ui-relative ui-rounded-lg ui-border ui-border-dashed", {
        "ui-p-3 ui-lg:p-5": size === "small",
        "ui-p-4 ui-lg:p-9": size === "default",
        "ui-border-gray-700": color === "default",
        "ui-border-vercel-pink": color === "pink",
        "ui-border-vercel-blue": color === "blue",
        "ui-border-vercel-cyan": color === "cyan",
        "ui-border-vercel-violet": color === "violet",
        "ui-border-vercel-orange": color === "orange",
        "ui-text-vercel-pink ui-animate-[rerender_1s_ease-in-out_1]":
          animateRerendering,
      })}
    >
      <div
        className={clsx(
          "ui-absolute ui--top-2.5 ui-flex ui-gap-x-1 ui-text-[9px] ui-uppercase ui-leading-4 ui-tracking-widest",
          {
            "ui-left-3 ui-lg:left-5": size === "small",
            "ui-left-4 ui-lg:left-9": size === "default",
          }
        )}
      >
        {labels.map((label) => {
          return (
            <Label
              key={label}
              color={color}
              animateRerendering={animateRerendering}
            >
              {label}
            </Label>
          )
        })}
      </div>

      {children}
    </div>
  )
}
