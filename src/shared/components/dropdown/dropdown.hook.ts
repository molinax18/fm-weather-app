import { useEffect, useState } from "react";

export function useDropdown(
  ref: React.RefObject<HTMLElement | null>,
  controlledIsOpen?: boolean,
  onToggle?: () => void,
) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = typeof controlledIsOpen !== "undefined";
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const toggle = () => {
    isControlled ? onToggle?.() : setInternalIsOpen(!internalIsOpen);
  };

  const close = () => {
    if (isControlled) {
      if (controlledIsOpen === true) onToggle?.();
    } else {
      setInternalIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, ref, onToggle]);

  return { isOpen, toggleDropdown: toggle };
}
