<template>
  <p class="uk-text-center">
    <button
      class="uk-button uk-button-default"
      :class="{ 'uk-button-primary': hasPrev }"
      :disabled="!hasPrev"
      @click="updatePagination('prev')"
    >
      Anterior
    </button>
    &nbsp;
    <button
      class="uk-button uk-button-default"
      :class="{ 'uk-button-primary': hasNext }"
      :disabled="!hasNext"
      @click="updatePagination('next')"
    >
      Próxima
    </button>
  </p>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalPages: Number,
    pageSize: Number,
    currentPage: Number
  },
  data() {
    return {
      currPage: 1
    };
  },
  methods: {
    updatePagination(direction) {
      if (direction === "next") {
        if (this.currentPage < this.totalPages) {
          this.currPage++;
        }
      } else {
        if (this.currPage > 1) {
          this.currPage--;
        }
      }

      this.$emit("updatedPagination", this.currPage);
    }
  },
  computed: {
    hasPrev() {
      return this.currentPage !== 1;
    },
    hasNext() {
      return this.currentPage !== this.totalPages;
    }
  },
  created() {
    this.currPage = this.currentPage;
  }
};
</script>

<style scoped></style>
