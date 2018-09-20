
<script>
export default {
  data(){
    return {
      navList: [],
      index: null
    }
  },
  props:{
    panes: Array,
    currentName: String
  },
  computed: {
    lineStyle: {
      cache: false,
      get() {
        let style = {}
        try {
          style = {
            left: (this.$el.children[this.index].children[0].offsetLeft) + 'px' ,
            width: (this.$el.children[this.index].children[0].offsetWidth) + 'px'
            }
        } catch (error) {
          style = {}
        }
        return style
      }
    }
  },
  render(h){
    const {panes, currentName, lineStyle} = this
    const tabs = this._l(panes, (pane, index) => {
      let { name , label, active } = pane
      let currentName = this.currentName
      if(this.currentName == index){
        this.index = index
      }
      if(name === this.currentName){
        this.index = index
      }
      pane.index = `${index}`
      // this.$parent.setActiveLine()
      return ( <div class={['navBar', currentName === `${index}` ? 'active' : '']} on-click={()=>{this.$parent.currentName = name}}><span>{label}</span></div>)
    })
    return (<div class="nav" ref="nav">{tabs} <div class="activeLine" style={lineStyle}></div></div>)
  }
}
</script>

<style lang="less" scoped>
  .nav{
    display: flex;
  }
</style>
