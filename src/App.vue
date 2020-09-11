<template>
  <div class="app-content is-overflow-hidden vh-100">
    <header class="header-content">
      <div class="container bd-lead">
        <div class="columns">
          <div class="column is-12">
            <bue-nav-bar></bue-nav-bar>
          </div>
        </div>
      </div>
    </header>

    <div class="main-content columns">
      <side-menu class="column is-2 ml-5 is-overflow-auto"></side-menu>
      <div class="column is-10 is-overflow-auto px-0 py-0">
        <div class="container bd-lead">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ToastService } from '@/services/toast.service';
  export default {
    provide: {
      toastService: new ToastService(),
    },
  };
</script>
