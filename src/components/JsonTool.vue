<template>
  <div class="jsonTool">
    <b-form-textarea class="content-left" :value="JSON.stringify(jsonData)" @input="setJson"/>
    <div class="content-right">
      <vue-json-pretty
        :showLine="true"
        :path="'res'"
        :data="jsonData"
        @click="handleClick">
      </vue-json-pretty>
    </div>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';

export default {
  name: 'JsonTool',
  components: {
    VueJsonPretty,
  },
  props: {
    msg: String,
  },
  methods: {
    setJson(input) {
      try {
        this.jsonData = JSON.parse(input);
      } catch (err) {
        console.log(err);
      }
    },
    handleClick() {
      // console.log('clicked');
      // console.log(item);
    },
  },
  data() {
    return {
      jsonData: {
        key: 'value',
      },
    };
  },
};
</script>

<style>
  .content-left {
    align-items: flex-start;
    position: fixed;
    float: left;
    margin-right: 10px;
    height:80%;
    width: 33%;
  }
  .content-right {
    float: right;
    width: 64%;
  }
</style>
