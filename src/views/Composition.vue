<template>
  <h1>Composition API Page</h1>
  <h4>Описание</h4>
  <p>На данной станице реализован рабочий код, используя Composition API.</p>
  <p>
    Этот код к сожалению не рабочий, в разделе скрипты имеются коментарии. Нужно сделать такой же функционал,
    только через Composition API
  </p>

  <div class="space100"></div>
  <p>Эта кнопка вызывает диалоговое окно выбора файлов</p>
  <FormAvatarComposition />
</template>

<script>
import FormAvatarComposition from "../components/form-avatar-composition.vue";

export default {
  name: "Composition",
  components: { FormAvatarComposition },
};
</script>