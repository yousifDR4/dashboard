import { Formik, Form, Field, ErrorMessage } from "formik";
import { useCallback, useEffect, useState } from "react";
import useCities from "../hooks/useCities";
import useContries from "../hooks/useContries";
import { TabScroll, TabsContainer } from "../styledcomponents";

import * as Yup from "yup";
import LoadOptions from "./LoadOptions";
import { Outlet, useNavigate } from "react-router-dom";
const init = {
  name: "",
  atu: "",
  ltu: "",
  images: "",
  contrary: "",
  description: "",
  shisha: "",
  zip: "",
  mobile: "",
  discount: "",
  cover_image: "",
  rating: "",
  street: "",
  note: "",
  cityId: "",
};
const validationSchema = Yup.object({
  mobile: Yup.number("is number").required("mobile is required"),
  name: Yup.string("is string").required("name is required"),
});
const handleSubmit = async (values, { resetForm }) => {};
const EditResturantForm = () => {
  const [currentForm, setCurrentForm] = useState(0);
  const [country, setCountry] = useState("iraq");
  const navgate = useNavigate();
  const {
    isLoading: citiesLoading,
    error: CitiesError,
    data: cities,
  } = useCities(country);
  const {
    data: countries,
    error: countriesError,
    isLoading: countriesLoading,
  } = useContries();
  console.log(country);
  return (
    <div>
      <TabScroll>
        <TabsContainer $count={8} $active={currentForm}>
          <button
            className={`  ${
              currentForm === "DataForm" ? "text-[#8884d8]" : "text-[#1F384C]"
            }`}
            onClick={() => {
              setCurrentForm(0);
              navgate("DataForm");
            }}
          >
            Data Form
          </button>
          <button
            className={`  ${
              currentForm === "LocationForm"
                ? "text-[#8884d8]"
                : "text-[#1F384C]"
            }`}
            onClick={() => {
              setCurrentForm(1);
              navgate("LocationForm");
            }}
          >
            Data Form
          </button>
        </TabsContainer>
      </TabScroll>
      <div className="h-3 shadow-sm"></div>
      <div
        style={{
          height: "calc(100vh - 100px)",
          paddingRight: "20px",
          overflowY: "auto",
        }}
      >
        <Formik
          initialValues={init}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isValid, dirty, setFieldValue, values }) => (
            <Outlet
              context={[
                isValid,
                dirty,
                setFieldValue,
                values,
                cities,
                countries,
                setCountry,
              ]}
            />
          )}
        </Formik>
      </div>
    </div>
  );
};
export default EditResturantForm;
