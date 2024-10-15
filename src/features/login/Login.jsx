import React, { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import login from "./services/login";
import validateLogin from "../../utils/validateLogin";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { getToken, setToken } from "../../store/jwt";
import { useQueryClient } from "@tanstack/react-query";
import UseResturants from "../selecetRestaurnt/hooks/useResturants";
import { getUserRestaurants } from "../dashboard/service/Owners";

function Login() {
  const dispatchRedux = useDispatch();
  const navigate = useNavigate();
  const QueryClient = useQueryClient();
  useEffect(() => {
    if (getToken() !== null) {
      navigate("/");
    }
  }, []);
  const handlelogin = async (values) => {
    login(values)
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          console.log(response.data.token);
          setToken(response.data.token);
          dispatchRedux(
            setUser({
              ...values,
              id: response.data.id,
              token: response.data.token,
            })
          );
          QueryClient.refetchQueries(["Resturants", "Resturants"])
            .then(() => {
              navigate("/Dashboard");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <main className="flex px-1 items-center place-content-center h-[100vh]">
      <div
        className="bg-white h-fit rounded-3xl border-2 border-[#C8CBD9] shadow-sm flex-grow md:grow-[0.2]
        md:py-10 md:px-14 py-5 px-3 w-[250px] "
      >
        <div className="text-2xl font-bold text-center mb-12 ">Sign in</div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            handlelogin(values);
          }}
          validate={(values) => validateLogin(values)}
        >
          {(form) => {
            return (
              <Form className="flex flex-col w">
                <section className="flex justify-center">
                  <label className="max-w-[528px] flex-1 mb-1" htmlFor="email">
                    Email or mobile phone number
                  </label>
                </section>
                <div className="flex justify-center">
                  <Field
                    className="p-1 pl-3 max-w-[528px] border-2 border-[#C8CBD9] flex-1 h-14 rounded-xl outline-none"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email@example.com"
                    autoComplete="email"
                  />
                </div>
                <section className="flex justify-center">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 pl-3 text-sm mt-1 max-w-[528px] flex-1"
                  />
                </section>
                <section className="flex justify-center">
                  <label
                    className="max-w-[528px] flex-1 mt-6 mb-1"
                    htmlFor="password"
                  >
                    Your password
                  </label>
                </section>
                <div className="flex justify-center">
                  <Field
                    className="p-1 pl-3 max-w-[528px] flex-1 h-14 rounded-xl border-2 border-[#C8CBD9] outline-none"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="12345678"
                  />
                </div>
                <section className="flex justify-center mb-6">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm pl-3 mt-1 max-w-[528px] flex-1"
                  />
                </section>
                <section className="flex justify-center">
                  <button
                    type="submit"
                    className="h-14 duration-200 transition-all text-white font-medium text-xl rounded-3xl disabled:bg-[#C3C3C3] bg-[#5A6ACF] max-w-[528px] flex-1"
                    disabled={!(form.isValid && form.dirty)}
                  >
                    Submit
                  </button>
                </section>
                <section className="flex justify-center mb-14 mt-10">
                  <p className="pl-3 max-w-[528px] flex-1 text-center">
                    By continuing, you agree to the{" "}
                    <Link className="underline-offset-1">Terms of use</Link> and{" "}
                    <Link>Privacy Policy.</Link>
                  </p>
                </section>
              </Form>
            );
          }}
        </Formik>
      </div>
    </main>
  );
}
export default Login;
