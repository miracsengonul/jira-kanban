<template>
  <div class="kanban">
    <div class="add-section-button-area">
      <add-button button-text="Add A New Section" @click.native="addNewSection" />
    </div>
    <div id="kanban-area" class="kanban-area">
      <kanban-card :key="cardKey" :pure-data="listData" />
    </div>
  </div>
</template>
<script>
import fakeData from '@/helpers/fake-data';
import AddButton from '@/components/atoms/AddButton.vue';
import KanbanCard from '@/components/molecules/KanbanCard.vue';
import EventBus from '@/helpers/event-bus';

export default {
  name: 'Kanban',
  components: { KanbanCard, AddButton },
  data() {
    return {
      listData: [],
      cardKey: 0
    };
  },
  async mounted() {
    const myPromise = new Promise((resolve) => {
      resolve(fakeData.data);
    });

    await myPromise.then((data) => {
      this.cardKey += 1;
      this.listData = data;
      let totalTaskCount = 0;

      data.forEach((datum) => {
        if (datum.tasks.length) {
          totalTaskCount += datum.tasks.length;
        }
      });

      EventBus.$emit('task-count', totalTaskCount);
    });

    EventBus.$on('new-list-data', (data) => {
      this.listData = data;
    });
  },
  methods: {
    addNewSection() {
      const lastTotalCount = this.listData.length + 1;
      this.listData.push({ id: lastTotalCount, section: `Test Section ${lastTotalCount}`, tasks: [] });
      this.cardKey += 1;
    }
  }
};
</script>
<style lang="scss">
  .kanban {
    background-color: #f2f4f7;
    min-height: calc(100vh);
    margin-left: 320px;
    max-width: 100%;

    .add-section-button-area {
      padding: 30px 0 0 80px;
    }
    &-area {
      white-space: nowrap;

      padding: 80px;
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
</style>
