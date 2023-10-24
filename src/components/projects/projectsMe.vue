<template>
     <article id="Projects">
                    <h3 class="text-light">Personal sample projects</h3>
                    <ul>
                        <li>
                            <a
                                href="https://moviestop.vercel.app/"
                                target="_blank"
                                >Movie's list in VanillaJS</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://pokedexapivue-jq9i.vercel.app/"
                                target="_blank"
                                >Pokedex in VueJS</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://github.com/JohanSabino/KlarkIoIntern"
                                target="_blank"
                                >ModalCarousel - Bootstrap5</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://github.com/JohanSabino/golangPage"
                                target="_blank"
                                >This page - Golang Backend Setup</a
                            >
                        </li>
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
    margin: 20px 70px;
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
}
#Projects ul li:hover {
    background-color: #d1f6f7;
    padding: 15px;
    border-radius: 15px;
    border: 1px solid #1b253c;
}
#Projects ul li a {
    text-decoration: none;
    color: #d1f6f7;
    transition: 0.5s;
    font-size: 20px;
    font-weight: bold;
}
#Projects ul li a:hover {
    text-decoration: none;
    color: #1b253c;
    font-size: 20px;
    font-weight: bold;
    width: max-content;
}


</style>