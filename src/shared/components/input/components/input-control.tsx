import type { ComponentPropsWithoutRef } from "react";
import { useInputContext } from "@/shared/components/input/input.context";

export default function InputControl({
  ...props
}: ComponentPropsWithoutRef<"input">) {
  const { id, name } = useInputContext();
  return <input {...props} id={id} name={name} />;
}
