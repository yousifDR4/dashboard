import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LoadOptions from "./LoadOptions";
import { useOutletContext } from "react-router-dom";

const DataForm = () => {
  const [isValid, dirty, setFieldValue, values, cities, countries, setCountry] =
    useOutletContext();
  return (
    <Form className="pl-5 pb-28 pt-5" encType="multipart/form-data">
      <section className="grid grid-cols-2 gap-x-10 gap-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <Field
            type="file"
            id="images"
            name="images"
            placeholder="Enter images URL"
            className="mt-1 block w-full px-4 py-2 border border-white sm:text-sm"
          />
          <ErrorMessage
            name="images"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="contrary"
            className="block text-sm font-medium text-gray-700"
          >
            Contrary
          </label>
          <select
            onChange={(e) => {
              console.log(values);

              console.log(e.target.value);
              setCountry(e.target.value);
              setFieldValue("contrary", e.target.value);
            }}
            id="contrary"
            name="contrary"
            placeholder="Enter contrary"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <LoadOptions data={countries} Objkey={"name"} />
          </select>
          <ErrorMessage
            name="contrary"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="cityId"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <Field
            as="select"
            id="cityId"
            name="cityId"
            placeholder="Enter city ID"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">select</option>
            <LoadOptions data={cities} />
          </Field>
          <ErrorMessage
            name="cityId"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <Field
            type="text"
            id="description"
            name="description"
            placeholder="Enter description"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="description"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="shisha"
            className="block text-sm font-medium text-gray-700"
          >
            Shisha
          </label>
          <Field
            as="select"
            id="shisha"
            name="shisha"
            placeholder="Enter shisha"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">select</option>
            <option value="true">yes</option>
            <option value="false">no</option>
          </Field>
          <ErrorMessage
            name="shisha"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-medium text-gray-700"
          >
            Zip
          </label>
          <Field
            type="number"
            id="zip"
            name="zip"
            placeholder="Enter zip"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="zip"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile
          </label>
          <Field
            type="number"
            id="mobile"
            name="mobile"
            placeholder="Enter mobile"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="mobile"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="discount"
            className="block text-sm font-medium text-gray-700"
          >
            Discount
          </label>
          <Field
            type="number"
            id="discount"
            name="discount"
            placeholder="Enter discount"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="discount"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="cover_image"
            className="block text-sm font-medium text-gray-700"
          >
            Cover Image
          </label>
          <Field
            type="file"
            id="cover_image"
            name="cover_image"
            placeholder="Enter cover image URL"
            className="mt-1 block w-full px-4 py-2 border border-white"
          />
          <ErrorMessage
            name="cover_image"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <Field
            type="number"
            id="rating"
            name="rating"
            placeholder="Enter rating"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="rating"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="street"
            className="block text-sm font-medium text-gray-700"
          >
            Street
          </label>
          <Field
            type="text"
            id="street"
            name="street"
            placeholder="Enter street"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <ErrorMessage
            name="street"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
        <div>
          <label
            htmlFor="note"
            className="block text-sm font-medium text-gray-700"
          >
            Note
          </label>
          <Field
            type="text"
            id="note"
            name="note"
            placeholder="Enter note"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </section>

      <div className="flex justify-center">
        <button
          disabled={!(isValid && dirty)}
          type="submit"
          className="max-w[440px] w-[440px] mt-8 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 transition-colors"
        >
          Edit Resturant
        </button>
      </div>
    </Form>
  );
};

export default DataForm;
