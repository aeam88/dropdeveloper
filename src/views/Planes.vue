<template>
    <div>
        <titulo-seccion :titulo="titulo" :subtitulo="subtitulo" />
        <section class="precios">
        <div class="container">
            <h2 class="tit-planes">Planes</h2>
            <div class="cards-precios-container">
                <card-plan v-for="plan in planes" :key="plan.modalidad" :plan="plan" />
            </div>
        </div>
    </section>
    </div>
</template>

<script>
    import TituloSeccion from '../components/TituloSeccion';
    import CardPlan from '../components/CardPlan';

    export default {
        data () {
            return {
                titulo: "Nuestros",
                subtitulo: "Planes",
                planes: [
                    {
                        modalidad: 'Free',
                        precio: 0,
                        incluye: ['Free Vue.js CheatSheet', 'Access to the complete Intro to Vue course', 'Free educational content delivered to your inbox'],
                        esTeam: false
                    },
                    {
                        modalidad: 'Mensual',
                        precio: 10,
                        incluye: ['Free Vue.js CheatSheet', 'Access to the complete Intro to Vue course', 'Free educational content delivered to your inbox'],
                        esTeam: false
                    },
                    {
                        modalidad: 'Anual',
                        precio: 80,
                        incluye: ['Free Vue.js CheatSheet', 'Access to the complete Intro to Vue course', 'Free educational content delivered to your inbox'],
                        esTeam: false
                    },
                    {
                        modalidad: 'Plan Teams',
                        precio: 0,
                        incluye: ['Free Vue.js CheatSheet', 'Access to the complete Intro to Vue course', 'Free educational content delivered to your inbox'],
                        esTeam: true
                    }
                ]
            }
        },
        components: {
            TituloSeccion,
            CardPlan
        }
    }
</script>

<style>
    .precios {
        width: 100%;
        background-color: #f3f3f3;
    }

    .tit-planes {
        padding: 2em 0;
        text-align: center;
        font-weight: 400;
        font-size: 2em;
    }

    .cards-precios-container {
        display: flex;
        justify-content: space-between;
        padding-bottom: 3em;
    }

    .cont-team-plan {
        margin: 1.3em 0;
    }

    .team-plan {
        font-size: 7em !important;
        color: #90ced8;
    }

    /* MEDIA QUERYS */

    @media (max-width: 1400px) {

        .cards-precios-container {
            flex-wrap: wrap;
        }
    }
</style>
