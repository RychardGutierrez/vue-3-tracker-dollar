<template>
  <header class="sticky top-0 bg-white shadow-sm">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 text-black py-6 px-0">
      <RouterLink :to="routerHome">
        <div class="flex items-center gap-3">
          <img :src="iconDollar" alt="dollar" class="w-11" />
          <p class="text-2xl">Dollar Tracker</p>
        </div>
      </RouterLink>
      <div class="flex gap-5 flex-1 justify-end">
        <img v-if="isPreview" :src="iconSave" alt="Save Country" class="w-9 hover:shadow-xl duration-150 cursor-pointer"
          @click="saveLocalStore" />

        <img @click="toogleModal" :src="iconHelp" alt="Help"
          class="w-9 hover:shadow-xl rounded-full duration-150 cursor-pointer" />
      </div>
    </nav>
  </header>
  <HelpModal :modal-active="modalActive" @close-modal="toogleModal" />
</template>

<script setup>
import { RouterLink } from 'vue-router';

import iconDollar from '../../assets/dollar.svg';
import iconHelp from '../../assets/help.svg';
import iconSave from '../../assets/save.svg';
import HelpModal from '../../components/ui/HelpModal.vue';
import useNavigationBar from '../../composables/useNavigationBar';

const routerHome = { name: 'home' };

const { saveLocalStore, toogleModal, isPreview, modalActive } = useNavigationBar();

</script>
