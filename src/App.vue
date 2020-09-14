<template>
  <div class="app-content">
    <header class="header-content">
      <div class="columns">
        <div class="column is-12">
          <bue-nav-bar></bue-nav-bar>
        </div>
      </div>
    </header>

    <div class="main-content columns">
      <side-menu class="column is-2 is-overflow-auto"></side-menu>
      <div class="column is-10 is-overflow-auto">
        <router-view />
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
