import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from './Modal';
import '../css/contactEmail.css';

const schema = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O nome precisa ter pelo menos 3 caracteres')
    .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('O email é obrigatório'),
  mensagem: Yup.string()
    .required('A mensagem é obrigatória'),
});

const ContactEmail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    const formData = {
      ...values,
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
    };

    try {
      console.log("Chave:", import.meta.env.VITE_WEB3FORMS_KEY);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        console.log('Sucesso:', result);
        setIsModalOpen(true);
        resetForm();
        setTimeout(() => setIsModalOpen(false), 5000); 
      } else {
        console.error('Erro ao enviar:', result);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{ nome: '', email: '', mensagem: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label className="input-label" htmlFor="nome">Seu Nome</label>
            <Field type="text" id="nome" name="nome" className="input-field" />
            <ErrorMessage name="nome" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label className="input-label" htmlFor="email">Seu Email</label>
            <Field type="email" id="email" name="email" className="input-field" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label className="input-label" htmlFor="mensagem">Escrever mensagem</label>
            <Field as="textarea" id="mensagem" name="mensagem" rows="4" className="input-field" />
            <ErrorMessage name="mensagem" component="div" className="error-message" />
          </div>

          <button type="submit" className="submit-btn">
            Enviar Mensagem
          </button>
        </Form>
      </Formik>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default ContactEmail;
