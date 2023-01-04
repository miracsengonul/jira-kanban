<template>
  <div :key="updateKey"
       class="kanban-cards">
    <draggable
      v-model="groupedData"
      tag="div"
      class="kanban-cards"
      @change="dragged">
      <div v-for="(section, key) in groupedData"
           :key="`section-${key}`"
           class="section-cards">
        <div v-if="isEditableSectionTitle && sectionToBeEdited.id === section.id">
          <input id="editableInput"
                 v-model="newSectionTitle"
                 v-click-outside="outsideEditInput"
                 class="editable-section-title-input"
                 type="text"
                 autocomplete="off"
                 placeholder="Section Title"
                 @keyup.enter="saveNewSectionText"
                 @keyup.esc="outsideEditInput">
        </div>
        <div v-else
             class="section-head">
          <div class="section-title" @dblclick="editSectionTitle(section)">
            {{ section.section }}
          </div>
          <div class="section-add-task">
            <add-button fill-color="#667085" @click.native="addNewTask(section.id)" />
          </div>
        </div>

        <draggable
          class="draggable-section"
          :list="section.tasks"
          :group="{ name: 'section' }"
          @change="dragged">
          <div
            v-for="list in section.tasks"
            :key="`tasks-${list.title}-${list.id}-${randomNumber()}`">
            <div class="section-card-content">
              <div class="section-card-content-title">
                {{ list.title }}
              </div>
              <div class="publish-information">
                <div class="publish-date">
                  {{ list.date }}
                </div>
                <div class="publish-circle-separator">
                  <svg width="4"
                       height="5"
                       viewBox="0 0 4 5"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2"
                            cy="2.5"
                            r="2"
                            fill="#C4C4C4" />
                  </svg>
                </div>
                <div class="publish-created-user">
                  Created by <span>{{ list.creator }}</span>
                </div>
              </div>
              <div v-if="list.description" class="task-description">
                {{ list.description }}
              </div>
              <div v-if="list.image" class="task-image">
                <img :src="list.image" alt="">
              </div>
              <div v-if="list.link || list.attach" class="task-other-information">
                <div v-if="list.link" class="task-link">
                  <svg width="16"
                       height="16"
                       viewBox="0 0 16 16"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.37132 6.62868C8.19975 5.45711 6.30025 5.45711 5.12868 6.62868L2.12868 9.62868C0.957107 10.8003 0.957107 12.6997 2.12868
                            13.8713C3.30025 15.0429 5.19975 15.0429 6.37132 13.8713L7.19749 13.0451M6.62868 9.37132C7.80025 10.5429 9.69975 10.5429 10.8713 9.37132L13.8713 6.37132C15.0429
                            5.19975 15.0429 3.30025 13.8713 2.12868C12.6997 0.957107 10.8003 0.957107 9.62868 2.12868L8.80397 2.95339"
                          stroke="#98A2B3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round" />
                  </svg>
                  <div class="link">
                    {{ list.link }}
                  </div>
                </div>
                <div v-for="(attach, attachIndex) in list.attach"
                     :key="`attach-${attachIndex}`"
                     class="task-attach">
                  <img src="@/assets/icons/attach.webp">
                  <div class="attach">
                    {{ attach.title }}
                  </div>
                </div>
              </div>
              <div v-if="list.tags" class="tags">
                <div v-for="tag in list.tags"
                     :key="`tag-${tag.id}`"
                     :class="[tag.color ? `color-${tag.color} bg-${tag.color}` : '']"
                     class="tag">
                  {{ tag.title }}
                </div>
              </div>
              <div v-if="list.comments" class="comments">
                <div class="comment">
                  <svg width="20"
                       height="18"
                       viewBox="0 0 20 18"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9H6.01M10 9H10.01M14 9H14.01M19 9C19 13.4183 14.9706 17 10 17C8.46073 17 7.01172 16.6565 5.74467 16.0511L1 17L2.39499 13.28C1.51156 12.0423 1
                        10.5743 1 9C1 4.58172 5.02944 1 10 1C14.9706 1 19 4.58172 19 9Z"
                          stroke="#98A2B3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round" />
                  </svg>
                  <div>
                    {{ list.comments.total }}
                  </div>
                </div>
                <div v-if="list.comments && list.comments.userImages.length" class="comment-users">
                  <div v-for="userImage in list.comments.userImages" :key="`user-image-${userImage}`">
                    <img :src="userImage" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </draggable>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import ClickOutside from 'vue-click-outside';
import AddButton from '@/components/atoms/AddButton.vue';
import EventBus from '@/helpers/event-bus';

