<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "editor",
  data() {
    return {
      editorContent: "",
      editor: ""
    };
  },
  props: ["editorDataMes"],
  methods: {},

  mounted() {
    this.editor = new E(this.$refs.editor);
    this.editor.customConfig.onchange = html => {
      this.editorContent = html;
      this.$emit("editorDatas", html);
    };
    this.editor.create();
  },
  watch: {
    editorDataMes: function(val) {
      this.editor.txt.html(val);
    }
  }
};
</script>

<style scoped>
</style>