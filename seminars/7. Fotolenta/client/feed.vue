<style scoped>
    .container {
        width: 50%;
    }

    form {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    }

    .photo {
        margin-bottom: 50px;
    }

    .photo img {
        width: 100%;
        height: 100%;
    }
</style>

<template>
    <div class='container'>
        <div>
            <form v-on:submit='upload'>
                <input type='file' accept='image/*' name='picture'>
                <button type='submit'>Загрузить!</button>
            </form>
        </div>
        <div v-for='photo in photos' class='photo panel panel-default'>
            <div class='panel-heading'>
                {{ photo.user }}
            </div>
            <div class='panel-body'>
                <img v-bind:src='photo.image'>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return { photos: [] };
        },
        ready: function() {
            var self = this;
            self.$http.get('/feed', { bearer: true })
                .then(function(response) {
                    response.json().then(function(photos) {
                        self.photos = photos;
                    });
                });
        },
        methods: {
            upload: function(event) {
                event.preventDefault();
                var form = event.target;
                var formData = new FormData(form);
                this.$http.post('/upload', formData, { bearer: true })
                    .then(function(response) {
                        location.reload();
                    })
            }
        }
    };
</script>
