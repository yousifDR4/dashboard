/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import setCanvasPreview from "../../../utils/setCanvasPreview";
export default function ImageCrop({ imageUrl, uploadCroppedImage }) {
  const [crop, setCrop] = useState();
  const ImageRef = useRef(null);
  const CanvesRef = useRef(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const aspectRatio = 1;
  const Min_dimension = 133;
  const handleImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const temp = makeAspectCrop(
      {
        unit: "%",
        width: 25,
      },
      aspectRatio,
      width,
      height
    );
    setCrop(centerCrop(temp, width, height));
  };
  console.log(imageUrl);

  if (imageUrl === null) {
    console.log("no image");

    return "";
  } else
    return (
      <>
        <h1 className="font-semibold text-2xl pl-9 pt-7">Edit image:</h1>
        <div className="px-10">
          {imageUrl && (
            <ReactCrop
              crop={crop} // pass the crop state here
              onChange={(c) => setCrop(c)}
              circularCrop
              keepSelection
              maxWidth={Min_dimension}
              aspect={1} // Optional: Set a fixed aspect ratio
            >
              <img
                src={imageUrl}
                ref={ImageRef}
                onLoad={handleImageLoad}
                alt="upload"
                style={{ maxWidth: "100%" }}
                // This will now work correctly
              />
            </ReactCrop>
          )}
        </div>

        <button
          className="text-white font-medium text-lg rounded-3xl bg-[#5A6ACF] h-12 w-[300px]"
          onClick={() => {
            setCanvasPreview(
              ImageRef.current,
              CanvesRef.current,
              convertToPixelCrop(
                crop,
                ImageRef.current.width,
                ImageRef.current.height
              )
            );
            const dataUrl = CanvesRef.current.toDataURL(); // this will give you the cropped image;
            setCroppedImageUrl(dataUrl); // Store the cropped image URL
            uploadCroppedImage(dataUrl);
          }}
        >
          crop image
        </button>
        <div className="hidden">
          {crop && (
            <canvas
              ref={CanvesRef}
              className="mt-4  hidden"
              style={{
                display: "block",
                width: "150px",
                height: "150px",
                margin: "auto",
                border: "1px solid black",
              }}
            />
          )}
        </div>

        {croppedImageUrl && (
          <a
            href={croppedImageUrl}
            download="cropped-image.png" // Filename for the download
            className="bg-blue-500 text-white px-4 py-2 mt-4 block text-center"
          >
            Download Cropped Image
          </a>
        )}
      </>
    );
}
