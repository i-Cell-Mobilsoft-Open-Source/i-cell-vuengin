<template>
  <div class="button-content">
    <button @click="onClick">getUser</button>
  </div>
</template>
<script>
  // import * as httpService from '../services/http.service';
  import { inject } from '@vue/composition-api';

  export default {
    setup() {
      // const service = inject(['http']);
      const onClick = () => {
        // service.getUsers().then((res) => {});
        // console.log('service', service);
        // console.log('loadUser', );
        // this.getUserAccount().then(
        //   (res) => {
        //     console.log('OK', res);
        //   }
        // )
      };
      // const service = inject(['name']);
      return { onClick };
    },
  };
</script>
