<template>
    <div>
        <titulo-seccion :titulo="titulo" :subtitulo="subtitulo" />
        <section class="articulos-front">
            <div class="container">
                <div class="container-articulos">
                    <articulo :articulo="infoArticulo" />
                    <articulo :articulo="infoArticulo" />
                    <articulo :articulo="infoArticulo" />
                    <articulo :articulo="infoArticulo" />
                    <articulo :articulo="infoArticulo" />
                    <articulo :articulo="infoArticulo" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import TituloSeccion from '../components/TituloSeccion';
    import Articulo from '../components/Articulo';

    export default {
        data () {
            return {
                titulo: "Artículos",
                subtitulo: "Front-End",
                infoArticulo: {
                    imagenArt: 'http://placehold.it/750x300',
                    tituloArticulo: 'HTTP Module',
                    contArticulo: 'sadflkajhsdlfk laksflaksf lakshfl kahslf kas asf asf',
                    tagUnoArt: '#Angular',
                    tagDosArt: '#Bootstrap'
                }
            }
        },
        components: {
            TituloSeccion,
            Articulo
        }
    }
</script>

<style>
    .articulos-front {
        width: 100%;
        background-color: #f3f3f3;
    }

    .container-articulos {
        display: flex;
        width: 100%;
        padding: 2em 0;
        justify-content: space-between;
        flex-wrap: wrap; 
    }
</style>
