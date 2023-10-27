<template>
    <div class="row">
        <div class="col-md-6 col-sm-12">
            <picture id="pic">
                <img src="../../img/me.png" alt="foto_personal"/>
            </picture>
        </div>
        <div class="col-md-6 col-sm-12 align-self-center">
            <div id="know_me">
                <p>
                    I am a developer with a passion for clean code and technological innovation.
                    My expertise spans Vue.js, Golang, PHP Laravel, and WordPress,
                    but my true strength lies in my ability to transform complex challenges
                    into elegant and efficient solutions. I excel at quickly adapting
                    to new technologies and apply a creative approach to problem-solving.
                    I am thrilled at the prospect of contributing my experience and creativity
                    to challenging and collaborative projects.
                    <br />
                </p>
                <strong>
                    GO AHEAD
                </strong>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Estilos para todos los dispositivos */
.row {
    margin-top: 3%;
    padding-top: 3%;
}

#pic {
    width: 100%;
    max-width: 90%; /* Asegura que la imagen no se estire más allá de su tamaño original */
}

img {
    width: 45%; /* Ajusta el tamaño de las imágenes para dispositivos móviles */
    display: block; /* Evita espacios adicionales debajo de las imágenes */
    margin: 0 auto; /* Centra la imagen en el contenedor */
}

#know_me {
    width: 100%;
    font-size: 18px;
    text-align: center;
    border-radius: 7px;
    padding: 8px;
    color: #ffff;
    transition: 0.5s;
}

#know_me:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateX(-10px);
}

/* Estilos para dispositivos de escritorio */
@media (min-width: 992px) {
    .row {
        margin-top: 5%;
        padding-top: 5%;
    }

    #pic {
        width: 100%; /* Ajusta el tamaño de la imagen para escritorio */
    }

    #know_me {
        font-size: 22px;
        text-align: left;
        padding: 10px;
    }
}
</style>
