<template>
<b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
        <div>
            <form>
                <h3>Sign Up</h3>

                <div class="form-group">
                    <label>User Name</label>
                    <input v-model="userNameBody" type="text" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Email address</label>
                    <input v-model="emailBody" type="email" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input v-model="passwordBody" type="password" class="form-control form-control-lg" />
                </div>

                <button @click="addUser" type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            </form>
        </div>

    </b-row>
</b-container>
</template>

<script>
import axios from 'axios'

export default {
    data: function () {
        return {
            userNameBody: '',
            emailBody: '',
            passwordBody: '',

        }
    },
    methods: {
        addUser() {
            axios.post('http://localhost:8082/api/users/', {
                    username: this.userNameBody,
                    email: this.emailBody,
                    password: this.passwordBody
                })
                .then(response => {
                    this.todos.push(response.data)
                })
                .catch(error => {
                    console.log(error);
                });

                this.$router.push({
                path: `/login`
            });
        },
    }

}
</script>
