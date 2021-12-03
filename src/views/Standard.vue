<template>
  <div class="standard">
    <h1>Standard Page</h1>
    <h4>Описание</h4>
    <p>
      На данной станице реализован рабочий код, используя стандартный способ.
    </p>
    <p>
      Этот код рабочий сделан для примера. Нужно сделать такой же функционал,
      только через Composition API
    </p>
    <div class="space100"></div>
    <p>Эта кнопка вызывает диалоговое окно выбора файлов</p>
    <FormAvatarStandard />
  </div>
</template>

<script>
import FormAvatarStandard from "../components/form-avatar-standard.vue";

export default {
  name: "Standard",
  components: { FormAvatarStandard },
};
</script>