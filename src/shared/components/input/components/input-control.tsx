import type { ComponentPropsWithoutRef } from "react";
import { useInputContext } from "../input.context";

export default function Control({
  ...props
}: ComponentPropsWithoutRef<"input">) {
  const { id, name } = useInputContext();
  return <input {...props} id={id} name={name} />;
}
