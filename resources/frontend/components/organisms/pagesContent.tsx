import "react-quill/dist/quill.snow.css"

import { LayoutComponents } from "@/components/atoms/layoutComponents"
import { useState } from "react"
import ReactQuill from "react-quill"
import { UserNav } from "../molecules/userNav"

export default function Pagescontent() {
  const [value, setValue] = useState("")

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      ["link", "image", "video", "formula"],

      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      //   [{ 'direction': 'rtl' }],                         // text direction

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ],
  }

  return (
    <LayoutComponents>
      <LayoutComponents.Header className='flex justify-between md:bg-white'>
        <div className='ml-auto'>Pages</div>
        <div className='ml-auto flex items-center space-x-4'>
          <UserNav />
        </div>
      </LayoutComponents.Header>
      <LayoutComponents.Body className='flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center'>
        <div className='w-full max-w-3xl'>
          <ReactQuill
            theme='snow'
            value={value}
            onChange={setValue}
            modules={modules}
            className='p-5'
          />
        </div>
      </LayoutComponents.Body>
    </LayoutComponents>
  )
}
