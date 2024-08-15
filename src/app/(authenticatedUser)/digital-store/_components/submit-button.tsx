"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({pendingMessage, message}: {pendingMessage: string, message:string}) {
  const { pending,  } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? pendingMessage : message}
    </Button>
  );
}
