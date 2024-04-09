"use client";

import type { FC, ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  fn: (open: boolean) => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ fn, children }) => {
  return (
    <Dialog.Root open onOpenChange={fn}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        <Dialog.DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
