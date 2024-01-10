"use client";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });

    toast.promise(promise, {
      loading: "Creating New Note...",
      success: "New Note Created",
      error: "Failed to create New Note",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty.png"
        height={"300"}
        width={"300"}
        alt="empty"
        className="dark:hidden block"
      />
      <Image
        src="/empty-dark.png"
        height={"300"}
        width={"300"}
        alt="empty"
        className="dark:block hidden"
      />
      <h2>Welcome to {user?.firstName}&apos;</h2>
      <Button onClick={onCreate} className="bg-[#F15825]">
        <PlusCircleIcon className="h-4 w-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
};

export default DocumentsPage;
