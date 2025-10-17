"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ value, onChange, placeholder }) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "blockquote", "code"],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["clean"],
      ],
    }),
    []
  );

  const formats = useMemo(
    () => [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "list",
      "bullet",
      "link",
      "blockquote",
      "code",
      "align",
      "color",
      "background",
    ],
    []
  );

  return (
    <div className="mil-rich-text-editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
      <style jsx global>{`
        .mil-rich-text-editor .ql-editor {
          min-height: 240px;
        }
        .mil-rich-text-editor .ql-toolbar button,
        .mil-rich-text-editor .ql-toolbar .ql-picker-label,
        .mil-rich-text-editor .ql-toolbar .ql-picker-item {
          cursor: pointer;
          pointer-events: auto;
        }
        .mil-rich-text-editor .ql-picker-options {
          cursor: pointer;
          pointer-events: auto;
        }
        .mil-rich-text-editor .ql-picker.ql-expanded {
          position: relative;
        }
        .mil-rich-text-editor .ql-picker.ql-expanded .ql-picker-options {
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
