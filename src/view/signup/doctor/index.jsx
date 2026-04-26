import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from '../../../config';
import Header from '../../../components/Header';
import { useEffect } from 'react';


export default function DoctorSignUp() {
    const navigate = useNavigate()

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/ecommerceStore/dashboard')
                const uid = user.uid;
                // ...
            }
        });
    }, [navigate])

    return (
        <Formik
            initialValues={{ email: '', password: '', clinicName: '', doctorName: '' }}
            validate={values => {
                const errors = {};
                if (!values.clinicName) {
                    errors.clinicName = 'Required';
                }
                if (!values.doctorName) {
                    errors.doctorName = 'Required';
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                } else if (values.password.length < 8) {
                    errors.password = 'Password must have 8 letters';
                }
                if (values.confirmPassword !== values.password) {
                    errors.confirmPassword = 'Password does not match';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, values.email, values.password)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        toast.success(user.email)
                        setSubmitting(false);
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        toast.error(errorMessage)
                        // ..
                    });

            }}
        >
            {({ isSubmitting }) => (
                <>
                    <Header />
                    <div className='w-full h-screen flex flex-col items-center justify-center'>
                        <div className='w-150'>

                            <div >
                                <Form className="flex flex-wrap gap-5 justify-center">
                                    <h1 className='text-4xl font-medium m-10'>Sign Up as a <span className='text-green-500 font-bold'>Doctor</span></h1>

                                    <div name='doctorName' className='w-65 flex flex-col gap-2 '>
                                        <div className='relative left-2 flex gap-1.5 items-center'>
                                            <label htmlFor="doctorName" className='text-green-700'>Doctor Name</label>
                                            <ErrorMessage name='doctorName' component='div' className='text-red-500 text-[10px]' />
                                        </div>
                                        <Field className="w-full h-10 border-green-500 border-2 rounded-sm p-2" type='text' name='doctorName' placeholder='Dr.' id='doctorName' />
                                    </div>

                                    <div name='clinicName' className='w-65 flex flex-col gap-2 '>
                                        <div className='relative left-2 flex gap-1.5 items-center'>
                                            <label htmlFor="clinicName" className='text-green-700'>Clinic Name</label>
                                            <ErrorMessage name='clinicName' component='div' className='text-red-500 text-[10px]' />
                                        </div>
                                        <Field className="w-full h-10 border-green-500 border-2 rounded-sm p-2" type='text' name='clinicName' placeholder='The Clinic' id='clinicName' />
                                    </div>

                                    <div name='email' className='w-135 flex flex-col gap-2 '>
                                        <div className='relative left-2 flex gap-1.5 items-center'>
                                            <label htmlFor="email" className='text-green-700'>Email</label>
                                            <ErrorMessage name='email' component='div' className='text-red-500 text-[10px]' />
                                        </div>
                                        <Field className="w-full h-10 border-green-500 border-2 rounded-sm p-2" type='email' name='email' placeholder='Enter your email' id='email' />
                                    </div>

                                    <div name='password' className='w-65 flex flex-col gap-2 '>
                                        <div className='relative left-2 flex gap-1.5 items-center'>
                                            <label htmlFor="password" className='text-green-700'>Password</label>
                                            <ErrorMessage name='password' component='div' className='text-red-500 text-[10px]' />
                                        </div>
                                        <Field className="w-full h-10 border-green-500 border-2 rounded-sm p-2" type='password' name='password' placeholder='Password' id='password' />
                                    </div>

                                    <div name='confirmPassword' className='w-65 flex flex-col gap-2 '>
                                        <div className='relative left-2 flex gap-1.5 items-center'>
                                            <label htmlFor="confirmPassword" className='text-green-700'>Confirm Password</label>
                                            <ErrorMessage name='confirmPassword' component='div' className='text-red-500 text-[10px]' />
                                        </div>
                                        <Field className="w-full h-10 border-green-500 border-2 rounded-sm p-2" type='password' name='confirmPassword' placeholder='Confirm Password' id='confirmPassword' />
                                    </div>

                                    <div className='w-50 h-10'>
                                        <button disabled={isSubmitting} type='submit' className={`w-full h-full bg-green-300 rounded-lg text-green-700 font-bold cursor-pointer ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}>
                                            Submit</button>
                                    </div>

                                </Form>

                            </div>
                        </div>

                        <div className='mt-20 text-sm'>Don't have an account. <Link className='text-blue-500 underline' to={"/ecommerceStore/"}>Sign in</Link></div>

                    </div>

                </>
            )}
        </Formik>
    )
}