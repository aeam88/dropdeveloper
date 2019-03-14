<template>
    <div>
        <titulo-seccion :titulo="titulo" :subtitulo="subtitulo" />
        <listas-aprender />
    </div>
</template>

<script>
    import TituloSeccion from '../components/TituloSeccion';
    import ListasAprender from '../components/ListasAprender';

    export default {
        data () {
            return {
                titulo: "Nuestros",
                subtitulo: "Cursos"
            }
        },
        components: {
            TituloSeccion,
            ListasAprender
        }
    }
</script>
