"use client";

import { useEffect, useState } from "react";
import { Settingmodal } from "../modals/setting-modal";
import { CoverImageModal } from "../modals/cover-image-modal";
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
      <CoverImageModal />
    </>
  );
};
