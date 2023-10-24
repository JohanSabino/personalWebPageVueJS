<template>
    <div class="row">
    <div class="col-6">
        <picture  id="pic">
            <img src="../../img/me.png" alt="foto_personal"/>
        </picture>
    </div>
    <div class="col-6 align-self-center">
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
.row{
    margin-top: 5%;
}
#pic {
    width: 100%;
}
img{
    width: 40%;
    margin-left: 13%;
}
#know_me {
    width: auto;
    font-size: 22px;
    text-align: left;
    text-overflow: ellipsis;
    text-transform: capitalize;
    border-radius: 7%;
    padding: 10px;
    color: #ffff;
    transition: 2s;
}

#know_me:hover{
    width: auto;
    font-size: 24px;
    text-align: left;
    text-overflow: ellipsis;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    color: #ffff;
    transform: translateX(-60px);
}
p {
    font-style: italic;
}
.row{
    padding-top: 3%;
}
</style>