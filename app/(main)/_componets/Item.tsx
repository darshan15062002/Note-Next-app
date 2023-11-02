"use client";

import { LucideIcon } from "lucide-react";
import React from "react";

interface itemInterface {
  label: String;
  onClick: () => void;
  icon: LucideIcon;
}
function Item({ label, icon: Icon, onClick }: itemInterface) {
  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: "12px" }}
      className="group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium"
    >
      <Icon className="shrink-0 h-[18px] mx-2 text-muted-foreground" />
      <span>{label}</span>
    </div>
  );
}

export default Item;
