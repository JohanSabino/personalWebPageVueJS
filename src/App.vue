<template>
    <div id="body">
    <div class="container">
        <div class="row">
            <navBar></navBar>
            <div >
                <div class="row">
                    <div class="col-6 align-self-center">
                <img
                    src="https://i.imgur.com/oNwZjtR.png"
                    alt="foto_personal"
                    id="pic"
                /></div>
                <div class="col-6 align-self-center">
                <p id="know_me">
                    I am a developer with a passion for clean code and technological innovation. 
                    My expertise spans Vue.js, Golang, PHP Laravel, and WordPress, 
                    but my true strength lies in my ability to transform complex challenges 
                    into elegant and efficient solutions. I excel at quickly adapting 
                    to new technologies and apply a creative approach to problem-solving. 
                    I am thrilled at the prospect of contributing my experience and creativity 
                    to challenging and collaborative projects.
                    <br /><strong>Go ahead</strong>
                </p>
                </div>
            </div>
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
                </article></div>
            <div class="col-4"> <article class="Skills" id="Skills">
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
            </article></div>
            <div class="col-4"> <article class="Soft_Skills" id="Soft_Skills">
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
    </div>
    <div class="container">
        <div class="row">
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
        </div>
    </div>
</div>
</template>
<script setup>
// eslint-disable-next-line
import navBar from '@/components/navbar/nav-bar.vue'
</script>

<style scoped>

@import '@/components/css/normalize.css';
@import '@/components/css/style.css';
@import '@/components/css/media-queries.css';
</style>
