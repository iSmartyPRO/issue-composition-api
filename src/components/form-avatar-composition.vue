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

    const dialogAvatar = ref({}) // объявил константу, которая ссылается на dialogAvatar, нужен ли он? либо надо как-то по другому его объявлять?

    const showFileChooser = () => {
      // dialogAvatar.click() // Этот вариант не работает, в консоли пишет > Uncaught TypeError: dialogAvatar.click is not a function
      // console.log(dialogAvatar.value) // в консоле пишет undefined

      // кто знает, как реализовать подобный механизм как в Standard? Прошу подедиться опытом.
    }

    const setImage = () => {
      alert('Something amazing haapened from composition API )')
    }

    return {
      showFileChooser,
      setImage
    }

  }

  // не надо использовать methods, только через setup()
}
</script>