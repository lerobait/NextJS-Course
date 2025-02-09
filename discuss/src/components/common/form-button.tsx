"use client";
import { Button } from "@/lib/nextui";

interface FormButtonProps {
  children: React.ReactNode;
  isLoading: boolean;
}

export default function FromButton({ children, isLoading }: FormButtonProps) {
  return (
    <Button type="submit" isLoading={isLoading}>
      {children}
    </Button>
  );
}
