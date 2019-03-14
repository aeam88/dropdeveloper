<template>
    <div class="content-box">
        <div class="img-container">
            <img :src="item.imagen" :alt="item.tagUno">
        </div>
        <div class="content-tut-text">
            <h3>{{ item.titulo }}</h3>
            <p>{{ item.descripcion }}</p>
            <div class="tags">
                <div class="tag-unitario">{{ item.tagUno }}</div>
                <div class="tag-unitario">{{ item.tagDos }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item']
    }
</script>
