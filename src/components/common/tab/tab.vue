<script>
import myNav from "./nav";
export default {
  data(){
    return {
       currentName: '',
       panes: []
    }
  },
  components: {myNav},
  mounted(){
    // this.pane = this.$slots.default
  },
  props: {

  },
  methods: {
    addPanes(item) {
      const index = this.$slots.default.indexOf(item.$vnode);
      this.panes.splice(index, 0, item);
    },
    removePanes(item) {
      const panes = this.panes;
      const index = panes.indexOf(item);
      if (index > -1) {
        panes.splice(index, 1);
      }
    }
  },
  render(){
    let {currentName , pane} = this
    const navData = {
      props: {currentName,pane},
      ref: 'nav'
    }
    const header = (
      <div class="navWrap">
        <myNav {...navData}></myNav>
      </div>
    );

    const panels = (
      <div class="paneWrap">
        {this.$slots.default}
      </div>
    )
    return (
      <div class="myTab">
        {header}
        {panels}
      </div>
    )
  }
}
</script>

<style>

</style>
