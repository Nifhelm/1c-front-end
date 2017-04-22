<style scoped>
    .container {
        width: 50%;
    }

    form {
        display: flex;
        justify-content: space-between;
    }
</style>

<template>
        <div class='container'>
            <form v-on:submit='upload'>
                <input type='file' accept='image/*' name='picture'>
                <button type='submit'>Загрузить!</button>
            </form>
        </div>
</template>

<script>
    module.exports = {
        methods: {
        upload: function(event) {
            event.preventDefault();
            var form = event.target;
            var formData = new FormData(form);
            this.$http.post('/upload', formData, { bearer: true })
                .then(function(response) {
                    console.log(response);
              })
        }
      }
    };
</script>
