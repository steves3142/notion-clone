"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useState, useTransition } from "react";
import { deleteDocument } from "@/actions/actions";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";

function DeleteDocument() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    const roomId = pathname.split("/").pop();
    if (!roomId) return;

    startTransition(async () => {
      const { success } = await deleteDocument(roomId);

      if (success) {
        setIsOpen(false);
        router.replace("/");
        toast.success("Room Deleted successfully!");
      } else {
        toast.error("Failed to delete room!");
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant="destructive">
        <DialogTrigger>Delete</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to Delete?</DialogTitle>
          <DialogDescription>
            This will delete the document and all its contents, removing all
            users from the document.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-end gap-2">
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? "Deleting…" : "Delete"}
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDocument;