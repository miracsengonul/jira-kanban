<template>
  <div class="menu-item menu-item-custom" :class="{'active': activeMenu}">
    <div class="menu-item-custom-bar">
      <div class="custom-menu">
        <div class="menu-item-icon">
          <slot />
        </div>
        <div class="menu-item-text" :class="{'menu-item-text-active': activeMenu}">
          {{ text }}
        </div>
      </div>
      <div v-if="badge"
           class="badge"
           :class="{'badge-active': activeMenu}">
        {{ badge }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    activeMenu: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    badge: {
      type: Number,
      default: null
    }
  }
};
</script>
<style lang="scss">
.menu-item-custom {
  max-width: 100%;
  &-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 8px 12px 6px;
  }
}
.custom-menu {
  display: flex;
  align-items: center;

  .menu-item-icon {
    display: flex;
  }

  .menu-item-text {
    margin: 0 0 0 8px;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: #667085;

    &-active {
      color: #1D2939;
    }
  }
}
.active {
  background: #f2f4f7;
}
.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 15px;
  color: #344054;
  background: #f2f4f7;
  border-radius: 6px;
  .menu-item:has(.menu-item:hover) {
    background: #000 !important;
  }

  &-active {
    color: #fff;
    font-weight: 500;
    background: #1D2939;
  }
}
</style>
