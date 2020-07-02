<template>
<b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
        <div id="signin">
            <form>
                <h3>Sign In</h3>

                <div class="form-group">
                    <label>User Name</label>
                    <input v-model="username" type="text" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control form-control-lg" />
                </div>

            </form>
            <button @click="getTodoPage(username)" class="btn btn-dark btn-lg btn-block">Sign In</button>

        </div>

    </b-row>

    <b-row class="justify-content-md-center">
        <div id="welcome" style="display: none">
            <b-jumbotron header="What TO-DO" >
                <p>Welcome {{this.username}}</p>
                <b-button @click="goTodoPage()" variant="primary" >See your to-do page</b-button>
            </b-jumbotron>
        </div>
    </b-row>

</b-container>
</template>

<script>
import axios from 'axios'

export default {

    data: function () {
        return {
            username: '',
            user: '',
        }
    },
    methods: {
        getTodoPage(username) {
            axios.get('http://localhost:8082/api/users/' + username + "/")
                .then(response => (this.user = response.data.username))
                .catch(error => {
                    alert(error)
                });

            if (this.user != '') {
                document.getElementById("signin").style.display = "none";
                document.getElementById("welcome").style.display = "block";

            }

        },
        goTodoPage() {
            this.$router.push({
                path: `/todos/${this.username}`
            });
        }

    }

}
</script>
