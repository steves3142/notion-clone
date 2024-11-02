"use client";

// import { createNewDocument } from "@/actions/actions";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

//   const handleCreateNewDocument = () => {
//     startTransition(async () => {
//       const { docId } = await createNewDocument();
//       router.push(`/doc/${docId}`);
//     });
//   };

  return (
    <Button>
        New Document
    </Button>
  );
}

export default NewDocumentButton;