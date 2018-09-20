<script>
import myNav from "./nav";
export default {
  data(){
    return {
       currentName: '0',
       panes: []
    }
  },
  components: {myNav},
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
    let {currentName , panes, activeLine} = this
    const navData = {
      props: {currentName,panes},
      ref: 'nav'
    }
    const navBarList = [] 
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
      <div class="myTab" ref="tabs">
        {header}
        {panels}
      </div>
    )
  },
  watch: {
    currentName(nv){
      this.$emit('afterChange', nv)
    }
  }
}
</script>

