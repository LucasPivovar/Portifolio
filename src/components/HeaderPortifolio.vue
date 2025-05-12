<template>
    <header>
        <h1>Lucas <span>.</span></h1>
        <nav>
            <router-link to="/">Home</router-link> 
            <router-link to="/resume">Resume</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderPortifolio',
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 700;
        height: 5rem;
        margin-top: 1rem;
    }

    header span {
        color: #00B2FF;
        font-weight: bold;
    }
    
    nav {
    padding: 30px;
    display: flex;
    gap: 3rem;
    }

    nav a {
    font-weight: 500;
    color: #FFF;
    text-decoration: none;
    }

    nav a.router-link-exact-active {
        color: #00B2FF;
        border-bottom: 2px solid #00B2FF;
    }

    @media screen and (max-width: 1000px) {
        header {
            height: 6rem;
            padding: 20px;
            display: flex;
            flex-direction: column;
            margin-bottom: 3rem;
        }

        nav {
            margin-top: 1rem;
            gap: 1rem;
            padding: 0;
        }
    }
</style>