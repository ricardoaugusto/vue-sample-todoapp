<template>
  <nav class="uk-navbar-container uk-margin-medium-bottom">
    <div class="uk-container">
      <div class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li>
              <router-link :to="{ name: 'inbox' }">Inbox</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'today' }">Today</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped></style>
