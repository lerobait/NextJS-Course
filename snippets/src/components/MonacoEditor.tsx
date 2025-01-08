"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

interface MonacoEditorProps {
  value: string;
  language?: string;
  height?: string;
}

export default function MonacoEditorComponent({
  value,
  language = "javascript",
  height = "40vh",
}: MonacoEditorProps) {
  const [code, setCode] = useState(value);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <MonacoEditor
      height={height}
      theme="vs-dark"
      defaultLanguage={language}
      defaultValue={value}
      options={{ minimap: { enabled: false } }}
      onChange={handleEditorChange}
    />
  );
}
