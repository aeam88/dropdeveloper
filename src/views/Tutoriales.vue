<template>
    <div>
        <titulo-seccion :titulo="titulo" :subtitulo="subtitulo" />
        <listas-tutoriales />
    </div>
</template>

<script>
    import TituloSeccion from '../components/TituloSeccion';
    import ListasTutoriales from '../components/ListasTutoriales';

    export default {
        data () {
            return {
                titulo: "Nuestros",
                subtitulo: "Tutoriales"
            }
        },
        components: {
            TituloSeccion,
            ListasTutoriales
        }
    }
</script>