import Image from "next/image";
import React from "react";
const DocumentsPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty.png"
        height={"300"}
        width={"300"}
        alt="empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height={"300"}
        width={"300"}
        alt="empty"
        className="dark:block"
      />
    </div>
  );
};

export default DocumentsPage;
