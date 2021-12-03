<template>
  <div class="standard">
    <button @click="showFileChooser">Нажми меня, для выбора файлов</button>
    <p>^<br>Тут ниже имеется скрытый input который вызывается<br />при нажатии на button раположенный выше<br> v </p>
    <input
        ref="dialogAvatar"
        type="file"
        accept="image/"
        @change="setImage"
        class="hidden"
      />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: "FormAvatarComposition",
  setup() {
    const dialogAvatar = ref()
    const showFileChooser = () => {
      console.log(dialogAvatar.value)
      dialogAvatar.value.click()
    }
    const setImage = () => {
      alert('Something amazing happened from composition API )')
    }
    return {
      dialogAvatar,
      showFileChooser,
      setImage
    }
  }

  // не надо использовать methods, только через setup()
}
</script>