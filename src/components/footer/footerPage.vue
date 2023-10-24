<template>
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
</template>

<style scoped>
footer h1,
p {
    text-align: center;
}
fieldset {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10%;
    width: 20%;
    margin: auto;
}

legend {
    width: 50%;
    margin: auto;
    text-align: center;
    color: #f5ebe0;
    font-size: 25px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10%;
}

.contenedor1_contact {
    margin: auto;
    width: 400px;
    padding: 30px;
    box-sizing: content-box;
}
.elemento {
    text-align: center;
}
.elemento label {
    color: #f5ebe0;
    font-size: 20px;
}
.elemento textarea {
    width: 100%;
    padding-top: 2px;
    margin: 10px;
    border-radius: 10px;
}
.elemento input {
    width: 300px;
    height: 30px;
    padding-top: 2px;
    margin: 10px;
    border-radius: 10px;
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
/*Links*/
</style>