<template>
  <div>
    <math-field @input="onInput">{{math}}</math-field>
    <button @click="onAddText">Добавить</button>
    <editor-content :editor="editor" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import {Mathematics} from "@tiptap-pro/extension-mathematics";
import {ref} from "vue";
import 'mathlive';
import 'katex/dist/katex.min.css'


const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [StarterKit, Mathematics],
})
const math = ref('');

const onInput = (e) => {
  math.value = e.target.value
}
const onAddText = () => {
  editor.value.chain().focus().insertContent(`$\\\\${math.value}$`).run()
}

</script>

<style>

</style>