@<template>
  <div class="tabPane" v-if="active" :id="`pane-${index}`"><slot></slot></div>
</template>

<script>
export default {
  name: 'tabPane',
  data(){
    return {
      index: null,
    }
  },
  props: {
    name: String,
    label: String
  },
  computed: {
    active() {
      const active = this.$parent.currentName === this.name || this.$parent.currentName === this.index;
      return active;
    },
  },
  mounted() {
    this.$parent.addPanes(this);
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$parent.removePanes(this);
  },
  watch: {
    label:{
      handler(){
        // this.$parent.$forceUpdate();
      }
    }
  }
}
</script>

<style>

</style>
