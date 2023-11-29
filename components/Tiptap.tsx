import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { EditorState } from '@tiptap/pm/state'
import Underline from '@tiptap/extension-underline' 
import Italic from '@tiptap/extension-italic' 
import Dropcursor from '@tiptap/extension-dropcursor'
import TipTapToolbar from './TiptapToolbar'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import ResizableImageExtension from "./ImgaeResize"
import CustomImage from "./CustomImage"
import Iframe from "./Iframe"

//react
import React from "react"

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Italic,
      CustomImage,
      Dropcursor,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      ResizableImageExtension,
      Iframe
    ],
    content: '<p>Example <strong>Text</strong> to <u>understand</u> the text <i>formatting</i>.',
  })

  const applyFormat = (format: string) => {
    if(format==="underline"){
      console.log("====format", format, editor)
      editor?.chain().focus().toggleUnderline().run();
    }
    else if(format === "italic"){
      editor?.chain().focus().toggleItalic().run()
    }
    else if(format === "bold"){
      editor?.chain().focus().toggleBold().run()
    }
  };

  const addImage = () => {
    const url = prompt('Enter the URL of the image:');
    const width = prompt('Enter the width of the image:') || '600'
    if (url) {
      editor?.chain().focus().setCustomImage({ src: url, width: width,
      height: `${(Number(width))*0.75}`, }).run();

    }
  };
  const addTable=()=>{
    editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
  }
  const removeTable=()=>{
    editor?.chain().focus().deleteTable().run()
  }
  const addIframe=()=> {
    const url = window.prompt('URL')
    const width = prompt('Width:') || '600'

    if (url) {
      editor?.chain().focus().setIframe({ src: url, width:width, height: width }).run()
    }
  }

  React.useEffect(()=>{
    if(!editor) return
    // editor.commands.setImage({ src: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg' , alt: 'A boring example image', title: 'An example' })
    // editor.commands.setImage({ src: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' , alt: 'A boring example image', title: 'An example' })
  },[editor])

  // console.log("=====EditorState HTML", editor?.getHTML())
  // console.log("=====EditorState JSON", editor?.getJSON())

  return (
    <div className="border-2 border-solid border-gray-300 rounded-md p-4">
    <TipTapToolbar applyFormat={applyFormat}  addImage={addImage} addTable={addTable} removeTable={removeTable} addIframe={addIframe}/>
    <EditorContent className="" editor={editor} />
    </div>

  )
}

export default Tiptap