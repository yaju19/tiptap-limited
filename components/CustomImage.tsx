import { Node } from '@tiptap/core'

export interface IImageOptions {
  HTMLAttributes: {
    [key: string]: any
  },
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    customImage: {
      /**
       * Add an image
       */
      setCustomImage: (options: { src: string, width: string, height: string }) => ReturnType,
    }
  }
}

export default Node.create<IImageOptions>({
  name: 'image',

  group: 'block',

  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {
        class: 'image-wrapper',
      },
    }
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      width: {
        default: null,
      },
      height: {
        default: null,
      },
    }
  },

  parseHTML() {
    return [{
      tag: 'image',
    }]
  },
  renderHTML({ HTMLAttributes }) {
    return ['div', this.options.HTMLAttributes, ['image', HTMLAttributes]]
  },
  addCommands() {
    return {
      setCustomImage: (options: { src: string, width: string, height: string }) => ({ tr, dispatch }) => {
        const { selection } = tr
        const node = this.type.create(options)
        if (dispatch) {
          tr.replaceRangeWith(selection.from, selection.to, node)
        }
        return true
      },
    }
  },
})


