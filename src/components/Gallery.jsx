import React from "react";
import Frogs from "./Frogs";

export default function Gallery() {
  return (
    <div className="Gallery">
      <Frogs
        title={"False Toad"}
        imageUrl={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Telmatobufo_bullocki_%E2%80%94_Edgardo_Patricio_Flores_Flores_001.jpg/765px-Telmatobufo_bullocki_%E2%80%94_Edgardo_Patricio_Flores_Flores_001.jpg"
        }
        description={
          "Telmatobufo is a genus of frogs (false toads) endemic to southern Chile."
        }
      ></Frogs>
      <Frogs
        title={"True Toad"}
        imageUrl={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bufo_bufo.jpg/800px-Bufo_bufo.jpg"
        }
        description={
          "A true toad is any member of the family Bufonidae, in the order Anura (frogs and toads). This is the only family of anurans in which all members are known as toads, although some may be called frogs (such as harlequin frogs)."
        }
      ></Frogs>
    </div>
  );
}
