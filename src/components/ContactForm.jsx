import '../styles/ContactForm.css';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now access the form data in formData state
    console.log(formData);
    // Add logic to send the form data to your backend or perform other actions
  };

  return (
    <>
      <section className='contact-form-section'>
        <h3>Contactar agente</h3>
        <div>
          <form className='contact-form-container' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
            <input
              type="tel"
              placeholder="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Algún mensaje que nos quieras dejar"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
