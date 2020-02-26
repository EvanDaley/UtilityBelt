<template>
  <div class="about">
    <json-viewer :value="jsonData"></json-viewer>
    <hr />

    <json-viewer
      :value="jsonData"
      :expand-depth=5
      copyable
      boxed
      sort/>
  </div>
</template>

<script>
export default {
  name: 'JsonTool',
  props: {
    msg: String,
  },
  data() {
    return {
      jsonData: {
        key: 'val1',
      },
    };
  },
};
</script>
