<template>
    <div class="row">
        <div>
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
                            <label for="name">Name</label> <br />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="name/company"
                                required="true"
                            /><br />
                        </div>
                        <div class="elemento">
                            <label for="email">Email</label><br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="person@mail.com"
                                required="true"
                            /><br />
                        </div>
                        <div class="elemento">
                            <label for="mensaje">Message</label> <br />
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
</template>

<style scoped>
.row {
    padding: 5% 0 5% 0;
    text-align: center;
    color: #ffff;
}

h1 {
    font-size: 50px;
}

p {
    font-size: 30px;
}

legend {
    font-size: 30px;
}

label {
    font-size: 25px;
}

form button {
    margin: 0;
    padding: 3px;
    width: 150px;
    letter-spacing: 3px;
    background: none;
    color: #d5bdaf;
    border-radius: 7%;
    border-color: #d5bdaf;
    transition: 0.8s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

form button:hover {
    margin: 0;
    padding: 3px;
    width: 150px;
    letter-spacing: 3px;
    background: none;
    color: #fff;
    border-radius: 7%;
    border-color: #fff;
}

form button::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: rgba(213, 189, 175, 0.4);
    border-radius: 7%;
    z-index: -1;
    transition: 0.8s;
}

form button::before {
    bottom: 0;
    border-radius: 50% 50% 0% 0%;
}

form button:hover::before {
    height: 180%;
}

/* Estilos para dispositivos móviles */
@media only screen and (max-width: 767px) {
    h1 {
        font-size: 40px;
    }

    p {
        font-size: 25px;
    }

    legend {
        font-size: 25px;
    }

    label {
        font-size: 20px;
    }

    form button {
        width: 120px;
        font-size: 16px;
    }
}

/* Estilos para tabletas y dispositivos de escritorio */
@media only screen and (min-width: 768px) {
    h1 {
        font-size: 50px;
    }

    p {
        font-size: 30px;
    }

    legend {
        font-size: 30px;
    }

    label {
        font-size: 25px;
    }

    form button {
        width: 150px;
        font-size: 18px;
    }
}
</style>
