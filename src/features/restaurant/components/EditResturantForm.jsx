import { Formik } from "formik";
import { memo, useState } from "react";
import useCities from "../hooks/useCities";
import useContries from "../hooks/useContries";
import { TabScroll, TabsContainer } from "../styledcomponents";

import * as Yup from "yup";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateRestaurant } from "../service/restaurant";
import { useQueryClient } from "@tanstack/react-query";

const validationSchema = Yup.object({
  mobile: Yup.number("is number").required("mobile is required"),
  name: Yup.string("is string").required("name is required"),
});
const EditResturantForm = () => {
  const queryClient = useQueryClient();
  const [currentForm, setCurrentForm] = useState(0);
  const [country, setCountry] = useState("iraq");
  const {
    isLoading: citiesLoading,
    error: CitiesError,
    data: cities,
  } = useCities("iraq");
  const {
    data: countries,
    error: countriesError,
    isLoading: countriesLoading,
  } = useContries();
  const navgate = useNavigate();
  const selectedRestaurant = useSelector((state) => state.restaurants.selected);
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  console.log(restaurants);

  const init = {
    name: restaurants[selectedRestaurant]?.name ?? "",
    atu: restaurants[selectedRestaurant]?.atu ?? "",
    ltu: restaurants[selectedRestaurant]?.ltu ?? "",
    country: restaurants[selectedRestaurant]?.country ?? "",
    description: restaurants[selectedRestaurant]?.description ?? "",
    shisha: restaurants[selectedRestaurant]?.shisha ?? "",
    mobile: restaurants[selectedRestaurant]?.mobile ?? "",
    discount: restaurants[selectedRestaurant]?.discount ?? "",
    rating: restaurants[selectedRestaurant]?.rating ?? "",
    street: restaurants[selectedRestaurant]?.street ?? "",
    note: restaurants[selectedRestaurant]?.note ?? "",
    city: restaurants[selectedRestaurant]?.city ?? "",
  };
  const handleSubmit = async (values, { resetForm }) => {
    Object.keys(values).forEach((key) => {
      if (values[key] === "" || key === "atu" || key === "ltu") {
        delete values[key];
      }
    });
    console.log(restaurants[selectedRestaurant]);

    const res = await updateRestaurant(
      restaurants[selectedRestaurant].id,
      values
    );

    const k = await queryClient.invalidateQueries(["Resturants", "Resturants"]);
  };
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
        {restaurants[selectedRestaurant] ? (
          <Formik
            initialValues={init}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ isValid, dirty, setFieldValue, values, isSubmitting }) =>
              citiesLoading || countriesLoading ? (
                <div>loading</div>
              ) : (
                <Outlet
                  context={[
                    isValid,
                    dirty,
                    setFieldValue,
                    values,
                    setCountry,
                    countries,
                    cities,
                    isSubmitting,
                  ]}
                />
              )
            }
          </Formik>
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
};
export default EditResturantForm;
