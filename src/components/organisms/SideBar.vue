<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <div class="menu company-menu">
        <div class="menu-item company-item">
          <div class="menu-item-bar">
            <div class="square" />
            <div class="menu-item-bar-text">
              Company
            </div>
          </div>
          <svg class="dropdown-arrow"
               width="12"
               height="8"
               viewBox="0 0 12 8"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M0.881802 1.2817C1.05754 1.10597 1.34246 1.10597 1.5182 1.2817L5.46967 5.23318C5.76256 5.52607
                6.23744 5.52607 6.53033 5.23318L10.4818 1.2817C10.6575 1.10597 10.9425 1.10597 11.1182 1.2817C11.2939
                1.45744 11.2939 1.74236 11.1182 1.9181L6.3182 6.7181C6.14246 6.89384 5.85754 6.89384 5.6818 6.7181L0.881802
                1.9181C0.706066 1.74236 0.706066 1.45744 0.881802 1.2817Z"
                  fill="#98A2B3"
                  stroke="#98A2B3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <menu-item text="Tasks"
                 :badge="taskCount"
                 :active-menu="isActiveMenu('Kanban')">
        <svg width="18"
             height="18"
             viewBox="0 0 18 18"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3C1 1.89543 1.89543 1 3 1H5C6.10457 1 7 1.89543 7 3V5C7 6.10457 6.10457 7 5 7H3C1.89543 7 1 6.10457 1 5V3Z"
                stroke="#1D2939"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
          <path d="M11 3C11 1.89543 11.8954 1 13 1H15C16.1046 1 17 1.89543 17 3V5C17 6.10457 16.1046 7 15 7H13C11.8954 7 11 6.10457 11 5V3Z"
                stroke="#1D2939"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
          <path d="M1 13C1 11.8954 1.89543 11 3 11H5C6.10457 11 7 11.8954 7 13V15C7 16.1046 6.10457 17 5 17H3C1.89543 17 1 16.1046 1 15V13Z"
                stroke="#1D2939"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
          <path d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
                stroke="#1D2939"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
      </menu-item>
      <menu-item text="Notifications"
                 :badge="7"
                 :active-menu="isActiveMenu('Notifications')">
        <svg width="18"
             height="20"
             viewBox="0 0 18 20"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7
              1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19
              6 17.6569 6 16V15M12 15H6"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
      </menu-item>
      <menu-item text="Analytics"
                 :active-menu="isActiveMenu('Analytics')">
        <svg width="18"
             height="18"
             viewBox="0 0 18 18"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M13 5V13M9 8V13M5 11V13M3 17H15C16.1046 17 17 16.1046 17 15V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V15C1 16.1046 1.89543 17 3 17Z"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
      </menu-item>
      <menu-item text="Team"
                 :badge="2"
                 :active-menu="isActiveMenu('Team')">
        <svg width="16"
             height="20"
             viewBox="0 0 16 20"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5C12 7.20914 10.2091 9 8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
          <path d="M8 12C4.13401 12 1 15.134 1 19H15C15 15.134 11.866 12 8 12Z"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
      </menu-item>
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/molecules/MenuItem.vue';
import EventBus from '@/helpers/event-bus';

export default {
  name: 'SideBar',
  components: { MenuItem },
  data() {
    return {
      taskCount: 0
    };
  },
  mounted() {
    EventBus.$on('task-count', (count) => {
      this.taskCount = count;
    });
  },
  methods: {
    isActiveMenu(menuName) {
      return this.$route.name === menuName;
    }
  }
};
</script>

<style lang="scss">
.sidebar {
  left: 0;
  top:0;
  background: #fff;
  min-height: 100%;
  max-width: 320px;
  width: 320px;
  display: flex;
  flex-direction: column;
  position:fixed;

  &-content {
    padding: 16px 24px 16px;
  }

  .company-menu {
    padding: 16px 0;
  }
  .company-item {
    margin: 0 !important;
    padding: 0 10px;
    & > .dropdown-arrow {
      transition: 0.3s;
    }
    &:hover {
      background: #fff !important;
     & > .dropdown-arrow {
       transition: 0.3s;
       transform: rotate(90deg);
      }
    }
  }
  .menu {
    width: 100%;
    display: flex;

    &-item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 8px;
      transition: 0.3s;
      margin: 16px 0 0 0;

      &-text {
        letter-spacing: -0.03em;
      }

      &:hover {
        cursor: pointer;
        background: #f2f4f7;
        * > .badge {
          background: #fff;
          &-active {
            background: #000;
          }
        }
      }

      &-bar {
        display: flex;
        align-items: center;
        column-gap:8px;
        .square {
          width: 24px;
          height: 24px;
          background: #1d2939;
          border-radius: 4px;
        }
        &-text {
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: -0.03em;
          color: #1D2939;
        }
      }
    }
  }
}
</style>
