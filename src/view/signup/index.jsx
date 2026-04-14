import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router';
import { toast } from 'react-toastify';


export default function SignUp() {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.firstName) {
                    errors.firstName = 'Required';
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
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    toast.success("welcome to "+ values.firstName + " " + values.lastName)
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <>
                    <div className="flex-grow h-full overflow-y-auto">
                        <div className="relative flex flex-col bg-alternative min-h-screen">
                            <div className="absolute top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 mt-6">

                            </div>
                            <div className="flex flex-1 h-full">
                                <main className="flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-studio border-default">
                                    <div className="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
                                        <div className="mb-10">
                                            <h1 className="mt-8 mb-2 lg:text-3xl font-bold">Welcome</h1>
                                            <h2 className="text-sm text-foreground-light">
                                                Sign Up to your account
                                            </h2>
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <Form id="sign-in-Form" className="flex flex-col gap-4">
                                                <div>
                                                    <div
                                                        name="firstName"
                                                        className="relative text-base md:text-sm flex flex-col gap-2"
                                                    >
                                                        <div
                                                            className="transition-all duration-500 ease-in-out flex flex-row gap-2 justify-between"
                                                            data-Formlayout-id="labelContainer"
                                                        >
                                                            <label
                                                                className="text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm transition-colors text-foreground flex gap-2 items-center break-words leading-normal"
                                                                htmlFor="firstName"
                                                                data-Formlayout-id="FormLabel"
                                                            >
                                                                <span>First Name</span>
                                                            </label>
                                                        </div>
                                                        <div
                                                            className="transition-all duration-500 ease-in-out order-1 col-span-12"
                                                            data-Formlayout-id="dataContainer"
                                                        >
                                                            <div className="" data-Formlayout-id="nonBoxInputContainer">
                                                                <Field
                                                                    type="text"
                                                                    name="firstName"
                                                                    placeholder="Khalid A."
                                                                    className="flex w-full rounded-md border border-control read-only:border-button bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted read-only:text-foreground-light focus:ring-background-control focus:border-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-muted aria-[] aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive text-base md:text-sm leading-4 px-3 py-2 h-[34px]"
                                                                />
                                                            </div>
                                                            <ErrorMessage name="firstName" component="div" className='text-red-500 mt-1' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        name="lastName"
                                                        className="relative text-base md:text-sm flex flex-col gap-2"
                                                    >
                                                        <div
                                                            className="transition-all duration-500 ease-in-out flex flex-row gap-2 justify-between"
                                                            data-Formlayout-id="labelContainer"
                                                        >
                                                            <label
                                                                className="text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm transition-colors text-foreground flex gap-2 items-center break-words leading-normal"
                                                                htmlFor="lastName"
                                                                data-Formlayout-id="FormLabel"
                                                            >
                                                                <span>Last Name</span>
                                                            </label>
                                                        </div>
                                                        <div
                                                            className="transition-all duration-500 ease-in-out order-1 col-span-12"
                                                            data-Formlayout-id="dataContainer"
                                                        >
                                                            <div className="" data-Formlayout-id="nonBoxInputContainer">
                                                                <Field
                                                                    type="text"
                                                                    name="lastName"
                                                                    placeholder="optional"
                                                                    className="flex w-full rounded-md border border-control read-only:border-button bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted read-only:text-foreground-light focus:ring-background-control focus:border-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-muted aria-[] aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive text-base md:text-sm leading-4 px-3 py-2 h-[34px]"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        name="email"
                                                        className="relative text-base md:text-sm flex flex-col gap-2"
                                                    >
                                                        <div
                                                            className="transition-all duration-500 ease-in-out flex flex-row gap-2 justify-between"
                                                            data-Formlayout-id="labelContainer"
                                                        >
                                                            <label
                                                                className="text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm transition-colors text-foreground flex gap-2 items-center break-words leading-normal"
                                                                htmlFor="email"
                                                                data-Formlayout-id="FormLabel"
                                                            >
                                                                <span>Email</span>
                                                            </label>
                                                        </div>
                                                        <div
                                                            className="transition-all duration-500 ease-in-out order-1 col-span-12"
                                                            data-Formlayout-id="dataContainer"
                                                        >
                                                            <div className="" data-Formlayout-id="nonBoxInputContainer">
                                                                <Field
                                                                    type="email"
                                                                    name="email"
                                                                    placeholder="you@example.com"
                                                                    className="flex w-full rounded-md border border-control read-only:border-button bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted read-only:text-foreground-light focus:ring-background-control focus:border-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-muted aria-[] aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive text-base md:text-sm leading-4 px-3 py-2 h-[34px]"
                                                                />
                                                            </div>
                                                            <ErrorMessage name="email" component="div" className='text-red-500 mt-1' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <div>
                                                        <div
                                                            name="password"
                                                            className="relative text-base md:text-sm flex flex-col gap-2"
                                                        >
                                                            <div
                                                                className="transition-all duration-500 ease-in-out flex flex-row gap-2 justify-between"
                                                                data-Formlayout-id="labelContainer"
                                                            >
                                                                <label
                                                                    className="text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm transition-colors text-foreground flex gap-2 items-center break-words leading-normal"
                                                                    htmlFor="password"
                                                                    data-Formlayout-id="FormLabel"
                                                                >
                                                                    <span>Password</span>
                                                                </label>
                                                            </div>
                                                            <div
                                                                className="transition-all duration-500 ease-in-out order-1 col-span-12"
                                                                data-Formlayout-id="dataContainer"
                                                            >
                                                                <div
                                                                    className=""
                                                                    data-Formlayout-id="nonBoxInputContainer"
                                                                >
                                                                    <div
                                                                        className="relative"
                                                                        id=":r1o:-Form-item"
                                                                        aria-describedby=":r1o:-Form-item-description"
                                                                        aria-invalid="false"
                                                                    >
                                                                        <Field
                                                                            type="password"
                                                                            name="password"
                                                                            placeholder="••••••••"
                                                                            className="flex w-full rounded-md border border-control read-only:border-button bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted read-only:text-foreground-light focus:ring-background-control focus:border-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-muted aria-[] aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive text-base md:text-sm leading-4 px-3 py-2 h-[34px] pr-10"
                                                                        />

                                                                        <button
                                                                            data-size="tiny"
                                                                            type="button"
                                                                            title="Show password"
                                                                            aria-label="Show password"
                                                                            className="justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs py-1 h-[26px] absolute right-1 top-1 px-1.5"
                                                                            tabIndex={0}
                                                                        >
                                                                            <div className="inline-flex items-center justify-center shrink-0 [&_svg]:h-[14px] [&_svg]:w-[14px] text-foreground-lighter">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="lucide lucide-eye"
                                                                                >
                                                                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg>
                                                                            </div>
                                                                        </button>

                                                                    </div>
                                                                    <ErrorMessage name="password" component="div" className='text-red-500 mt-1' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <div>
                                                        <div
                                                            name="confirmPassword"
                                                            className="relative text-base md:text-sm flex flex-col gap-2"
                                                        >
                                                            <div
                                                                className="transition-all duration-500 ease-in-out flex flex-row gap-2 justify-between"
                                                                data-Formlayout-id="labelContainer"
                                                            >
                                                                <label
                                                                    className="text peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm transition-colors text-foreground flex gap-2 items-center break-words leading-normal"
                                                                    htmlFor="confirmPassword"
                                                                    data-Formlayout-id="FormLabel"
                                                                >
                                                                    <span>Confirm Password</span>
                                                                </label>
                                                            </div>
                                                            <div
                                                                className="transition-all duration-500 ease-in-out order-1 col-span-12"
                                                                data-Formlayout-id="dataContainer"
                                                            >
                                                                <div
                                                                    className=""
                                                                    data-Formlayout-id="nonBoxInputContainer"
                                                                >
                                                                    <div
                                                                        className="relative"
                                                                        id=":r1o:-Form-item"
                                                                        aria-describedby=":r1o:-Form-item-description"
                                                                        aria-invalid="false"
                                                                    >
                                                                        <Field
                                                                            type="password"
                                                                            name="confirmPassword"
                                                                            placeholder="confirm password"
                                                                            className="flex w-full rounded-md border border-control read-only:border-button bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted read-only:text-foreground-light focus:ring-background-control focus:border-control focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-muted aria-[] aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive text-base md:text-sm leading-4 px-3 py-2 h-[34px] pr-10"
                                                                        />

                                                                        <button
                                                                            data-size="tiny"
                                                                            type="button"
                                                                            title="Show password"
                                                                            aria-label="Show password"
                                                                            className="justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover text-xs py-1 h-[26px] absolute right-1 top-1 px-1.5"
                                                                            tabIndex={0}
                                                                        >
                                                                            <div className="inline-flex items-center justify-center shrink-0 [&_svg]:h-[14px] [&_svg]:w-[14px] text-foreground-lighter">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="lucide lucide-eye"
                                                                                >
                                                                                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg>
                                                                            </div>
                                                                        </button>

                                                                    </div>
                                                                    <ErrorMessage name="confirmPassword" component="div" className='text-red-500 mt-1' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center relative">
                                                    <div className="w-full">
                                                        <button
                                                            disabled={isSubmitting}
                                                            type="submit"
                                                            className="relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 w-full flex items-center justify-center text-base px-4 py-2 h-[42px]"
                                                        >
                                                            {isSubmitting ? 'Sign Up.....' : 'Sign Up'}
                                                        </button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                        <div className="self-center my-8 text-sm">
                                            <div>
                                                <span className="text-foreground-light">
                                                    I have an account!
                                                </span>{" "}
                                                <Link to={'/ecommerceStore'}>
                                                sign in
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                                <aside className="flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex">
                                    <div className="relative flex flex-col gap-6">
                                        <div className="absolute select-none -top-12 -left-11">
                                            <span className="text-[160px] leading-none text-foreground-muted/30">
                                                “
                                            </span>
                                        </div>
                                        <blockquote className="z-10 max-w-lg text-3xl">
                                            Very impressed by @supabase's growth. For new startups, they seem to
                                            have gone from "promising" to "standard" in remarkably short order.
                                        </blockquote>
                                        <a
                                            href="https://x.com/patrickc/status/1979157875600617913"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4"
                                        >
                                            <img
                                                src="https://supabase.com/images/twitter-profiles/_iAaSUQf_400x400.jpg"
                                                alt="patrickc"
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div className="flex flex-col">
                                                <cite className="not-italic font-medium text-foreground-light whitespace-nowrap">
                                                    @patrickc
                                                </cite>
                                            </div>
                                        </a>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </Formik>
    )
}