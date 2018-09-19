@<template>
  <div class="tabPane" v-if="active"><slot></slot></div>
</template>

<script>
export default {
  name: 'tabPane',
  data(){
    return {}
  },
  props: {
    name: String,
    label: String
  },
  computed: {
    active() {
      const active = this.$parent.currentName === this.name;
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
  }
}
</script>

<style>

</style>
