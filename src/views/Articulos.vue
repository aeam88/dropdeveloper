<template>
    <div>
        <titulo-seccion :titulo="titulo" :subtitulo="subtitulo" />
    </div>
</template>

<script>
    import TituloSeccion from '../components/TituloSeccion';

    export default {
        data () {
            return {
                titulo: "Artículos",
                subtitulo: "Front-End"
            }
        },
        components: {
            TituloSeccion
        }
    }
</script>