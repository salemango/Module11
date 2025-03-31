<template>
    <div>
        <h1>Not Found</h1>
        <p>Oh no! There's no page at this location. Try going to the Home page to get back on track:</p>
        <router-link to="/">Home Page</router-link>
    </div>
</template>

<style>
    h1 {
        margin-top: 35%;
        font-size: 25pt;
    }

    a {
        color: #363636;
        font-weight: bolder;
    }

    @media screen and (min-width: 600px) {
        h1 {
        margin-top: 20%;
        }
    }

    @media screen and (min-width: 990px) {

    h1 {
        font-size: 40pt;
        margin-top: 15%;
        width: 100%;
    }

    }

    @media screen and (min-width: 1900px) {

        h1 {
            margin-top: 8%;
        }
    }
</style>