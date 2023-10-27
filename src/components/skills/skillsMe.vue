<template>
    <div class="row">
     <div class="col-6"> <article class="Skills" id="Skills">
                <h1><strong>Skills</strong></h1>
                <ul>
                    <li>Golang & JAVA</li>
                    <li>JavaScript - VueJS</li>
                    <li>HTML5 - Bootstrap 5</li>
                    <li>CSS3 -SASS</li>
                    <li>Git - Git Flow</li>
                    <li>MySql & PostgreSql</li>
                    <li>NoSQL MongoDB</li>
                    <li>Scrum Methodology</li>
                    <li>Software architecture</li>
                </ul>

                <br />

                <br />
            </article>
        </div>
            <div class="col-6"> <article class="Soft_Skills" id="Soft_Skills">
                <h1><strong>Soft Skills</strong></h1>

                <ul>
                    <li>Assertive communication</li>
                    <li>High conflict resolution skills</li>
                    <li>Teamwork</li>
                    <li>Time management and commitment chaining</li>
                    <li>Responsibility and diligence</li>
                </ul>

                <br />

                <br />
            </article></div>
        </div>
</template>

<style scoped>
.row {
    color: #ffff;
    margin-left: 5%;
}

ul {
    font-size: 30px;
    font-style: italic;
    list-style: none;
    padding: 0;
    margin: 0;
}

/* Estilos para dispositivos móviles */
@media only screen and (max-width: 767px) {
    ul {
        font-size: 15px;
    }
}

/* Estilos para tabletas */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    ul {
        font-size: 25px;
    }
}

/* Estilos para dispositivos de escritorio */
@media only screen and (min-width: 992px) {
    ul {
        font-size: 40px;
    }
}
</style>
