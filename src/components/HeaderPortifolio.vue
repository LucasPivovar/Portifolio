<template>
    <header>
        <h1>Lucas <span>.</span></h1>
        
        <!-- Hamburger menu button (shown only on mobile) -->
        <div class="hamburger" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <!-- Navigation menu -->
        <nav :class="{ 'mobile-active': mobileMenuOpen }">
            <div class="close-menu" @click="toggleMobileMenu">&times;</div>
            <router-link to="/" @click="closeMobileMenu">Inicio</router-link> 
            <router-link to="/resume" @click="closeMobileMenu">Resumo</router-link>
            <router-link to="/projects" @click="closeMobileMenu">Projetos</router-link>
            <router-link to="/contact" @click="closeMobileMenu">Contato</router-link>
        </nav>
        
        <!-- Overlay for mobile menu -->
        <div class="overlay" v-if="mobileMenuOpen" @click="toggleMobileMenu"></div>
    </header>
</template>

<script>
export default {
    name: 'HeaderPortifolio',
    data() {
        return {
            mobileMenuOpen: false
        }
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            // Prevent scrolling when menu is open
            document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
        },
        closeMobileMenu() {
            this.mobileMenuOpen = false;
            document.body.style.overflow = '';
        }
    }
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
    position: relative;
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

.hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    cursor: pointer;
    z-index: 10;
}

.hamburger span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #fff;
    border-radius: 3px;
}

.close-menu {
    display: none;
    font-size: 2rem;
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
}

@media screen and (max-width: 1000px) {
    header {
        height: auto;
        padding: 20px;
        margin-bottom: 0;
    }
    
    .hamburger {
        display: flex;
    }
    
    nav {
        position: fixed;
        top: 0;
        right: -250px; /* Start off-screen */
        width: 250px;
        height: 100vh;
        background-color: #121212;
        flex-direction: column;
        padding: 60px 20px 20px;
        gap: 2rem;
        z-index: 10;
        transition: right 0.3s ease;
    }
    
    nav.mobile-active {
        right: 0; /* Slide in from right */
    }
    
    .close-menu {
        display: block;
    }
}
</style>