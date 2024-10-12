import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const init = {
  name: "",
  atu: null,
  ltu: null,
  images: null,
  contrary: null,
  description: "",
  shisha: null,
  zip: null,
  mobile: null,
  discount: null,
  cover_image: null,
  rating: null,
  street: "",
  note: "",
  updated_at: "",
  govId: null,
  cityId: null,
};
const validationSchema = Yup.object({
  price: Yup.number("is number").required("price is required"),
  name: Yup.string("is string").required("price is required"),
});
export default function Restaurant() {
  const handleSubmit = async (values, { resetForm }) => {};
  return (
    <div
      style={{
        height: "calc(100vh - 64px)",
        paddingRight: "20px",
        overflowY: "auto",
      }}
    >
      <Formik
        initialValues={init}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty }) => (
          <Form className="pl-5 pb-28" encType="multipart/form-data">
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
                <Field
                  as="select"
                  id="contrary"
                  name="contrary"
                  placeholder="Enter contrary"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">iraq</option>
                </Field>
                <ErrorMessage
                  name="contrary"
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

              <div>
                <label
                  htmlFor="govId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Goverment
                </label>
                <Field
                  as="select"
                  id="govId"
                  name="govId"
                  placeholder="Enter Goverment"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">select</option>
                </Field>
                <ErrorMessage
                  name="govId"
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
                </Field>
                <ErrorMessage
                  name="cityId"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </section>
           
            <div className="flex justify-center">
              <button
                disabled={!(isValid && dirty)}
                type="submit"
                className="max-w[440px] w-[440px] mt-8 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 transition-colors"
              >
                Add Dish
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
