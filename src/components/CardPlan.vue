<template>
    <div class="card-precio">
        <h4 class="tipo-plan">{{ plan.modalidad }}</h4>
        <div class="icon-precio-plan" v-if="!plan.esTeam">
            <i class="fas fa-dollar-sign"></i> <span class="size-precio">{{ plan.precio }}</span>
        </div>
        <div class="icon-precio-plan cont-team-plan" v-if="plan.esTeam">
            <i class="fas fa-users team-plan"></i>
        </div>
        <ul>
            <li v-for="item in plan.incluye" :key="item"><p>{{ item }}</p></li>
        </ul>
        <div class="container-btn-select-plan">
            <a href="#" class="btn-plan-select">Seleccionar Plan</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['plan']    
    }
</script>

<style>
    .card-precio {
        width: 23.5%;
        text-align: center;
        padding: 1.2em;
        border-radius: .5em;
        background-color: #ffffff;
        -webkit-box-shadow: 0px 2px 4px 0px rgb(208, 208, 208, .5);
        -moz-box-shadow: 0px 2px 4px 0px rgb(208, 208, 208, .5);
        box-shadow: 0px 2px 4px 0px rgb(208, 208, 208, .5);
    }

    .card-precio ul li {
        list-style: none;
        margin: 1.2em 0;
    }

    .tipo-plan {
        color: #FF498B;
        font-size: 1.5em;
    }

    .icon-precio-plan i {
        font-size: 2em;
        color: #FF498B;
    }

    .size-precio {
        font-size: 7em;
    }

    .container-btn-select-plan {
        width: 100%;
        padding: 2em 0;
    }

    .btn-plan-select {
        color: white;
        background:  linear-gradient(to left, rgb(198, 174, 255) 0%,#7C4CF0 100%);
        padding: 1em 2.5em;
        text-decoration: none;
        border-radius: 5em;
        transition: all .5s;
    }

    .btn-plan-select:hover {
        background:  linear-gradient(to top, rgb(198, 174, 255) 0%,#7C4CF0 100%);
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
        .card-precio {
            width: 46%;
            margin-bottom: 1em;
        }
    }

    @media (max-width: 976px) {
        .card-precio {
            width: 48%;
        }
    }

    @media (max-width: 750px) {
        .card-precio {
            width: 100%;
        }
    }
</style>

