<template>
  <section class="app">
    <Sidebar/>
    <div class="main-content">
      <Header @search="filterGalaxies"/>
      <Table :galaxies="filteredGalaxies"/>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Header from '@/components/Header.vue';
import Table from '@/components/Table.vue';
import Sidebar from '@/components/Sidebar.vue';
import axios from 'axios';

@Component({
  components: {
    Header,
    Table,
    Sidebar,
  }
})
export default class Main extends Vue {
  public galaxies: any[] = [];
  private search: string = '';

  public async getGalaxies() {
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://test-frontend-api.herokuapp.com/galaxies');
    this.galaxies = response.data;
  }

  private async mounted() {
    await this.getGalaxies();
  }

  private get filteredGalaxies() {
    return this.search ? this.galaxies.filter((item: any) => {
      return item.name.toLowerCase().includes(this.search.toLowerCase());
    }) : this.galaxies;
  }

  private filterGalaxies(value: string) {
    this.search = value;
  }
}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;

  @include tablet {
    flex-direction: row;
  }
  

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px;
    @include tablet {
      max-width: 1007px;
      margin: 60px 70px;
    }
  }
}
</style>

