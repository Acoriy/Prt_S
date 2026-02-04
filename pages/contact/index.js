import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iyfxaes',
        ' ',
        form.current,
        {
          publicKey: 'SRPQxvXxB9Ah3Kdw1',
        }
      )
      .then(
        () => {
          // Success: show alert
          Swal.fire({
            title: 'Message Sent!',
            text: 'We’ve received your message and will get back to you shortly.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          // Clear form fields
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          Swal.fire({
            title: 'Error',
            text: 'Failed to send message. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <Circles />

        {/* Text & Form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Title */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* Input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                name="from_name"
                required
              />
              <input
                type="email"
                placeholder="email"
                className="input"
                name="from_email"
                required
              />
            </div>

            <input
              type="text"
              placeholder="subject"
              className="input"
              name="from_subject"
              required
            />

            <textarea
              placeholder="message"
              className="textarea"
              name="from_message"
              required
            ></textarea>

            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&rsquo;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


