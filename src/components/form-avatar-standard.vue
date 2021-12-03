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
export default {
  name: "FormAvatarStandard",

  methods: {
    showFileChooser () {
      this.$refs.dialogAvatar.click()
    },
    setImage() {
      alert('Something amazing happened here )')
    }
  }
}
</script>