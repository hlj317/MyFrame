<template>
  <ul>
    <li>{{todo.text}}</li>
  </ul>
</template>
<script>
export default {
  name: 'democomponent',
  props: ['todo'],
  data () {
    return {
    }
  },
  methods: {
      clickEvent : function(index){
          this.items.forEach(function(item){
             item.active = false;
          });
          this.items[index].active = true;
          this.$emit('clickEvent');
      }
  }
}
</script>

<style scoped>


</style>
