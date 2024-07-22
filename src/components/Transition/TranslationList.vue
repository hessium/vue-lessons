<template>
  <div class="words">
    <div class="words__header">
      <h1>Список слов</h1>
      <button class="words__show--all" @click="onShowWordAll">
        Показать все
      </button>
      <button class="words__hide--all" @click="onHideWordAll">
        Скрыть все
      </button>
    </div>
    <ul>
      <TransitionItem v-for="item in words"
                v-model="hideTranslate"
                @onMiddleHide="onMiddleHide"
                :key="item.id"
                :middleHide="newHide"
                :item="item"/>
    </ul>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import TransitionItem from "@/components/Transition/TransitionItem.vue";

const words = ref([
  {
    word: 'hello',
    translation : 'привет',
    id: 1,
  },
  {
    word: 'hello',
    translation : 'привет',
    id: 2,
  },
  {
    word: 'hello',
    translation : 'привет',
    id: 3,
  },
  {
    word: 'hello',
    translation : 'привет',
    id: 4,
  },
  {
    word: 'hello',
    translation : 'привет',
    id: 5,
  },
]);

const hideTranslate = ref(true);
const newHide = ref('hide');
const onShowWordAll = () =>  {
  hideTranslate.value = false;
  newHide.value = 'show';
}
const onHideWordAll = () =>  {
  hideTranslate.value = true;
  newHide.value = 'hide';
}
const onMiddleHide = () => {
  newHide.value = 'middle';
}

watch(
    () => newHide.value,
    () => {
      console.log(newHide.value)
    }
)

</script>

<style  lang="scss">
button {
  cursor: pointer;
}
.words {
  &__header {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  &__item {
    display: flex;
    gap: 40px;
    padding-bottom: 10px;
  }
  &__original {
    width: 20%;
    padding: 10px;
  }
  &__translation {
    flex-grow: 1;
    padding: 10px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.hide {
      &:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        backdrop-filter: blur(5px);
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      &:hover {
        & .words__show {
          opacity: 1;
        }
      }
    }
  }
  &__show {
    position: absolute;
    opacity: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: red;
  }
}
</style>