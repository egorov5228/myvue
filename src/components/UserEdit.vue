<template>
    <div id="userEdit" class="vue-app">
        <h1 class="vue-app-title">{{ title }}</h1>

        <form method="get" action="">
            <div>
                <label>Имя:</label><br>
                <input class="vue-app-input" name="name" type="text" v-model="user.name" />
            </div>
            <div>
                <label>Отчество:</label><br>
                <input class="vue-app-input" name="middlename" type="text" v-model="user.middlename" />
            </div>
            <div>
                <label>Фамилия:</label><br>
                <input class="vue-app-input" name="lastname" type="text" v-model="user.lastname" />
            </div>
            <div>
                <input class="vue-app-input" type="submit" value="Сохранить" />
            </div>
        </form>

        <div class="vue-app-note">
            Будет сохранен пользователь {{user.name}} {{user.middlename}} {{user.lastname}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        title: 'Форма редактирования',
        user: {
            name: 'Александр',
            middlename: 'Сергеевич',
            lastname: 'Пушкин'
        }
    }
  }
}
</script>
