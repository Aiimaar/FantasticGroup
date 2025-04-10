 import React from "react";
 import { AllPicrturesWrapper,PictureHolder,SmallPictureWrapper } from "../../components/DetailsPageComponents/images.styled";

 const Images = () => {
    return(
        <AllPicrturesWrapper>
        <PictureHolder>
          {/* Add your details page content here */}
        </PictureHolder>
        <div style={{ display: "flex", gap: "18px" }}>
          <SmallPictureWrapper />
          <SmallPictureWrapper />
          <SmallPictureWrapper />
        </div>
      </AllPicrturesWrapper>
    )

 }

 export default Images;