<template>
  <div class="standard">
    <button @click="showFileChooser">Нажми меня, для выбора файлов</button>
    <p>^<br>Тут ниже имеется скрытый input который вызывается<br />при нажатии на button раположенный выше<br> v </p>
    <input
        id="dialogAvatar"
        type="file"
        accept="image/"
        @change="setImage"
        class="hidden"
      />
  </div>
</template>

<script>
export default {
  name: "FormAvatarVanilla",
  setup() {
    const showFileChooser = () => {
      // один из вариантов предложенный Георгием, благодарю его за совет
      // вот только можно ли тоже самое сделать средствами Composition API - что для этого надо?
      const dialogAvatar = document.getElementById('dialogAvatar')
      dialogAvatar.click()
    }

    const setImage = () => {
      alert('Something amazing haapened from Vanilla JS )')
    }

    return {
      showFileChooser,
      setImage
    }

  }

  // не надо использовать methods, только через setup()
}
</script>