<template>
    <div class="curso-individual-container">
        <div class="image-course-icon">
            <img :src="infoCursos.imagenAprender" :alt="infoCursos.titulo">
        </div>
        <div class="lado-texto-card-curso">
            <h5>{{ infoCursos.tipo }}</h5>
            <h2>{{ infoCursos.titulo }}</h2>
            <div class="icons-text-right">
                <div class="icon-desc-curso">
                    <div v-if="infoCursos.isCurso"><i class="fas fa-video"></i> {{ infoCursos.videos }} Videos</div>
                    <div v-if="!infoCursos.isCurso"><i class="fas fa-thumbs-up"></i> {{ infoCursos.videos }} Likes</div>
                    <div><i class="far fa-clock"></i> {{ infoCursos.duracion }} min.</div>
                    <div v-if="infoCursos.nivel === 'Novato'"><i class="fas fa-circle color-selected-level"></i><i class="far fa-circle"></i><i class="far fa-circle"></i>Novato</div>
                    <div v-if="infoCursos.nivel === 'Intermedio'"><i class="fas fa-circle color-selected-level"></i><i class="fas fa-circle color-selected-level"></i><i class="far fa-circle"></i>Intermedio</div>
                    <div v-if="infoCursos.nivel === 'Avanzado'"><i class="fas fa-circle color-selected-level"></i><i class="fas fa-circle color-selected-level"></i><i class="fas fa-circle color-selected-level"></i>Avanzado</div>
                </div>
                <div class="desc-curso-paragraf">
                    <p>{{ infoCursos.descripcion }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['infoCursos']       
    }
</script>

<style>
    .curso-individual-container {
        width: 45%;
        display: flex;
        flex-direction: column;
        padding: 1.5em;
        margin-bottom: 1em;
        border-radius: 1em;
        align-items: center;
        cursor: pointer;
        transition: all .3s;
    }

    .curso-individual-container:hover {
        -webkit-box-shadow: 0px 12px 28px 2px rgb(180, 180, 180, 1);
        -moz-box-shadow: 0px 12px 28px 2px rgb(180, 180, 180, 1);
        box-shadow: 0px 12px 28px 2px rgb(180, 180, 180, 1);
    }

    .image-course-icon img {
        width: 100%;
        height: auto;
    }

    .lado-texto-card-curso {
        margin-top: 1em;
    }

    .lado-texto-card-curso h5 {
        color: #FF498B;
        font-size: 1em;
    }

    .lado-texto-card-curso h2 {
        font-size: 3em;
    }

    .icons-text-right {
        display: flex;
        flex-direction: column;
    }

    .icon-desc-curso {
        display: flex;
    }

    .icon-desc-curso div {
        margin: 1em .8em 1em 0;
    }

    .icon-desc-curso div i {
        margin-right: .5em;
    }

    .color-selected-level {
        color: #FF498B;
    }


    /* MEDIA QUERYS */

    @media (max-width: 1530px) {
        .icon-desc-curso {
            flex: 1;
        }
    }

    @media (max-width: 1400px) {
        .curso-individual-container {
            width: 48%;
        }
    }
    
    @media (max-width: 1200px) {
        .lado-texto-card-curso h2 {
            font-size: 2.6em;
        }
    }

    @media (max-width: 1100px) {
        .curso-individual-container {
            margin: 0 3em 1em 3em;
            width: 100%;
        }
    }

    @media (max-width: 1024px) {
        .curso-individual-container {
            margin: 0 2em 1em 2em;
        }
    }

    @media (max-width: 976px) {
        .curso-individual-container {
            margin: 0 1em 1em 1em;
        }
    }

    @media (max-width: 896px) {
        .curso-individual-container {
            margin: 0 0 1em 0;
        }
    }

    @media (max-width: 848px) {
        .curso-individual-container {
            padding: 1em;
        }

        .lado-texto-card-curso h2 {
            font-size: 2em;
        }
    }

    @media (max-width: 650px) {

        .lado-texto-card-curso h2 {
            font-size: 1.5em;
        }

        .lado-texto-card-curso h5 {
            font-size: .8em;
        }

        .icon-desc-curso div {
            margin: 1em .8em .5em 0;
        }
    }

    @media (max-width: 500px) {
        .icon-desc-curso div {
            font-size: .8em;
        }
    }

</style>
