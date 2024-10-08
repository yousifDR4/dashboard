import { useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import setCanvasPreview from "../../../utils/setCanvasPreview";
export default function useCrop(imageUrl) {
  const [crop, setCrop] = useState();
  const ImageRef = useRef(null);
  const CanvesRef = useRef(null);
  const aspectRatio = 1;
  const Min_dimension = 150;
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
  return (
    <>
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
      <button
        className="bg-red-500"
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
          console.log(dataUrl);
        }}
      >
        crop image
      </button>
      {crop && (
        <canvas
          ref={CanvesRef}
          className="mt-4"
          style={{
            display: "block",
            width: "150px",
            height: "150px",
            margin: "auto",
            border: "1px solid black",
          }}
        />
      )}
    </>
  );
}