export default {
  name: 'KanbanCard',
  components: {
    AddButton,
    draggable
  },
  directives: {
    ClickOutside
  },
  props: {
    pureData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      updateKey: 0,
      groupedData: null,
      isEditableSectionTitle: false,
      sectionToBeEdited: {},
      newSectionTitle: ''
    };
  },
  mounted() {
    this.groupedData = this.pureData;
  },
  updated() {
    this.randomNumber();
    document.getElementsByClassName('add-section-button-area')[0].addEventListener('click', () => {
      document.getElementById('kanban-area').scrollLeft += document.getElementById('kanban-area').scrollWidth;
    });
  },
  methods: {
    randomNumber() {
      return Math.floor(Math.random() * 10);
    },
    dragged() {
      this.updateKey += 1;
      EventBus.$emit('new-list-data', this.groupedData);
    },
    editSectionTitle(section) {
      this.newSectionTitle = section.section;
      this.isEditableSectionTitle = true;
      this.sectionToBeEdited = { title: section.section, id: section.id };
      setTimeout(() => {
        document.getElementById('editableInput').focus();
      }, 20);
    },
    outsideEditInput(event) {
      if (event.key !== 'Escape') {
        this.saveNewSectionText();
      }
      this.sectionToBeEdited = {};
      this.isEditableSectionTitle = false;
      this.updateKey += 1;
    },
    saveNewSectionText() {
      const getGroupDataIndex = this.groupedData.findIndex((groupDatum) => groupDatum.id === this.sectionToBeEdited.id);
      if (this.newSectionTitle) {
        this.groupedData[getGroupDataIndex].section = this.newSectionTitle;
      }
      this.isEditableSectionTitle = false;
      this.newSectionTitle = '';
    },
    addNewTask(sectionId) {
      const getGroupDataIndex = this.groupedData.findIndex((groupDatum) => groupDatum.id === sectionId);
      const lastTotalCount = this.groupedData[getGroupDataIndex].tasks.length + 1;

      this.groupedData[getGroupDataIndex].tasks.push({
        id: lastTotalCount,
        title: `eQuota ${lastTotalCount}(${this.randomNumber()}) in ${this.groupedData[getGroupDataIndex].section}`,
        date: '05th Jan',
        creator: 'Mirac'
      });

      let totalTaskCount = 0;

      this.groupedData.forEach((datum) => {
        if (datum.tasks.length) {
          totalTaskCount += datum.tasks.length;
        }
      });

      EventBus.$emit('task-count', totalTaskCount);
    }
  }
};
</script>
<style lang="scss">
.kanban-cards {
  display: flex;
  column-gap: 36px;
  user-select: none;
  min-height: calc(100vh - 26.5vh);
  max-height: calc(100vh - 26.5vh);

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    scrollbar-gutter: stable both-edges;
    background: rgba(136, 136, 136, 0.51);
    border-radius: 15px;
    width: 5px;
    height: 10px;
    max-height: 10%;
  }

  .draggable-section {
    min-width: inherit;
    min-height: 90%;
  }
  .section-cards {
    overflow: hidden;
    cursor: move;
    min-width: 320px;
    max-width: 320px;
    padding: 0 0 10px 0;
    &:last-of-type {
      padding: 0 80px 10px 0;
    }
    &:hover {
      overflow-y: auto;
    }

    .editable-section-title-input {
      border: none;
      padding: 5px 0 5px 15px;
      border-radius: 5px;
      width: fit-content;
      font-size: 15px;
      font-family: 'Karla', sans-serif;
      font-weight: 400;
      &:focus {
        outline: none;
      }
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      color: #667085;
      margin: 0 0 8px 0;
      min-width: inherit;
      width: 100%;
      .section-title {
        width: fit-content;
        &:hover {
          cursor: text;
        }
      }
      .section-add-task {
        transform: scale(0.9);
      }
    }

    .section-card-content {
      cursor: move;
      box-shadow: 0 0.5px 2px rgba(16, 24, 40, 0.3);
      border-radius: 8px;
      margin: 24px 0 0 0;
      background: #fcfcfd;
      padding: 20px;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: -0.02em;
      color: #98A2B3;
      &-title {
        cursor: pointer;
        font-weight: 700;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: #1D2939;
      }

      .publish-information {
        margin: 6px 0 0 0;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: #98A2B3;
        gap:10px;

        .publish-created-user > span {
          color:#667085;
        }

        .publish-circle-separator {
          display: flex;
        }
      }

      .task-description {
        margin: 16px 0 12px 0;
        line-height: 150%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: fit-content;
      }

      .task-image, img {
        object-fit: cover;
        width: 280px;
        height: 80px;
        background:#E4E7EC;
        border-radius: 8px;
      }

      .task-other-information {
        margin: 16px 0 0 0;
        display: flex;
        align-items: center;
        gap: 16px;
        .task-link {
          display: flex;
          gap:6px;

          .link {
            cursor: pointer;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            max-width: fit-content;
            width: 95px;
            transition: 0.3s;
            &:hover {
              color: #333;
            }
          }
        }
        .task-attach {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 9px;
          transition: 0.3s;
          &:hover {
            color: #333;
          }
          img {
            background: transparent;
            width: 12.6px;
            height: 14.4px;
          }
        }
      }
      .tags {
        display: flex;
        margin: 16px 0 0 0;
        gap:8px;

        .tag {
          cursor: pointer;
          display: flex;
          padding: 6px 12px;
          gap: 12px;
          border-radius: 6px;
          transition: 0.3s;
          &:hover {
            opacity: 0.5;
          }
        }
      }
      .comments {
        margin: 16px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .comment {
          display: flex;
          align-items: center;
          gap: 11px;
          transition: 0.3s;
          &:hover {
            cursor: pointer;
            color: #333;
          }
        }
        .comment-users {
          display: flex;
          align-items: center;
          gap:4px;
          img {
            object-fit: cover;
            border-radius: 100%;
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
}
</style>
