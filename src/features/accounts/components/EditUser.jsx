import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AddAccounts } from "../Services/Accounts";
import { useQueryClient } from "@tanstack/react-query";

export default function EditUser({ userId, type }) {
  const validationSchema = Yup.object({
    type: Yup.string()
      .oneOf(["owner", "supporter"], "Invalid account type")
      .required("Account type is required"),
  });
  console.log(type);

  const queryClient = useQueryClient();
  const handleSubmit = async (values, { resetForm }) => {
    await AddAccounts(userId, values); 
    await queryClient.invalidateQueries(["table", "accounts"]);
    resetForm(); 
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md h-96">
      <h2 className="text-2xl font-bold text-center mb-6">Edit User</h2>

      <Formik
        initialValues={{ type: type.toLocaleLowerCase() }} // Set initial value to current account type
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty }) => (
          <Form className="space-y-8">
            <div className="form-group">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                User Account Type
              </label>
              <Field
                as="select"
                id="type"
                name="type" // Let Formik handle the state
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select user type</option>
                <option value="owner">Owner</option>
                <option value="supporter">Supporter</option>
              </Field>
              <ErrorMessage
                name="type"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              disabled={!(isValid && dirty)}
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 transition-colors"
            >
              Edit User
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
