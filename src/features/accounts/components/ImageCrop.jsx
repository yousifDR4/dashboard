import { useState } from "react";
import ReactCrop from "react-image-crop";

export function ImageCrop({ src }) {
  const [crop, setCrop] = useState();
  return (
    <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
      <img src={src} />
    </ReactCrop>
  );
}
