<template>
  <div class="header">
    <h1 class="header__title">Named galaxies</h1>
    <div class="header__searchform">
      <div v-if="!clickedInput" class="header__input__placeholder">
        <i>
          <img src="@/assets/svg/icon-search.svg">
        </i>
        <span class="placeholder">Search galaxies</span>
      </div>
      <input ref="input" v-model="searchString" class="header__input" type="text"/>
      
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {
  private searchString: string = '';

  @Watch('searchString')
  private onSearchChange(val: string) {
    this.$emit('search', val);
  }

  private get clickedInput() {
    // TODO: add hiding by click on input
    return this.searchString;
  }
}
</script>
<style lang="scss">
.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: inherit;
  margin-bottom: 24px;
  flex-direction: column;

  @include tablet {
    margin-bottom: 60px;
    flex-direction: row;
    align-items: center;
  }

  &__input__placeholder {
    position: absolute;
    padding-top: 10px;
    padding-left: 10px;
    pointer-events: none
  }

  &__input {
    width: 271px;
    height: 36px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px;
    font-size:20px;
  }

  .icon { 
    padding: 10px; 
    min-width: 40px; 
  }

  .placeholder {
    position: absolute;
    padding: 0 16px;
    width: 200px;
    color: #909597;
  }
}
</style>