//components
import Tiptap from "@/components/Tiptap"
import HtmlToJSON from "@/components/HTML_To_JSON"
import LexicalBasic from "@/components/Lexical_Plain"
import RichEditor from "@/components/Lexical_Rich"
//icons
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Root() {

  return (
    <div className="flex flex-col px-12 py-12 bg-gray-50">
      <div className="flex flex-col gap-y-4">
        <div className="text-xl font-semibold">TipTap</div>
        <Tiptap /> 
        {/* <HtmlToJSON /> */}
        {/* <div className="text-xl font-semibold">Lexical</div> */}
        {/* <LexicalBasic /> */}
        {/* <RichEditor /> */}
      </div>
    </div>
  )
}
