<template>
  <div class="table">
    <div class="table__header desktop">
      <div class="table__header__title" @click="toogleSort">
        Galaxy name
        <i class="table__header_sort" :class="['table__sort_button', {'revers': this.isToggled}]"></i>
      </div>
      <div class="table__header__title">
        Constellation
      </div>
      <div class="table__header__title">
        Origin of name
      </div>
    </div>
    <div class="table__body">
      <div class="row" v-for="galaxy in sortGalaxiesByName" :key="galaxy.id">
        <div class="row__name">
          <h3 class="mobile">Galaxy name</h3>
          <div class="name-content">
            <img class="name-content__img" :src="galaxy.img">
            <span class="name-content__name">{{ galaxy.name }}</span>
          </div>
        </div>
        <div class="row__constellation">
          <h3 class="mobile">Constellation</h3>
          <span>{{ galaxy.constellation }}</span>
        </div>
        <div class="row__origin-name">
          <h3 class="mobile">Origin of name</h3>
          <div>{{ galaxy.originOfName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Table extends Vue {
  @Prop({default: null}) private galaxies!: any[];
  
  private isToggled: boolean = true;

  private toogleSort() {
    this.isToggled = !this.isToggled;
  }

  private get sortGalaxiesByName() {
    return this.isToggled ? this.galaxies.sort((a, b) => a.name.localeCompare(b.name)) : this.galaxies.sort((a, b) => b.name.localeCompare(a.name));
  }
}
</script>

<style lang="scss">
.table {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    color: $textColorPrimary;
    font-size: 14px;
    @include tablet {
      font-size: 16px;
    }
  }

  h3 {
    font-weight: normal;
    font-size: 10px;
  }

  &__sort_button {
    width: 24px;
    height: 24px;
    background: url('~assets/svg/icon-arrow.svg') no-repeat;
    background-size: 9.6px;
    display: inline-block;
    background-position: center;
    cursor: pointer;
    &.revers {
        transform: rotate(180deg);
    }
  }

  &__header {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;


    &__title {
      text-align: left;
      &:first-child {
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        @include tablet {
          width: 272px;
        }
      }

      &:nth-child(2) {
        width: 100%;
        @include tablet {
          width: 202px;
        }
      }

      &:nth-child(3) {
        width: 100%;
        @include tablet {
            width: 542px;
        }
      }
    }
  }

  .mobile {
    margin-left: 15px;
  }

  &__body {
    display: flex;
    align-items: center;
    flex-direction: column;

    .row {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      width: 100%;
      @include tablet {
        margin-bottom: 0px;
        flex-direction: row;
      }

      &__name {
        border: 1px solid #E0E0E0;
        display:flex;
        align-items: flex-start;
        flex-direction: column;
        @include tablet {
          width: 270px;
          flex-direction: row;
          align-items: center;
        }
      }

      &__constellation {
        border: 1px solid #E0E0E0;
        display:flex;
        align-items: flex-start;
        flex-direction: column;
        span {
          margin-left: 15px;
          margin-right: 15px;
        }
        @include tablet {
          flex-direction: row;
          align-items: center;
          width: 200px;
        }
      }

      &__origin-name {
        text-align: left;
        flex-direction: column;
        align-items: flex-start;
        
        border: 1px solid #E0E0E0;
        div {
          margin: 15px;
        }
        @include tablet {
          flex-direction: row;
          align-items: center;
          width: 540px;
        }
      }

      span {
        margin-bottom: 15px;

        @include tablet {
          margin-bottom: 0px;
        }
      }
    }
  }

  .name-content {
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    @include tablet {
      margin-bottom: 0px;
    }

    &__img {
      width: 30px;
      height: 30px;
      margin-left: 20px;
      margin-right: 22px;
    }
  }
}
</style>