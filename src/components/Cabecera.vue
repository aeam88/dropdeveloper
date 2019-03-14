<template>
    <section class="slider">
        <div class="container d-flex-sec">
            <div class="main-btns-slide">
                <router-link to="/cursos" class="btn-ver-cursos">Ver Cursos</router-link>
                <router-link to="/planes" class="btn-suscripcion">Suscribirse</router-link>
            </div>
            <div class="heding-text">
                <h1>Aprender <span>front - end <br></span> desde los fundamentos.</h1>
            </div>    
        </div>
    </section>
</template>

<style>
    .slider {
        width: 100%;
        height: 84vh;
    }

    .d-flex-sec {
        display: flex;
        flex-direction: column;
        height: 84vh;
    }

    .main-btns-slide {
        display: flex;
        flex: 1;
        justify-content: space-evenly;
        align-items: flex-end;
        margin-bottom: 2em;
    }

    .main-btns-slide a {
        margin: 2em;
    }

    .btn-ver-cursos {
        background-color: #763eff;
        padding: 1.5em 5em;
        text-decoration: none;
        color: white;
        border-radius: 2em;
        border: 2px solid #763eff;
        transition: all .5s;
    }

    .btn-ver-cursos:hover {
        background-color: transparent;
        border: 2px solid #763eff;
    }

    .btn-suscripcion {
        background-color: transparent;
        padding: 1.5em 5em;
        text-decoration: none;
        color: #763eff;
        border-radius: 2em;
        border: 2px solid #763eff;
    }

    .heding-text {
        display: flex;
        flex: 1.2;
        align-items: center;
    }

    .heding-text h1 {
        font-weight: 700;
        color: #7c4cf0;
        font-size: 5em;
    }

    /* MEDIA QUERYS */

    @media (max-width: 1360px) {
        .heding-text h1 {
            font-size: 4em;
        }
    }

    @media (max-width: 1280px) {
        .btn-ver-cursos {
            padding: 1.3em 4em;
        }

        .btn-suscripcion {
            padding: 1.3em 4em;
        }
    }

    @media (max-width: 1024px) {
        .heding-text h1 {
            font-size: 3.5em;
        }
    }

    @media (max-width: 896px) {
        .heding-text h1 {
            font-size: 3.3em;
        }
    }

    @media (max-width: 848px) {
        .heding-text h1 {
            font-size: 2.8em;
            text-align: center;
        }
    }

    @media (max-width: 722px) {
        .btn-ver-cursos {
            padding: 1em 3em;
        }

        .btn-suscripcion {
            padding: 1em 3em;
        }
    }

    @media (max-width: 650px) {
        .slider {
            height: 74vh;
        }

        .d-flex-sec {
            height: 74vh;
        }

        .main-btns-slide {
            flex-direction: column;
            align-items: center;
            margin-bottom: 0;
        }

        .heding-text h1 {
            font-size: 2.5em;
        }
    }

    @media (max-width: 570px) {
        .heding-text h1 {
            font-size: 2.2em;
        }
    }
</style>
