<template>
    <section class="lista-cursos">
        <div class="container">
            <div class="inner-lista-cursos">
                <card-aprender v-for="curso in infoCursos" :key="curso.titulo" :infoCursos="curso" />
            </div>
        </div>
    </section>
</template>

<script>

    import CardAprender from './CardAprender';

    export default {
        data () {
            return {
                infoCursos: [
                    {
                        imagenAprender: require('../assets/img/tutunobig2.png'),
                        tipo: "Front - End",
                        titulo: "CryptoApp Vue",
                        isCurso: false,
                        videos: 8,
                        duracion: 56,
                        nivel: "Novato",
                        descripcion: "Aprender Vue Js desde 0 desarrollando esta aplicación. Todos los conceptos básicos para que puedas seguir adentrandote en este framework."
                    },
                    {
                        imagenAprender: require('../assets/img/tutounobig3.png'),
                        tipo: "Mobile",
                        titulo: "New's App",
                        isCurso: false,
                        videos: 4,
                        duracion: 45,
                        nivel: "Intermedio",
                        descripcion: "Construimos esta espectacular aplicación móvil con react native. Aprende a comunicarte con Api's externas y más."
                    },
                    {
                        imagenAprender: require('../assets/img/tutounobig4.png'),
                        tipo: "Front - End",
                        titulo: "Bulma Css desde 0",
                        isCurso: false,
                        videos: 2,
                        duracion: 56,
                        nivel: "Avanzado",
                        descripcion: "Conoce este framework de Css. Crearemos una landing Page desde 0, repasaremos una gran cantidad de componentes."
                    }
                ]
            }
        },
        components: {
            CardAprender
        }
    }
</script>

<style>
    .lista-cursos {
        width: 100%;
        background-color: #f3f3f3;
    }

    .inner-lista-cursos {
        padding: 2em 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

    }
</style>
