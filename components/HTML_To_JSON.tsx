import Bold from '@tiptap/extension-bold'
// Option 2: Browser-only (lightweight)
// import { generateJSON } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
// Option 1: Browser + server-side
import { generateJSON } from '@tiptap/html'
import React, { useMemo } from 'react'
import Underline from '@tiptap/extension-underline' 
import Italic from '@tiptap/extension-italic' 

const html = '<p>Example <strong>Text</strong> to <u>understand</u> the text <i>formatting</i>.</p>'

export default function HtmlToJSON() {
  const output = useMemo(() => {
    return generateJSON(html, [
      Document,
      Paragraph,
      Text,
      Bold,
      Underline,
      Italic
    ])
  }, [])

  console.log("===output", output)

  return (
    <div>
      <div>{JSON.stringify(output, null, 2)}</div>
    </div>
  )
}