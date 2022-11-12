<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index.vue";
import Brand from "./Brand/index.vue";
import Floor from "./Floor/index.vue";
import Like from "./Like/index.vue";
import Rank from "./Rank/index.vue";
import Recommend from './Recommend/index.vue';
export default {
  components: { ListContainer, Brand, Floor, Like, Recommend, Rank },
};
</script>

<style>

</style>