<template>
    <div class="card-post">
        <img src="http://placehold.it/450x200" class="img-resp" alt="imgpost">
        <div class="padd-card">
            <div class="text-card">
                <h4>Hoasjdo</h4>
                <p>sadflkajhsdlfk laksflaksf lakshfl kahslf kas asf asf</p>
            </div>
            <div class="tags-post">
                <a href="#">#Angular</a>
                <a href="#">#Bootstrap</a>
            </div>
        </div>
    </div>    
</template>

<style>
    .card-post {
        margin: 0 .4em;
        border-radius: .5em;
        background-color: #ffffff;
        transition: all .5s;
        cursor: pointer;
        -webkit-box-shadow: 0px 2px 4px 0px rgb(208, 208, 208, .5);
        -moz-box-shadow: 0px 2px 4px 0px rgb(208, 208, 208, .5);
        box-shadow: 0px 2px 4px 0px rgb(208, 208, 208, .5);
    }

    .padd-card {
        padding: 1.2em;
    }

    .img-resp {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 1024px) {
        .card-post {
            margin-bottom: 1em;
        }
    }
</style>
