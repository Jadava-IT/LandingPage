import { Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { validationSchema } from "../Schema/Validation";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderComponent from "./LoaderComponent";



function ContactUsForm() {
  const [isSubmit,setIsSubmit]=useState(false)
  const [showLoader,setShowLoader]=useState(false)

  const handleChange=()=>{
    setIsSubmit(false)
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      subject: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values, {resetForm}) => {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbx34ErPTI9k-mVPcP-61dzchwsZWqG_9A8PhJ_TOUPUakdSsrXEkVAdGi7Gmqb9L0MtfA/exec";
      const form = document.forms["submit-to-google-sheet"];
      // setIsSubmit(true)
      form.addEventListener("submit", (e) => {
        setIsSubmit(true)
        setShowLoader(true)
        e.preventDefault();
        fetch(scriptURL, {
          method: "POST",
          mode: "no-cors",
          body: new FormData(form),
        })
          .then((res) => {setShowLoader(false); resetForm()})
          .catch((error) => console.error("Error!", error.message));
      });
    },
  });
  return (
    <>
      <div className="formSection w-[370px] md:w-[670px]">
        <div class="flex sm:flex-row flex-col justify-between items-center text-2xl md:text-4xl mb-8 md:mb-14">
          <p class="font-bold text-center">Send us a message</p>
          <div class="text-brand">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        </div>
        <form
          name="submit-to-google-sheet"
          action=""
          onSubmit={formik.handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            <div>
              <TextField
                type="name"
                name="name"
                id="standard-basic"
                label="Name"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p className=" errorMess ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="none"
                    viewBox="0 0 13 13"
                  >
                    <path
                      fill="#F99393"
                      d="M5.85 9.75h1.3v-3.9h-1.3v3.9zm.65-5.2a.629.629 0 00.463-.187.629.629 0 00.187-.463.629.629 0 00-.187-.463.629.629 0 00-.463-.187.629.629 0 00-.463.187.629.629 0 00-.187.463c0 .184.062.339.187.463a.629.629 0 00.463.187zm0 8.45c-.9 0-1.744-.17-2.535-.512a6.563 6.563 0 01-2.064-1.39 6.564 6.564 0 01-1.39-2.063A6.33 6.33 0 010 6.5c0-.9.17-1.744.512-2.535a6.564 6.564 0 011.39-2.064A6.564 6.564 0 013.964.511 6.33 6.33 0 016.5 0c.9 0 1.744.17 2.535.512.79.341 1.479.804 2.064 1.39a6.563 6.563 0 011.39 2.063c.34.79.511 1.636.511 2.535 0 .9-.17 1.744-.512 2.535a6.563 6.563 0 01-1.39 2.064 6.563 6.563 0 01-2.063 1.39A6.329 6.329 0 016.5 13z"
                    ></path>
                  </svg>
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div>
              <TextField
                type="email"
                name="email"
                id="standard-basic"
                label="Email Address"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.email}
              />{" "}
              {formik.touched.email && formik.errors.email && (
                <p className=" errorMess ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="none"
                    viewBox="0 0 13 13"
                  >
                    <path
                      fill="#F99393"
                      d="M5.85 9.75h1.3v-3.9h-1.3v3.9zm.65-5.2a.629.629 0 00.463-.187.629.629 0 00.187-.463.629.629 0 00-.187-.463.629.629 0 00-.463-.187.629.629 0 00-.463.187.629.629 0 00-.187.463c0 .184.062.339.187.463a.629.629 0 00.463.187zm0 8.45c-.9 0-1.744-.17-2.535-.512a6.563 6.563 0 01-2.064-1.39 6.564 6.564 0 01-1.39-2.063A6.33 6.33 0 010 6.5c0-.9.17-1.744.512-2.535a6.564 6.564 0 011.39-2.064A6.564 6.564 0 013.964.511 6.33 6.33 0 016.5 0c.9 0 1.744.17 2.535.512.79.341 1.479.804 2.064 1.39a6.563 6.563 0 011.39 2.063c.34.79.511 1.636.511 2.535 0 .9-.17 1.744-.512 2.535a6.563 6.563 0 01-1.39 2.064 6.563 6.563 0 01-2.063 1.39A6.329 6.329 0 016.5 13z"
                    ></path>
                  </svg>
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div>
              <TextField
                type="number"
                name="phone"
                id="standard-basic"
                label="Phone No"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className=" errorMess ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="none"
                    viewBox="0 0 13 13"
                  >
                    <path
                      fill="#F99393"
                      d="M5.85 9.75h1.3v-3.9h-1.3v3.9zm.65-5.2a.629.629 0 00.463-.187.629.629 0 00.187-.463.629.629 0 00-.187-.463.629.629 0 00-.463-.187.629.629 0 00-.463.187.629.629 0 00-.187.463c0 .184.062.339.187.463a.629.629 0 00.463.187zm0 8.45c-.9 0-1.744-.17-2.535-.512a6.563 6.563 0 01-2.064-1.39 6.564 6.564 0 01-1.39-2.063A6.33 6.33 0 010 6.5c0-.9.17-1.744.512-2.535a6.564 6.564 0 011.39-2.064A6.564 6.564 0 013.964.511 6.33 6.33 0 016.5 0c.9 0 1.744.17 2.535.512.79.341 1.479.804 2.064 1.39a6.563 6.563 0 011.39 2.063c.34.79.511 1.636.511 2.535 0 .9-.17 1.744-.512 2.535a6.563 6.563 0 01-1.39 2.064 6.563 6.563 0 01-2.063 1.39A6.329 6.329 0 016.5 13z"
                    ></path>
                  </svg>
                  {formik.errors.phone}
                </p>
              )}
            </div>
           <div>
           <TextField
              type="text"
              name="subject"
              id="standard-basic"
              label="Subject"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.subject}
            />
           </div>
            <div>
              <TextField
                type="text"
                name="location"
                id="standard-basic"
                label="Address"
                variant="standard"
                onChange={formik.handleChange}
                value={formik.values.location}
              />
              {formik.touched.location && formik.errors.location && (
                <p className=" errorMess ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="none"
                    viewBox="0 0 13 13"
                  >
                    <path
                      fill="#F99393"
                      d="M5.85 9.75h1.3v-3.9h-1.3v3.9zm.65-5.2a.629.629 0 00.463-.187.629.629 0 00.187-.463.629.629 0 00-.187-.463.629.629 0 00-.463-.187.629.629 0 00-.463.187.629.629 0 00-.187.463c0 .184.062.339.187.463a.629.629 0 00.463.187zm0 8.45c-.9 0-1.744-.17-2.535-.512a6.563 6.563 0 01-2.064-1.39 6.564 6.564 0 01-1.39-2.063A6.33 6.33 0 010 6.5c0-.9.17-1.744.512-2.535a6.564 6.564 0 011.39-2.064A6.564 6.564 0 013.964.511 6.33 6.33 0 016.5 0c.9 0 1.744.17 2.535.512.79.341 1.479.804 2.064 1.39a6.563 6.563 0 011.39 2.063c.34.79.511 1.636.511 2.535 0 .9-.17 1.744-.512 2.535a6.563 6.563 0 01-1.39 2.064 6.563 6.563 0 01-2.063 1.39A6.329 6.329 0 016.5 13z"
                    ></path>
                  </svg>
                  {formik.errors.location}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className=" submitForm focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 
      cursor-pointer
      rounded-md bg-brand text-[#fff] border-brand font-rubik xl:text-lg text-sm border px-6 h-12 py-2 flex items-center gap-3 xl:text-xl lg:h-[4rem]"
          >
            Submit
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="10" y1="14" x2="21" y2="3"></line>
              <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
          </button>
        </form>
      </div>
      <Modal open={isSubmit} onClose={handleChange}>
          <LoaderComponent showLoader={showLoader}/>
      </Modal>
    </>
  );
}

export default ContactUsForm;
