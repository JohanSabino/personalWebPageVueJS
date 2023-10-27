<template>
    <article id="Projects">
        <h3 class="text-light">Personal sample projects</h3>
        <ul>
            <a href="https://moviestop.vercel.app/" target="_blank" class="project-link">
                
                    <li>

                        Movie's list in VanillaJS

                    </li>
                
            </a>
            <a href="https://pokedexapivue-jq9i.vercel.app/" target="_blank" class="project-link"><li>
                
                    Pokedex in VueJS
                
            </li>
        </a>
        <a href="https://github.com/JohanSabino/KlarkIoIntern" target="_blank" class="project-link">
            <li>
               
                    ModalCarousel - Bootstrap5
               
            </li>
        </a>
        <a href="https://github.com/JohanSabino/golangPage" target="_blank" class="project-link">
            <li>
                
                    This page - Golang Backend Setup
                </li>
            </a>
        </ul>
    </article>
</template>

<style scoped>
    #Projects {
        text-align: center;
    }

    #Projects h3 {
        margin-top: 15px;
        font-size: 25px;
    }

    #Projects ul {
        margin: 20px 5%;
        /* Ajusta el margen izquierdo y derecho para dispositivos de escritorio y móviles */
        padding: 0;
    }

    #Projects ul li {
        background-color: #1b253c;
        padding: 15px 0;
        margin: 5px 0;
        list-style: none;
        border-radius: 15px;
        text-decoration: none;
        box-sizing: border-box;
        border: 1px solid #d1f6f7;
        transition: 0.5s;
        cursor: pointer;
        /* Cambia el cursor al estilo de un enlace */
    }

    #Projects ul li:hover {
        background-color: #d1f6f7;
        padding: 15px;
        border-radius: 15px;
        border: 1px solid #1b253c;
    }

    a {

        text-decoration: none;
    }

    #Projects ul a li {
        text-decoration: none;
        color: #d1f6f7;
        font-size: 20px;
        font-weight: bold;
    }

    #Projects ul a li:hover {
        text-decoration: none;
        color: #1b253c;
        font-size: 20px;
        font-weight: bold;
    }

    /* Estilos para dispositivos móviles */
    @media only screen and (max-width: 767px) {
        #Projects{
            margin-top: -13px;
            margin-left: -20px;
            width: 100%;
        }
        h3{
           justify-content: center;
        }
        #Projects ul {
            width: fit-content;
            /* Ajusta el margen izquierdo y derecho para dispositivos móviles */
        }
        #Projects ul a {
            overflow: hidden;
            margin-top: 20px;
        }
   
        #Projects ul a li {
            font-size: 15px;
            overflow: hidden;
            margin-top: 20px;
        }
   
    }

    /* Estilos para tabletas y dispositivos de escritorio */
    @media only screen and (min-width: 768px) {
        #Projects ul {
            margin: 20px 15%;
            /* Ajusta el margen izquierdo y derecho para tabletas y dispositivos de escritorio */
        }
    }
</style>