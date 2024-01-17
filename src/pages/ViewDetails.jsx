import React from "react";
import BodyUp from "../components/BodyUp";
import DetailsForm from "../components/DetailsForm";
import DetailsFormBody from "../components/DetailsFormBody";
import DetailsProfile from "../components/DetailsProfile";

function ViewDetails() {
  return (
    <div>
      <BodyUp/>
      <DetailsProfile/>
      <DetailsFormBody />
      <DetailsForm />
    </div>
  );
}

export default ViewDetails;
