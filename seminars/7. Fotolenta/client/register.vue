<style scoped>
    .container{
        margin: 10px auto;
        width: 50%;
    }

    .form-control {
      margin: 10px 0;
    }
</style>

<template>
    <div class='form-group container'>
        <input type='text' class='form-control'placeholder='Логин'>
        <input type='password' class='form-control'placeholder='Пароль'>
        <input type='text' class='form-control'placeholder='Повтор пароль'>
        <button type='button' class='btn btn-danger btn-block'>
          Register
        </button>
    </div>
</template>

<script>
    module.exports = {};
</script>
