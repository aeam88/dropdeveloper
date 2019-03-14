<template>
    <header class="menu-nav">
        <div class="container">
            <nav class="main-nav">
                <div class="nav-izq-head">
                    <logo />
                    <ul class="nav-links-izq">
                        <li><router-link to="/cursos">Cursos</router-link></li>
                        <li><router-link to="/tutoriales">Tutoriales</router-link></li>
                        <li><router-link to="/planes">Planes</router-link></li>
                        <li><router-link to="/articulos">Artículos</router-link></li>
                    </ul>
                </div>
                <ul class="nav-links">
                    <li class="mobile-nav-dos"><a href="#">Registro</a></li>
                    <li class="mobile-nav-dos"><a href="#" class="login-btn">Login</a></li>
                    <li class="mobile-nav"><a @click="mostrarNav()" href="#"><i class="fas fa-ellipsis-h fa-2x"></i></a></li>
                </ul>
			</nav>
            <div class="nav-responsive" v-if="showNavResponsive">
                <ul class="nav-links-responsive">
                    <li><router-link to="/cursos">Cursos</router-link></li>
                    <li><router-link to="/tutoriales">Tutoriales</router-link></li>
                    <li><router-link to="/planes">Planes</router-link></li>
                    <li><router-link to="/articulos">Artículos</router-link></li>
                    <li><a  href="#">Registro</a></li>
                    <li><a  href="#">Login</a></li>
                </ul>
            </div>

        </div> 
    </header>
</template>

<script>
    import Logo from './Logo';

    export default {
        data () {
            return {
                showNavResponsive: false
            }
        },
        components: {
            Logo
        },
        methods: {
            mostrarNav() {
                this.showNavResponsive = !this.showNavResponsive; 
            },
        }
    }
</script>


<style>
    .main-nav {
        display: flex;
        justify-content: space-between;
    }

    .nav-izq-head {
        display: flex;
    }

    .nav-links-izq {
        display: flex;
        align-items: center;
        margin-left: 2em;
    }

    .nav-links-izq li {
        list-style: none;
        margin: 0 1.2em;
    }

    .nav-links-izq li a {
        text-decoration: none;
        color: #c8b9da;
    }

    .nav-links {
        display: flex;
        align-items: center;
    }

    .nav-links li {
        list-style: none;
        margin: 0 1.2em;
    }

    .nav-links li a {
        text-decoration: none;
        color: #c8b9da;
    }

    .login-btn {
        background-color: #763eff;
        border: 1px solid #763eff;
        color: white !important;
        padding: 10px 1.2em;
        border-radius: 1.5em;
    }

    .login-btn:hover {
        background-color: transparent;
        border: 1px solid #763eff;
        color: #763eff !important;
    }

    .menu-nav {
        width: 100%;
        background-color: white;
        padding: .5em 0;
        -webkit-box-shadow: 0px 4px 7px 0px rgba(237,237,237,1);
    -moz-box-shadow: 0px 4px 7px 0px rgba(237,237,237,1);
    box-shadow: 0px 4px 7px 0px rgba(237,237,237,1);
    }

    .mobile-nav {
        display: none;
    }

    .nav-links-responsive {
        margin-top: 2em;
    }

    .nav-links-responsive li {
        list-style: none;
        display: flex;
        padding: 1em;
        cursor: pointer;
        transition: all .3s;
    }

    .nav-links-responsive li a {
        width: 100%;
        text-decoration: none;
        color: #c8b9da;
        text-align: left;
    }

    .nav-links-responsive li:hover {
        background-color: #763eff;
    }

    /* MEDIA QUERYS */

    @media (max-width: 976px) {
        .nav-links-izq {
            display: none;
        }

        .mobile-nav {
            display: inline;
        }
    }
    
    @media (max-width: 650px) {
        .nav-izq-head svg {
            width: 70px;
            height: 70px;
        }

        .login-btn {
            padding: 5px 1em;
        }
    }

    @media (max-width: 600px) {
        .mobile-nav-dos {
            display: none;
        }
    }


</style>

