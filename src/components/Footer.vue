<template>
    <section class="footer">
        <div class="container">
            <div class="d-flex-footer">
                <div class="foot-left">
                    &copy; DropDeveloper 2019. Todos los derechos reservados.
                </div>
                <div class="foot-right">
                    <logo />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Logo from './Logo.vue';
    
    export default {
        components: {
            Logo
        }
    }
</script>

<style>
    .footer {
        width: 100%;
        background-color: #ffffff;
    }

    .d-flex-footer {
        padding: 2em 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* MEDIA QUERYS */

    @media (max-width: 650px) {
        .foot-right a svg {
            width: 70px;
            height: 70px;
            margin-top: 1.5em;
        }

        .d-flex-footer {
            flex-direction: column;
        }

        .foot-left {
            text-align: center;
        }
    }
</style>
