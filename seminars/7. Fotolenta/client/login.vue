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
        <input type='text' class='form-control'placeholder='Логин'
          v-model='username'>
        <input type='password' class='form-control'placeholder='Пароль'
          v-model='password'>
        <button type='button' class='btn btn-primary btn-block' v-on:click='login'>
          Войти!
        <button type='button' class='btn btn-default btn-block' v-on:click='register'>
          Регистрация
        </button>
    </div>
</template>

<script>
    module.exports = {
      data: function() {
        return {
          username: '',
          password: ''
        };
      },
      methods: {
        login: function() {
          this.$auth.logIn(this.username, this.password)
            .then(function(respone) {
                this.$router.go('/feed');
            }).catch(function(response) {
                console.log(response);
            });
        }
      }
    };

</script>
