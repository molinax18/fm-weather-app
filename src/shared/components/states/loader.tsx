import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { LoadingIcon } from "@/shared/components/svg";
import style from "./fetching-states.module.css";

interface Props extends ComponentPropsWithoutRef<"span"> {
  children: ReactNode;
}

export default function Loader({ ...props }: Props) {
  return (
    <span {...props}>
      <LoadingIcon className={style["spinner"]} />
      {props.children}
    </span>
  );
}
