import '../styles/pages/ContactoPage.css';
const ContactoPage = (props) => {
    return (
        <main class="holder contacto">
            <div>
                <h2>Contacto</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>otras vias de comunicación</h2>
                <p>tambien puedes comunicarte con nosotros utilizando estos metodos:</p>
                <ul>
                    <li>Telefono: 1111122222</li>
                    <li>Email: franciscomarcelogil@gmail.com</li>
                    <li>Facebook: francisco Gil</li>
                    <li>Twitter: franciscogil</li>
                    <li>Skipe:</li>
                </ul>

            </div>

        </main>
    );
}
export default ContactoPage;