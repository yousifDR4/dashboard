import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AddAccounts } from "../Services/Accounts";
import { useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export default function AddUser({ usersEmail }) {
  const selectedRestaurant = useSelector((state) => state.restaurants.selected);
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const restaurantsId = restaurants[selectedRestaurant]?.id;
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .notOneOf(usersEmail, "User already exists"),
  });
  const queryClient = useQueryClient();
  const handleSubmit = async (values, { resetForm }) => {
    await AddAccounts(restaurantsId, values.email);
    await queryClient.invalidateQueries(["table", "accounts"]);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md h-96">
      <h2 className="text-2xl font-bold text-center mb-6">Add User</h2>

      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className="space-y-8">
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                User Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter user email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              disabled={!(isValid && dirty)}
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700  disabled:bg-gray-400 transition-colors"
            >
              Add User
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
