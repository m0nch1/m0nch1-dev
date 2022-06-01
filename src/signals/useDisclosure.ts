import { createSignal } from "solid-js";
import type { Accessor } from "solid-js";

export interface UseDisclosure {
  isOpen: Accessor<boolean>;
  toggle: () => void;
}

export const useDisclosure = (): UseDisclosure => {
  const [isOpen, setIsOpen] = createSignal(false);
  const toggle = () => setIsOpen(!isOpen());
  return { isOpen, toggle };
};
