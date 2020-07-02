<template>
<header class="masthead">
    <div class="container">
        <div class="masthead-heading text-uppercase">What TO-DO</div>
        <div class="masthead-subheading">Muhammed Haktan Acar</div>

        <router-link to='/login'>
            <b-button variant="dark">Login</b-button>
        </router-link>

        <router-link to='/register'>
            <b-button variant="dark">Register</b-button>
        </router-link>

    </div>
</header>
</template>

<style>
header.masthead {
    padding-top: 10.5rem;
    padding-bottom: 6rem;
    text-align: center;
    color: #fff;
    background-image: url("../assets/notepad.jpg");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
}

header.masthead .masthead-subheading {
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.5rem;
    margin-bottom: 25px;
    font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

header.masthead .masthead-heading {
    font-size: 3.25rem;
    font-weight: 700;
    line-height: 3.25rem;
    margin-bottom: 2rem;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
