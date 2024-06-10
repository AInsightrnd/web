import { HTMLInputTypeAttribute } from "react"

export type EditFormItemType = {
  label: string
  key: string
  value: string | number | readonly string[] | boolean | undefined
  type: HTMLInputTypeAttribute
}
