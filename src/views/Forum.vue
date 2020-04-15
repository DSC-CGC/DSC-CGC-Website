<template>
  <div id="app">
    <div id="editor" ref="editor">Loading, DSC CGC Forum.</div>
    <div
      id="iframe-wrapper"
      :style="iframe.wrapperStyle"
    >
      <iframe
        v-if="loaded"
        :src="iframe.src"
        :style="iframe.style"
        :height="iframe.style.height"
        :width="iframe.style.width"
        type="application/pdf"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loaded: false,
      iframe: {
        src: "https://forum.dsccgc.in/",
        style: null,
        wrapperStyle: null,
      }
    }
  },
  mounted() {
    let editor = this.$refs.editor;
    this.iframe.style = {
      position: 'absolute',
      width: window.innerWidth,
      height: window.innerHeight,
      top: -editor.offsetTop + "px",
      left: -editor.offsetLeft + "px",
    }
    this.iframe.wrapperStyle = {
      overflow: 'hidden',
      height: editor.clientHeight + "px",
      width: editor.clientWidth + "px",
    }
    this.loaded = true;
  }
}
</script>