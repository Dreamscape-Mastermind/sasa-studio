"use client";

/*
  Typed wrapper for `react-modal`.
  
  In this codebase (TS + ESM + Next), `react-modal`'s `export =` typing can
  occasionally surface as "cannot be used as a JSX component".
  
  This wrapper normalizes the type to a React ComponentType.
*/

import ReactModal from "react-modal";
import type React from "react";

// `react-modal` ships as `export =` (CJS style). Its type declaration exposes
// props under the merged namespace: `ReactModal.Props`.
type ModalProps = ReactModal.Props;

const Modal = ReactModal as unknown as React.ComponentType<ModalProps>;

export type { ModalProps };
export default Modal;
