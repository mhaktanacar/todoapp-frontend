<template>
<div>
    <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
            <b-nav-item>
                <router-link to='/'>
                    <b-button variant="outline-primary">Home</b-button>
                </router-link>
            </b-nav-item>

            <b-nav-item>
                <router-link to='/todos'>
                    <b-button variant="outline-primary">Todos</b-button>
                </router-link>
            </b-nav-item>

            <b-nav-item>
                <router-link to='/login'>
                    <b-button variant="outline-primary">Login</b-button>
                </router-link>

            </b-nav-item>
            <b-nav-item>
                <router-link to='/register'>
                    <b-button variant="outline-primary">Register</b-button>
                </router-link>

            </b-nav-item>

        </b-navbar-nav>
    </b-navbar>
</div>
</template>
