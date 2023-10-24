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