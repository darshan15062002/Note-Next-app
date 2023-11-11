"use client";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "@/convex/_generated/api";
import Item from "./Item";
import { cn } from "@/lib/utils";

interface DocumentListPrope {
  parentDocumentId: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}
export const DocumentList = ({
  parentDocumentId,
  level = 0,
  data,
}: DocumentListPrope) => {
  const params = useParams();
  const router = useRouter();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const onExpand = (documentId: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [documentId]: !prevExpanded[documentId],
    }));
  };

  const documents = useQuery(api.documents.getSidebar, {
    parentDocument: parentDocumentId,
  });

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  if (document === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />
        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    );
  }

  return (
    <>
      <p
        style={{
          paddingLeft: level ? `${level * 12 + 25}px` : undefined,
        }}
        className={cn(
          "hidden text-sm font-medium text-muted-foreground/80",
          expanded && "last:block",
          level === 0 && "hidden"
        )}
      >
        No Pages Inside
      </p>
    </>
  );
};