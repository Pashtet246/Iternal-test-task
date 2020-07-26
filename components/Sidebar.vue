<template>
  <div class="sidebar">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Sidebar extends Vue {

}
</script>

<style lang="scss">
.sidebar {
  background: #F9FAFB;
  height: 70px;
  width: 100%;
  @include tablet {
    min-height: 100vh;
    height: auto;
    width: 270px;
  }
}
</style>