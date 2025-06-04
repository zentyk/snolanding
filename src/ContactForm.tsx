import './ContactForm.css';
export default function ContactForm() { 
    /*function HideForm(): React.MouseEventHandler<HTMLButtonElement> {
        return (e) => {
            e.preventDefault();
            const form = document.getElementById("form");
            if (form) {
                form.style.display = "none";

                const name = document.getElementById("name") as HTMLInputElement;
                const email = document.getElementById("email") as HTMLInputElement;
                const service = document.getElementById("service") as HTMLSelectElement;

                if (name && email && service) {
                    name.value = "";
                    email.value = "";
                    service.selectedIndex = 0;
                }
            }
        };
    }*/

    /*function OpenWp(): React.MouseEventHandler<HTMLButtonElement> {
        return (e) => {
            e.preventDefault();
            window.open("https://wa.me/+525538903746", "_blank");
        };
    }*/

    return (
        <div id="popup">

        <form name='contact' className="contact-form" method="POST"> 
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Servicio de Interes</label>
                <select id="service" name="service" required>
                    <option value="">Seleccione un servicio</option>
                    <option value="brand-book">Manual de Marca</option>
                    <option value="marketing-plan">Plan de Mercadotecnia</option>
                    <option value="content-plan">Parrilla de Contenido</option>
                    <option value="website">Web para Vender</option>   
                    <option value="video-editing">Edicion de Video</option>
                    <option value="automation">Automatizacion de Negocio</option>
                    <option value="interactive-ads">Display Ads Interactivos</option>
                    <option value="virtual-reality">Realidad Virtual</option>
                    <option value="augmented-reality">Realidad Aumentada</option>
                </select> 
            </div> 
            <button type="submit">Solicitar Cotizacion</button>
        </form> 
        </div> 
    );
}