import { Formik } from "formik";
import emailjs from '@emailjs/browser';
import Title from "../components/Title";
import Info from "..//service/Info.json";

export const Contact = () => {
  const handleSubmit = async (values: { name: string; email: string; message: string }, { resetForm }: { resetForm: () => void }) => {
    console.log('Valores recibidos:', values);
    try {
      const result = await emailjs.send(
        'service_8qvep0e',
        'template_1vufqpm',
        values,
        '5gXMg5i_gu5Mr8ffn'
      );
      console.log('Correo enviado:', result.text);
      alert('¡Correo enviado exitosamente!');
      resetForm();
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el correo. Intenta nuevamente.');
    }
  };


  return (
    <div id="contact" className='container-contact flex flex-col bg-slate-50  justify-center mx-48 max-2xl:mx-20 max-xl:mx-5 h-[100vh]   max-2xl:h-full max-2xl:pb-16 max-2xl:pt-14'>
      <div className="container-section flex flex-col w-full px-[7%]  max-sm:px-5 max-2xl:px-[2%]">
        <Title
          title="Contacto"
        />



        <div className="container  flex max-sm:flex-col justify-center gap-4 items-center rounded-3xl mt-6 p-10 bg-[#E8E8E8]/80 h-[700px] shadow-md max-2xl:h-full  max-2xl:gap-20 max-sm:gap-5 max-2xl:p-6 max-sm:p-3">

          <div className="container-form bg-white  flex justify-center items-center h-[90%] rounded-2xl w-[45%] max-2xl:w-full max-2xl:h-auto max-2xl:rounded-2xl max-2xl:p-6">

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
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md space-y-6 max-2xl:max-w-full"
                >

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      {Info.contact_form.fields[0].label}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 bg-white px-4 py-2"
                      placeholder={Info.contact_form.fields[0].placeholder}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && (
                      <p className="text-red-500 mt-2 text-sm font-medium">{errors.name}</p>
                    )}
                  </div>


                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      {Info.contact_form.fields[1].email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 bg-white px-4 py-2"
                      placeholder={Info.contact_form.fields[1].placeholder}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && (
                      <p className="text-red-500 mt-2 text-sm font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>


                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      {Info.contact_form.fields[2].mensaje}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500 bg-white px-4 py-2"
                      placeholder={Info.contact_form.fields[2].placeholder}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && (
                      <p className="text-red-500 mt-2 text-sm font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>


                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => console.log('Botón presionado')}
                  >
                    {Info.contact_form.submit_button}
                  </button>
                </form>
              )}
            </Formik>
          </div>



          <div className="container-info  flex flex-col  gap-10 justify-center  items-center h-[100%] max-sm:gap-14  w-[45%] max-sm:w-full max-sm:h-[450px]">

            <div className="location flex  w-[100%] justify-start items-center space-x-4 h-[60px]  p-2 rounded-lg max-sm:flex-col max-sm:space-x-0 max-sm:justify-center">
              <div className="icon flex justify-center items-center w-[15%] h-full max-2xl:w-auto max-sm:w-full">
                <i className="bi bi-geo-alt text-3xl "></i>
              </div>
              <div className="text w-[85%] h-full flex flex-col justify-center max-2xl:w-full max-sm:w-full max-sm:items-center">
                <p className="text-lg mt-6 font-medium text-gray-900 ">{Info.otherTitles.ubicacion}</p>
                <p className="text-base  text-gray-700 max-sm:text-center">{Info.personal_info.location}</p>
              </div>
            </div>


            <div className="email flex w-[100%]  justify-start items-center space-x-4 h-[60px]  p-2 rounded-lg max-sm:flex-col max-sm:space-x-0 max-sm:justify-center">
              <div className="icon flex justify-center items-center w-[15%] h-full max-2xl:w-auto max-sm:w-full">
                <i className="bi bi-envelope-at text-3xl"></i>
              </div>
              <div className="text w-[85%] h-full flex flex-col justify-center max-2xl:w-full max-sm:w-full max-sm:items-center">
                <p className="text-lg font-medium text-gray-900">{Info.otherTitles.email}</p>
                <p className="text-base text-gray-70  max-sm:text-center">{Info.personal_info.email}</p>
              </div>
            </div>


            <div className="github-profile flex w-[100%] justify-start items-center space-x-4 h-[60px] p-2 rounded-lg max-sm:flex-col max-sm:space-x-0 max-sm:justify-center">
              <div className="icon flex justify-center items-center w-[15%] h-full max-2xl:w-auto max-sm:w-full">
                <i className="bi bi-github text-3xl"></i>
              </div>
              <div className="text w-[85%] h-full flex flex-col justify-center max-2xl:w-full max-sm:w-full max-sm:items-center">
                <p className="text-lg font-medium text-gray-900">{Info.otherTitles.perfilGithub}</p>
                <p className="text-base text-gray-700 max-sm:text-center">{Info.personal_info.githubProfile}</p>
              </div>
            </div>

    
            <div className="phone flex w-[100%] justify-start items-center space-x-4 h-[60px] p-2 rounded-lg max-sm:flex-col max-sm:space-x-0 max-sm:justify-center">
              <div className="icon flex justify-center items-center w-[15%] h-full max-2xl:w-auto max-sm:w-full">
                <i className="bi bi-telephone text-3xl"></i>
              </div>
              <div className="text w-[85%] h-full flex flex-col justify-center max-2xl:w-full max-sm:w-full max-sm:items-center">
                <p className="text-lg font-medium text-gray-900">{Info.otherTitles.Telefono}</p>
                <p className="text-base text-gray-700 max-sm:text-center">{Info.personal_info.phone}</p>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
};