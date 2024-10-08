import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import ImageCrop from "./ImageCrop";
import { Addmenu } from "../services/menu";
const init = {
  price: "",
  name: "",
  description: "",
  image: "",
  foodCategoryId: "",
};
const validationSchema = Yup.object({
  price: Yup.number("is number").required("price is required"),
  name: Yup.string("is string").required("price is required"),
});

export default function AddDishForm() {
  const queryClient = useQueryClient();
  const [imageUrl, setImageUrl] = useState(null);
  const UplaoedImageFileRef = useRef(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };
  const uploadCroppedImage = async (croppedImageUrl) => {
    if (!croppedImageUrl) return;
    const base64Response = await fetch(croppedImageUrl);
    const blob = await base64Response.blob();
    UplaoedImageFileRef.current = blob;
    console.log(blob);
    console.log(UplaoedImageFileRef.current);
    return blob;
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("submitting");

    const formData = new FormData();
    if (UplaoedImageFileRef.current) {
      formData.append(
        "ImageFile",
        UplaoedImageFileRef.current,
        "cropped-image.png"
      );
    }
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("description", values.description);
    formData.append("foodCategoryId", values.foodCategoryId);
    try {
      const res = await Addmenu(formData, 3);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    resetForm();
  };

  return (
    <div className="w-full  ">
      <main className="grid grid-cols-2 gap-x-6">
        <div>
          <h2 className="text-2xl font-bold  mt-6 mb-6 pl-10">Add Dish</h2>
          <Formik initialValues={init} onSubmit={handleSubmit}>
            {({ isValid, dirty }) => (
              <Form className="pl-5" encType="multipart/form-data">
                <section className=" grid grid-cols-2 gap-x-10 gap-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Dish Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter category name"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      price
                    </label>
                    <Field
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Enter Dish price"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      description
                    </label>
                    <Field
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Enter Dish description"
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
                      htmlFor="type"
                      className="block text-sm font-medium text-gray-700"
                    >
                      category name
                    </label>
                    <Field
                      as="select"
                      id="category"
                      name="category" // Let Formik handle the state
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="">Select dish category</option>
                    </Field>
                  </div>
                  <div>
                    <label htmlFor="uplaodImage"></label>
                  </div>
                </section>
                <input type="file" onChange={handleImageUpload} />
                <button
                  // disabled={!(isValid && dirty)}
                  type="submit"
                  className="mt-8 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700  disabled:bg-gray-400 transition-colors"
                >
                  Add Dish
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div>
          {" "}
          <ImageCrop
            imageUrl={imageUrl}
            uploadCroppedImage={uploadCroppedImage}
          />
        </div>
      </main>
    </div>
  );
}
