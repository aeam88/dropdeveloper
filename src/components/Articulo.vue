<template>
    <div class="articulo-individual">
        <img :src="articulo.imagenArt" class="img-resp" alt="imgpost">
        <div class="padd-card">
            <div class="text-card">
                <h4 class="tit-articulo">{{ articulo.tituloArticulo }}</h4>
                <p>{{ articulo.contArticulo }}</p>
            </div>
            <div class="tags-post">
                <a class="tags-articulos" href="#">{{ articulo.tagUnoArt }}</a>
                <a class="tags-articulos" href="#">{{ articulo.tagDosArt }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['articulo']    
    }
</script>

<style>
    .articulo-individual {
        width: 32%;
        background-color: white;
        cursor: pointer;
        border-radius: .5em;
        margin-bottom: 2em;
        -webkit-box-shadow: 0px 2px 4px 0px rgb(208, 208, 208, .5);
        -moz-box-shadow: 0px 2px 4px 0px rgb(208, 208, 208, .5);
        box-shadow: 0px 2px 4px 0px #d0d0d080;
    }

    .img-resp {
        max-width: 100%;
        height: auto;
    }

    .padd-card {
        padding: 1.2em;
    }

    .tit-articulo {
        margin-bottom: .6em;
    }

    .tags-articulos {
        color: #4499aa;
        text-decoration: none;
    }

    /* MEDIA QUERYS */

    @media (max-width: 1200px) {
        .articulo-individual {
            width: 46%;
        }
    }

    @media (max-width: 976px) {
        .articulo-individual {
            width: 100%;
        }
    }
</style>

