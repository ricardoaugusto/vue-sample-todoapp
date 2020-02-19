<template>
  <div class="uk-container">
    <div v-if="loading">
      <h1 class="uk-heading-primary">Aguarde&hellip;</h1>
      <progress
        id="js-progressbar"
        class="uk-progress"
        max="100"
        value="0"
      ></progress>
    </div>
    <div v-else class="uk-animation-fade">
      <h1 class="uk-heading-primary uk-heading-divider">
        {{ todos.length }} tarefas
        <small class="uk-text-lighter"
          >Página {{ currentPage }} de {{ totalPages }}</small
        >
      </h1>
      <TodosList :todos="pagedTodos" />
      <Pagination
        :pageSize="pageSize"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @updatedPagination="setPagedTodos"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ls from "../helpers/localstorage";
import TodosList from "../components/TodosList";
import Pagination from "../components/Pagination";

export default {
  name: "InboxView",
  components: {
    TodosList,
    Pagination
  },
  data() {
    return {
      loading: true,
      todos: [],
      pagedTodos: [],
      pageSize: 10,
      currentPage: this.currentPageOrNaN(),
      totalPages: 1
    };
  },
  props: {},
  computed: {},
  created() {
    this.getTodos();
  },
  methods: {
    /**
     * Try to get todos from LocalStorage
     * send a GET request if LS empty
     */
    getTodos() {
      const todos = ls.get("todos");

      if (typeof todos === "string") {
        this.todos = JSON.parse(todos);
        this.updateTodosListComponent(Object.keys(this.todos).length);
      } else {
        axios
          .get("https://jsonplaceholder.typicode.com/todos?_limit=75")
          .then(({ data: response }) => {
            this.todos = response;
            this.updateTodosListComponent(response.length);
            this.setTodosLocalStorage(this.todos);
          })
          .catch(err => console.error(err));
      }
    },
    updateTodosListComponent(length) {
      this.totalPages = Math.ceil(length / this.pageSize);
      this.checkCurrentPageExists();
      this.setPagedTodos(this.currentPage);
    },
    /**
     * Updates pagination, animates the loading bar
     */
    async setPagedTodos(page) {
      if (this.$route.params.currentPage !== page) {
        this.$router
          .push({ name: "inbox", params: { currentPage: page } })
          .catch(() => {});
      }

      page--;
      const start = page * this.pageSize;
      this.pagedTodos = this.todos.slice(start, start + this.pageSize);
      this.currentPage = 1 + page;
      if (this.loading) {
        await this.animateProgressBar();
      }
      this.loading = false;
    },
    /**
     * Redirects if currentPage does not exists
     */
    checkCurrentPageExists() {
      if (this.currentPage > this.totalPages) {
        window.location.href = "/";
      }
    },
    setTodosLocalStorage(todos) {
      ls.set("todos", JSON.stringify(todos));
    },
    /**
     * Detects if the currentPage url param is set
     * and forces it to be 1 or currentPage
     *
     * @returns {number}
     */
    currentPageOrNaN() {
      const currentPage = Number(this.$route.params.currentPage);
      return isNaN(currentPage) || currentPage === 0 ? 1 : currentPage;
    },
    /**
     * Animates the UIKit progressbar
     *
     * @returns {Promise<unknown>}
     */
    animateProgressBar() {
      return new Promise((resolve, reject) => {
        this.uikit.util.ready(function() {
          let bar = document.getElementById("js-progressbar");
          console.log(typeof bar, bar);

          if (bar !== null) {
            let animate = setInterval(function() {
              bar.value += 5;
              if (bar.value >= bar.max) {
                clearInterval(animate);
                resolve();
              }
            }, 20);
          } else {
            reject();
          }
        });
      });
    }
  }
};
</script>

<style lang="scss"></style>
