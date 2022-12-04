<template>
    <MenuMain />

    <br />
    <div class="content_main">
        <aside>
            <div>
                <img
                    src="https://i.imgur.com/oNwZjtR.png"
                    alt="foto_personal"
                    id="pic"
                />
                <p id="know_me">
                    "A man who becomes conscious of the responsibility he bears
                    toward a human being who affectionately waits for him, or to
                    an unfinished work, will never be able to throw away his
                    life."
                    <br /><strong>Viktor Frankl</strong>
                </p>

                <article class="Apis">
                    <h3>Personal sample projects</h3>
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
                                href="https://github.com/JohanSabino/golangPage"
                                target="_blank"
                                >This page - Golang Backend Setup</a
                            >
                        </li>
                    </ul>
                </article>
            </div>
        </aside>
        <article class="article_main">
            <article class="Skills" id="Skills">
                <h1><strong>Skills</strong></h1>
                <ul>
                    <li>Golang - Gin</li>
                    <li>JavaScript - VueJS</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Git - Git Flow</li>
                    <li>MySql & PostgreSql</li>
                    <li>Scrum Methodology</li>
                    <li>Software architecture</li>
                </ul>

                <br />

                <br />
            </article>

            <article class="Soft_Skills" id="Soft_Skills">
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
            </article>
        </article>
    </div>
    <div class="div_pattern">
        <footer class="footer" id="ContactMe">
            <h1>
                <strong>I'm glad you were interested in my profile!</strong>
            </h1>
            <hr />
            <br />
            <p>
                You can write me an email if you wish to contact me. I look
                forward to reading soon
            </p>
            <br />
            <fieldset>
                <legend>Enter your details</legend>
                <div class="contenedor1_contact">
                    <form
                        action="https://formsubmit.co/jasc9494@gmail.com"
                        method="POST"
                        autocomplete="off"
                    >
                        <div class="elemento">
                            <label for="name">Name:</label> <br />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="nombre y apellido"
                                required="true"
                            /><br />
                        </div>
                        <div class="elemento">
                            <label for="email">Email:</label><br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="juanito@mail.com"
                                required="true"
                            /><br />
                        </div>
                        <div class="elemento">
                            <label for="mensaje">Message:</label> <br />
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                rows="7"
                                cols="40"
                            ></textarea
                            ><br />
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </fieldset>
        </footer>
    </div>
    `
</template>
<script setup>
import MenuMain from './components/MenuMain.vue';
</script>

<style scoped>
@import '@/components/css/normalize.css';
@import '@/components/css/style.css';
@import '@/components/css/media-queries.css';
</style>
