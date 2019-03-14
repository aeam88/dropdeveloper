<template>
    <section class="titulo-seccion">
        <div class="container">
            <div class="heding-text-cursos">
                <h1>{{ titulo }} <span>{{ subtitulo }}.</span></h1>
            </div>    
        </div>
    </section>
</template>

<script>
    export default {
        props: ['titulo', 'subtitulo']   
    }
</script>

<style>
    .titulo-seccion {
        width: 100%;
        background-image: url(../assets/img/bg-drop-tit.png), linear-gradient(to bottom, rgb(198, 174, 255) 0%,#7C4CF0 100%);
        background-size: cover;
        background-position: top;
        height: 20vh;
    }

    .heding-text-cursos {
        height: 20vh;
        display: flex;
        flex: 1;
        align-items: center;
    }

    .heding-text-cursos h1 {
        font-weight: 700;
        color: white;
        font-size: 4em;
    }

    .heding-text-cursos h1 span {
        color: #FF498B;
    }

    /* MEDIA QUERYS */

    @media (max-width: 976px) {
        .heding-text-cursos h1 {
            font-size: 3em;
        }
    }

    @media (max-width: 650px) {
        .titulo-seccion {
            height: 18vh;
        }
    }
</style>

