<template>
    <section class="learning">
            <div class="container">
                <div class="d-flex-learn">
                    <div class="learn-izq">
                        <h2>Tutoriales</h2>    
                        <card-tutorial v-for="item in items" :key="item.titulo" :item="item" />
                        <div class="btn-more-tut">
                            <router-link to="/tutoriales">Ver más</router-link>
                        </div>
                    </div>
                    <div class="learn-der">
                        <h2>Cursos</h2>
                        <card-cursos v-for="item in itemsCursos" :key="item.titulo" :item="item" />
                        <div class="btn-more-tut">
                            <router-link to="/cursos">Ver más</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
    import CardTutorial from './CardTutorial';
    import CardCursos from './CardCursos';

    export default {
        data () {
            return {
                items: [
                    {
                        imagen: require('../assets/img/chapaTutos6small.png'),
                        titulo: "CryptoApp Vue",
                        descripcion: "Aprender Vue Js desde 0 desarrollando esta aplicación. Todos los conceptos para que puedas seguir aprendiendo VueJS.",
                        tagUno: "#Vue",
                        tagDos: "#Fron-end"
                    },
                    {
                        imagen: require('../assets/img/chapaTutos8small.png'),
                        titulo: "New's App",
                        descripcion: "Construimos esta espectacular aplicación móvil con react native. Aprende a comunicarte con Api's externas y más.",
                        tagUno: "#React-Native",
                        tagDos: "#Mobile"
                    },
                    {
                        imagen: require('../assets/img/chapaTutos7small.png'),
                        titulo: "Bulma Css desde 0",
                        descripcion: "Conoce este framework de Css. Crearemos una landing Page desde 0, repasaremos una gran cantidad de componentes.",
                        tagUno: "#Bulma",
                        tagDos: "#Fron-end"
                    }
                ],
                itemsCursos: [
                    {
                        imagen: require('../assets/img/chapaTutos3.png'),
                        titulo: "Angular 7",
                        descripcion: "Este completo curso de Angular en su última versión te llevará desde los conceptos más básicos hasta los más avanzados.",
                        tagUno: "#Angular",
                        tagDos: "#Fron-end"
                    },
                    {
                        imagen: require('../assets/img/chapaTutos9small.png'),
                        titulo: "Ionic 4",
                        descripcion: "Aprende este framework de desarrollo para aplicaciones hibridas en su última versión revisa sus componentes y como integrarlos.",
                        tagUno: "#Ionic",
                        tagDos: "#Mobile"
                    },
                    {
                        imagen: require('../assets/img/chapaTutos3.png'),
                        titulo: "ChatApp Angular y Firebase",
                        descripcion: "Crea una aplicación de chat con Angular y firebase. Aprende a integrar estas tecnilogías para desarrollar poderosas aplicaciones.",
                        tagUno: "#Angular",
                        tagDos: "#Firebase"
                    }
                ]
            }
        },
        components: {
            CardTutorial,
            CardCursos
        }
    }
</script>
<style>
    .learning {
        width: 100%;
        background: -webkit-linear-gradient(left, #763eff 50%,#f3f3f300 50%,#f3f3f300 100%);
        background: linear-gradient(to right, #763eff 50%,#f3f3f300 50%,#f3f3f300 100%);
    }

    .d-flex-learn {
        display: flex;
    }

    .learn-izq {
        flex: 1;
    }

    .learn-izq h2 {
        color: white;
        font-weight: 500;
        margin: 2em 0;
    }

    .content-box {
        display: flex;
        padding: 1.2em;
        margin-right: 2em;
        margin-bottom: 2em;
        border-radius: .5em;
        background-color: #763eff;
        transition: all .5s;
        cursor: pointer;
    }

    .content-box:hover {
        -webkit-box-shadow: 0px 10px 15px 2px rgb(76, 43, 187);
        -moz-box-shadow: 0px 10px 15px 2px rgb(76, 43, 187);
        box-shadow: 0px 10px 15px 2px rgb(76, 43, 187);
    }

    .img-container {
        align-self: center;
    }

    .content-tut-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 2em;
    }

    .content-tut-text h3 {
        color: #ffffff;
        font-weight: 500;
    }

    .content-tut-text p {
        color: #f3f3f3;
        margin: .8em 0;
    }

    .tags {
        display: flex;
    }

    .tag-unitario {
        background-color: #c8b9da;
        padding: 8px .6em;
        margin: .8em;
        color: white;
        border-radius: 1em;
    }

    .btn-more-tut {
        margin: 2em 2em 4em 0;
        text-align: right; 
    }

    .btn-more-tut a {
        background-color: #FF498B;
        padding: .7em 2em;
        text-decoration: none;
        color: white;
        border-radius: 2em;
        border: 2px solid #FF498B;
    }

    .learn-der {
        flex: 1;
        margin-left: 3em; 
    }

    .learn-der h2 {
        color: #404040;
        font-weight: 500;
        margin: 2em 0 2em 1em;
    }

    .content-box-cursos {
        display: flex;
        padding: 1.2em;
        border-radius: .5em;
        margin-left: 2em;
        margin-bottom: 2em;
        background-color: #ffffff;
        transition: all .5s;
        cursor: pointer;
    }

    .content-box-cursos:hover {
        -webkit-box-shadow: 0px 10px 15px 2px rgb(208, 208, 208, 1);
        -moz-box-shadow: 0px 10px 15px 2px rgb(208, 208, 208, 1);
        box-shadow: 0px 10px 15px 2px rgb(208, 208, 208, 1);
    }

    .content-cur-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 2em;
    }

    .content-cur-text h3 {
        font-weight: 500;
    }

    .content-cur-text p {
        margin: .8em 0;
    }


    /* MEDIA QUERYS */

    @media (max-width: 1400px) {
        .content-box {
            margin-right: 1em;
        }

        .content-box-cursos {
            margin-left: 1em;
        }
    }

    @media (max-width: 1300px) {
        .content-box {
            margin-right: 0;
        }

        .learn-der h2 {
            margin: 2em 0 2em 0;
        }

        .content-box-cursos {
            margin-left: 0;
        }
    }

    @media (max-width: 1280px) {
        .content-box {
            padding: 1em;
        }

        .content-box-cursos {
            padding: 1em;
        }
    }

    @media (max-width: 1120px) {
        .learning {
            width: 100%;
            background: -webkit-linear-gradient(top, #763eff 50%,#f3f3f3 50%,#f3f3f3 100%);
            background: linear-gradient(to bottom, #763eff 50%,#f3f3f3 50%,#f3f3f3 100%);
        }

        .d-flex-learn {
            flex-direction: column;
        }

        .learn-der {
            margin-left: 0;
        }
    }

    @media (max-width: 650px) {
        .tag-unitario {
            padding: 6px .8em;
            margin: .6em;
        }

        .btn-more-tut a {
            padding: .6em 1.5em;;
        }
    }

    @media (max-width: 500px) {
        .content-box {
            flex-direction: column;
        }

        .content-box-cursos {
            flex-direction: column;
        }

        .content-tut-text p {
            font-size: .9em;
        }
    }

</style>

