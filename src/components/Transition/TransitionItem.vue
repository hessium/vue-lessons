<template>
  <li class="words__item">
    <div class="words__original">
      {{props.item.word}}
    </div>
    <div class="words__translation" :class="hideTranslate ? 'hide' : ''">
      <p>
        {{props.item.translation}}
      </p>
      <button @click="onHideWord">
        Скрыть перевод
      </button>
      <button v-show="hideTranslate" class="words__show" @click="onShowWord">
        Показать перевод
      </button>
    </div>
  </li>
</template>

<script setup>
import { ref, watch} from "vue";

const model = defineModel();
const props = defineProps([
    'item',
    'middleHide'
]);
const emit = defineEmits([
    'onMiddleHide'
])
const hideTranslate = ref(true);

const onShowWord = () => {
  hideTranslate.value = false;
  emit('onMiddleHide')
}
const onHideWord = () => {
  hideTranslate.value = true;
  emit('onMiddleHide');
}

watch(
    () => props.middleHide,
    () => {
      if(props.middleHide === 'middle') {return}
      if(props.middleHide === 'hide') {
        hideTranslate.value = true
      } else {
        hideTranslate.value = false
      }
    }
)

</script>

<style scoped>

</style>