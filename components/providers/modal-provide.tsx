"use client";

import { useEffect, useState } from "react";
import { Settingmodal } from "../modals/setting-modal";

export const ModalProvider = () => {
  const [isMoounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMoounted) {
    return null;
  }

  return (
    <>
      <Settingmodal />
    </>
  );
};
