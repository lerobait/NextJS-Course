"use client";

import type { Snippet } from "@prisma/client";
import MonacoEditorComponent from "./MonacoEditor";
interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <div>
      <MonacoEditorComponent value={snippet.code} />
    </div>
  );
}
