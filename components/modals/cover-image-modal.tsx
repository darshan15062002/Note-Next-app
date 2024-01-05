"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import { useCoverImage } from "@/hooks/use-cover-image";

export const CoverImageModal = () => {
  const coverImage = useCoverImage();
  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover image</h2>
        </DialogHeader>
        <div className="">TODO: Upload Image</div>
      </DialogContent>
    </Dialog>
  );
};
