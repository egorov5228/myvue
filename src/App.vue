<template>
  <div id="app">
    <header>
        <ul>
            <li>
                <router-link to="/">
                    Welcome
                </router-link>
            </li>
            <li>
                <router-link active-class="active" to="/user-list">
                    User List
                </router-link>
            </li>
            <li>
                <router-link active-class="active" to="/user-edit">
                    User Edit
                </router-link>
            </li>
        </ul>
    </header>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
