import React from 'react';
import { Formik, Form, Field } from 'formik';
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from 'react-flatpickr';
import * as Yup from 'yup';
import {
  Row,
  Col,
  Container
} from 'react-bootstrap';



const ContactForm = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
    color: Yup.string()
    .required('Color is required'),
    dob: Yup.string()
    .required('Date is required'),


});


 const ValidationSchemaExample = () => (
  
   <Container>
    <div style={{marginBottom:'100px'}}>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        color: '',
        dob: '',
       
      }}
      validationSchema={ContactForm}
    
      onSubmit={values => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 5))
    }}
    >
      {({ errors, values, touched, setFieldValue, setFieldTouched, handleChange, handleBlur }) => (
        <Row>
               <Form>
                 <Col sm={12}>
                 
                 <div className="form-group">
                 <label for="fisrtname">First Name</label>
                 <Field name="firstName" value={values.firstName} placeholder="Enter first name" />
          {errors.firstName && touched.firstName ? (
            <div className="errormsg">{errors.firstName}</div>
          ) : null}
          </div>
             </Col>
           
             <Col sm={12}>
             <div className="form-group">
             <label for="lastname">Last Name</label>
             <Field name="lastName" value={values.lastName} placeholder="Enter last name" />
          {errors.lastName && touched.lastName ? (
            <div className="errormsg">{errors.lastName}</div>
          ) : null}
          </div>
         

             </Col>
             <Col sm={12}>
             <div className="form-group">
             <label for="emailaddress">Email Address</label>
             <Field name="email" type="email" value={values.email} placeholder="Enter email address" />
          {errors.email && touched.email ? <div className="errormsg">{errors.email}</div> : null}
             </div>

             <div>
            
          </div>
              </Col>

              <Col sm={12}>
             <div className="form-group">
             <label for="date">Date</label>
             <Flatpickr
                  name="dob"
                  placeholder="Enter date"
                  value={values.dob}
                        onChange={date => {
                              setFieldValue("dob", date)
                        }}
                        onBlur={date => {
                        setFieldTouched("dob", date)
                        }}
                        />
                        {errors.dob && touched.dob ? (
                        <div className="errormsg">{errors.dob}</div>
                         ) : null}                                          
             </div>

             <div>
            
          </div>
              </Col>
              <Col sm={12}>
                 <div className="form-group">
                 <label for="colorname">Color Name</label>
                 <select name="color" value={values.color}  onChange={handleChange}
        onBlur={handleBlur}>
        <option selected value=''>Select color name</option>
        <option value='red'>Red</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
  
      </select>
      {errors.color && touched.color ? (
            <div className="errormsg">{errors.color}</div>
          ) : null}
     
          </div>
             </Col>
              <Col sm={12}>
                
                <button type="submit">Submit</button>
         
          </Col>
              
         
        </Form>
        </Row>
        
    
      )}
    </Formik>
  </div>

   </Container>
 
);
export default ValidationSchemaExample;