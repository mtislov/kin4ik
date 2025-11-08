<template>
  <MainLayout/>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HPLFC60KZW"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-HPLFC60KZW');
  </script>
</template>

<script lang="ts" setup>

import MainLayout from '@/layout/MainLayout.vue';

</script>
