<template>

  <Toast v-if="false" :msg="topMsg"/>

  <MoviesCategory v-bind="$attrs" :filters="true"/>
</template>

<script lang="ts" setup>
import MoviesCategory from '@/components/movie/Movie-category.vue';
import { Api } from '@/use/Api';
import { provide } from 'vue';
import Toast from '@/components/Toast.vue';

const topMsg = 'В настоящее время у API популряных фильмов имеются проблемы. '
  + 'В сввзяи с этим время загрузки фильмов может достигать 40 сек.';

provide('category', Api.movies.popular);
</script>
