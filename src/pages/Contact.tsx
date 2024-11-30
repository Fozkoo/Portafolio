import { Formik } from "formik";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const handleSubmit = async (values: { name: string; email: string; message: string }, { resetForm }: { resetForm: () => void }) => {
    console.log('Valores recibidos:', values); // Verifica que los valores lleguen correctamente
    try {
      const result = await emailjs.send(
        'service_8qvep0e', // Service ID
        'template_1vufqpm', // Template ID
        values,
        '5gXMg5i_gu5Mr8ffn' // User ID
      );
      console.log('Correo enviado:', result.text); // Verifica la respuesta de emailjs
      alert('¡Correo enviado exitosamente!');
      resetForm(); // Reinicia el formulario
    } catch (error) {
      console.error('Error al enviar el correo:', error); // Muestra el error en la consola
      alert('Hubo un error al enviar el correo. Intenta nuevamente.');
    }
  };


  return (
    <div className='container-contact flex flex-col bg-slate-50 mx-48 h-[100vh]'>
      <div className="container-section flex flex-col w-full px-[7%]">
        <div className="container-text">
          <p className="font-bold text-7xl">Contact</p>
        </div>
        <div className="container flex justify-between gap-3 items-center rounded-3xl mt-6 p-10 bg-[#E8E8E8]/80 h-[600px]">
          <div className="container-form flex justify-center items-center bg-white h-[90%] rounded-2xl w-[50%]">



            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validate={(values) => {
                const errors: { name?: string; email?: string; message?: string } = {};
                if (!values.name) errors.name = 'El nombre es obligatorio';
                if (!values.email) errors.email = 'El correo es obligatorio';
                if (!values.message) errors.message = 'El mensaje es obligatorio';
                return errors;
              }}

              onSubmit={handleSubmit}
            >
              {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white px-4 py-2"
                      placeholder="Enter your full name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white px-4 py-2"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Write your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white px-4 py-2"
                      placeholder="Write us your question here..."
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => console.log('Botón presionado')}
                  >
                    Send message
                  </button>

                </form>
              )}
            </Formik>
          </div>
          <div className="container-info bg-white w-[50%] ">
            <div className='bg-blue-400 text-gray w-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};