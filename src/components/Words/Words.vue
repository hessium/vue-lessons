<template>
  <div v-if="wordsStore.isLoading">
    loader
  </div>
  <div v-else>
    <swiper
        @swiper="onSwiperInstance"
        :mousewheel="false"
        :keyboard="false"
        :allowTouchMove="false"
        :navigation="true"
        class="words-swiper">
      <swiper-slide v-for="item of words"  :key="item.id">
        <div class="words-swiper__item">
          <h2>{{item.title}}</h2>
          <div class="buttons">
            <button @click="slideToIndex()">
              знаю
            </button>
            <button @click="addSlide(item)">
              не знаю
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import {onMounted, ref, watch} from "vue";
import {useWordsStore} from "@/stores/words";

const wordsStore = useWordsStore();
const words = ref([]);

const swiperRef = ref(null);
const clikedIndex = ref(null);


const onSwiperInstance = (v) => {
  swiperRef.value = v;
};

const slideToIndex = () => {
  swiperRef.value.slideNext();
}

wordsStore.getWords();
words.value = wordsStore.words;

onMounted( () => {
  wordsStore.getWords();
  words.value = wordsStore.words;
})

watch(
    () => wordsStore.words,
    () => words.value = wordsStore.words
)

const addSlide = (slide) => {
  clikedIndex.value = swiperRef.value.clickedIndex;
  let newSlides = words.value.filter(item => words.value.indexOf(item) !== clikedIndex.value);
  words.value = [...newSlides, {...slide}];
};



</script>
<style>
* {
  box-sizing: border-box;
}
.words-swiper {
  width: 50dvh;
  margin: 0 auto;
  padding: 2rem 0;
}

.swiper-slide {
  background-color: darkslategray;
  border-radius: 15px;
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50dvh;
}

.words-swiper__item {
  display: block;
  width: 100%;
  height: 100%;
}
</style>