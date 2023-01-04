<template>
  <div class="add-content-button">
    <svg width="12"
         height="12"
         viewBox="0 0 12 12"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M6.75 0.75C6.75 0.335786 6.41421 0 6 0C5.58579 0 5.25 0.335786 5.25 0.75V5.25H0.75C0.335786 5.25 0 5.58579
            0 6C0 6.41421 0.335786 6.75 0.75 6.75L5.25 6.75V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75
            11.25V6.75L11.25 6.75C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25H6.75V0.75Z"
            fill="#0F172A" />
    </svg>

    {{ buttonText }}
  </div>
</template>

<script>
export default {
  name: 'AddButton',
  props: {
    buttonText: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.add-content-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 5px;
  background: #fff;
  font-weight: 600;
  padding: 10px;
  border: solid 1px #d8d8d8;
  width: max-content;
  border-radius: 5px;
  font-size: 13px;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.35);
  transition: 0.3s;
  &:hover {
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.65);
  }
  &:active {
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.05);
  }
}
</style>
