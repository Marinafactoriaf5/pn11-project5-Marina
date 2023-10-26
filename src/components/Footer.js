import React, { useState, useEffect } from 'react';
import './styles.css';

function Footer() {
    return (
        <div class="footer">
            <div class="footer-column">
                <h2><i>DECATHLON EMPRESA</i></h2>
                <ul class="footerText">
                    <li><a href="#">Quiénes somos</a></li>
                    <li><a href="#">Canal ético</a></li>
                    <li><a href="#">Trabaja con nosotros</a></li>
                    <li><a href="#">Sala de prensa</a></li>
                    <li><a href="#">Decathlon afiliados</a></li>
                    <li><a href="#">Decathlon Marketplace</a></li>
                    <li><a href="#">Vende en Decathlon.es</a></li>
                    <li><a href="#">Sostenibilidad</a></li>
                    <li><a href="#">Innovación</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h2><i>COMPRA</i></h2>
                <ul class="footerText">
                    <li><a href="#">Método de entrega/Gasto de envío</a></li>
                    <li><a href="#">Métodos de pago</a></li>
                    <li><a href="#">Preguntas frecuentes</a></li>
                    <li><a href="#">Envío Canarias/Ceuta/Melilla/Andorra</a></li>
                    <li><a href="#">Single Day</a></li>
                    <li><a href="#">Regalos para deportistas</a></li>
                    <li><a href="#">Rebajas</a></li>
                    <li><a href="#">Botas de futbol</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h2><i>POST-COMPRA</i></h2>
                <ul class="footerText">
                    <li><a href="#">Cambios y devoluciones</a></li>
                    <li><a href="#">Factura formato electrónico</a></li>
                    <li><a href="#">Tu opinión cuenta</a></li>
                    <li><a href="#">Comunicados seguridad</a></li>
                    <li><a href="#">Tax free</a></li>
                    <li><a href="#">Clasificación de nuestros productos</a></li>
                    <li><a href="#">Servicio de montaje</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h2><i>SERVICIOS</i></h2>
                <ul class="footerText">
                    <li><a href="#">Alquiler</a></li>
                    <li><a href="#">Soporte técnico</a></li>
                    <li><a href="#">Tarjeta regalo</a></li>
                    <li><a href="#">Clubes, colegios y empresas</a></li>
                    <li><a href="#">Personalización</a></li>
                    <li><a href="#">Financiación</a></li>
                    <li><a href="#">Extensión de garantía</a></li>
                    <li><a href="#">Equipaciones clubes</a></li>
                    <li><a href="#">Postventa</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h2><i>VENTAJAS</i></h2>
                <ul class="footerText">
                    <li><a href="#">Decathlon Live</a></li>
                    <li><a href="#">Ventajas y servicios</a></li>
                    <li><a href="#">Decathlon segunda vida</a></li>
                    <li><a href="#">Revender mis productos</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Footer;