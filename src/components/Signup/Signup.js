import React from "react";
// import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./Signup.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { name: '', phone: '', email: '', confirmemail: '' },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className="formik-form">
      <h4>WANT TO INSTRUCT US FOR YOUR LEGAL MATTER? REQUEST A FIXED FEE QUOTE</h4>
          <input
             type="text"
             name="name"
             placeholder="* Your name"
            //  onChange={handleChange}
             value={formik.values.name}
           />
           {/* {errors.email && touched.email && errors.email} */}
           <input
             type="number"
             name="phone"
             placeholder="* Phone (Required)"
            //  onChange={handleChange}
             value={formik.values.phone}

           /><br/><br/>
           <input
             type="email"
             name="email"
             placeholder="* Email address"
            //  onChange={handleChange}
             value={formik.values.email}

           />
           {/* {errors.email && touched.email && errors.email} */}
           <input
             type="email"
             name="confirmemail"
             placeholder="* Confirm Email address"
            //  onChange={handleChange}
             value={formik.values.confirmemail}

           /><br/><br/>
           <input
             type="email"
             name="email"
             placeholder="* Email address"
            //  onChange={handleChange}
             value={formik.values.email}

           />
           {/* {errors.email && touched.email && errors.email} */}
           <input
             type="email"
             name="confirmemail"
             placeholder="* Confirm Email address"
            //  onChange={handleChange}
             value={formik.values.confirmemail}

           /><br/><br/>
           {/* {errors.password && touched.password && errors.password} */}
           <button type="submit">
             Submit Request
           </button>
    </form>
  );
};

export default SignupForm;