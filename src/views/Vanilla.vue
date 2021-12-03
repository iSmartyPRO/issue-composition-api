<template>
  <h1>Vanilla JS Page</h1>
  <h4>Описание</h4>
  <p>На данной станице реализован рабочий код, используя Vanilla JS.</p>
  <p>
    Этот код рабочий. Нужно сделать такой же функционал,
    только через Composition API
  </p>

  <div class="space100"></div>
  <p>Эта кнопка вызывает диалоговое окно выбора файлов</p>
  <FormAvatarVanilla />
</template>

<script>
import FormAvatarVanilla from "../components/form-avatar-vanilla.vue";

export default {
  name: "VanillaJS",
  components: { FormAvatarVanilla },
};
</script>