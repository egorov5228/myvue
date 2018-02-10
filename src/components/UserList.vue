<template>
    <div class="vue-app">
       <label for="showUsers" class="vue-app-panel">
          <h2>Список пользователей ({{ userList.length }})</h2>

          <div>
              <input type="checkbox" v-model="showUsers" id="showUsers" />
              <span for="showUsers">Показывать список</span>
          </div>
      </label>

      <ul v-show="showUsers">
          <template v-for="user in userList">
              <li v-if="user.avatar"class="vue-app-item">
                  <div>
                      <img :src="user.avatar" />
                  </div>
                  <div>
                      {{user.name}}<br>
                      {{user.middlename}}<br>
                      {{user.lastname}}
                  </div>
              </li>
              <li v-else class="vue-app-item vue-app-item-error">
                  <div>
                      {{user.name}} {{user.middlename}} {{user.lastname}}, загрузите плз авку
                  </div>
              </li>
          </template>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        showUsers: true,
        userList: [
            {
                name: 'Александр',
                middlename: 'Сергеевич',
                lastname: 'Пушкин',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Portrait_of_Alexander_Pushkin_%28Orest_Kiprensky%2C_1827%29.PNG/250px-Portrait_of_Alexander_Pushkin_%28Orest_Kiprensky%2C_1827%29.PNG'
            },
            {
                name: 'Михаил',
                middlename: 'Юрьевич',
                lastname: 'Лермонтов',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Mikhail_lermontov.jpg/267px-Mikhail_lermontov.jpg'
            },
            {
                name: 'Антон',
                middlename: 'Павлович',
                lastname: 'Чехов',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Anton_Chekhov_1889.jpg/267px-Anton_Chekhov_1889.jpg'
            },
            {
                name: 'Николай',
                middlename: 'Васильевич',
                lastname: 'Гоголь'
            },
            {
                name: 'Федор',
                middlename: 'Михайлович',
                lastname: 'Достоевский',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg/267px-Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg'
            },
            {
                name: 'Лев',
                middlename: 'Николаевич',
                lastname: 'Толстой',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Leo_Tolstoy%2C_portrait.jpg/267px-Leo_Tolstoy%2C_portrait.jpg'
            }
        ]
    }
  }
}
</script>
