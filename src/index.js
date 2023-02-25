import {
    Extension,
    mergeAttributes,
} from "@tiptap/core";
import './style.css';



export default Extension.create({
    name: "formula",
    addAttributes() {
        return {
            class: {
                default: 'formula'
            },
            'data-type':{
                default: 'formula'
            }
        }
    },
    parseHTML() {
        return [
            {
                tag: 'span',
                getAttrs: element => {
                    return element.getAttribute('data-type') === 'formula';
                },
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return [
            "span",
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
            0,
        ];
    },

    addCommands() {
        return {
            setDot: () => ({ commands }) => {
                return commands.setMark(this.name);
            },
            toggleDot: () => ({ commands }) => {
                return commands.toggleMark(this.name);
            },
            unsetDot: () => ({ commands }) => {
                return commands.unsetMark(this.name);
            },
        };
    }
});