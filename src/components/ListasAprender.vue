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
                        imagenAprender: require('../assets/img/tutounobig6.png'),
                        tipo: "Front - End",
                        titulo: "Angular 7",
                        isCurso: true,
                        videos: 8,
                        duracion: 120,
                        nivel: "Novato",
                        descripcion: "Este completo curso de Angular en su última versión te llevará desde los conceptos más básicos hasta los más avanzados."
                    },
                    {
                        imagenAprender: require('../assets/img/tutounobig5.png'),
                        tipo: "Mobile",
                        titulo: "Ionic 4",
                        isCurso: true,
                        videos: 16,
                        duracion: 150,
                        nivel: "Intermedio",
                        descripcion: "Aprende este framework de desarrollo para aplicaciones hibridas en su última versión revisa sus componentes y como integrarlos."
                    },
                    {
                        imagenAprender: require('../assets/img/tutounobig6.png'),
                        tipo: "Front - End",
                        titulo: "ChatApp Angular y Firebase",
                        isCurso: true,
                        videos: 2,
                        duracion: 74,
                        nivel: "Avanzado",
                        descripcion: "Crea una aplicación de chat con Angular y firebase. Aprende a integrar estas tecnilogías para desarrollar poderosas aplicaciones."
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
