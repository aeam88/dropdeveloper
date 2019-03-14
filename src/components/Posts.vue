<template>
    <section class="blog-post">
        <div class="container">
            <h2 class="tit-ul-post">Últimos Artículos</h2>
            <div class="cards-post">
                <post />
                <post />
                <post />
            </div>
        </div>
    </section>
</template>

<script>
    import Post from './Post';

    export default {
        components: {
            Post
        }    
    }
</script>

<style>
    .blog-post {
        width: 100%;
        height: 500px;
        background-color: #ffffff;
    }

    .tit-ul-post {
        color: #404040;
        font-weight: 500;
        padding: 2em 0;
    }

    .cards-post {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* MEDIA QUERYS */

    @media (max-width: 1024px) {
        .blog-post {
            height: auto;
        }
        .cards-post {
            flex-direction: column;
        }
    }
</style>
