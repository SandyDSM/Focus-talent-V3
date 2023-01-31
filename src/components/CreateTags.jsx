import React from "react";
import { Heading, Divider, TextField, Button } from "@aws-amplify/ui-react";
import HeadCreateTable from "./HeadCreateTags";

function CreateTags() {

  return (
    <div className="card flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-1 my-2">
        <Heading level={6}> Crear Etiquetas</Heading>
        <Divider />
      </div>
      <div className="flex flex-col gap-2">
      <HeadCreateTable/>
      <div className="flex flex-col sm:flex-row justify-between gap-2 px-5 ">
        <TextField placeholder="Nombre" />
        <TextField  placeholder="Español" />
        <TextField placeholder="Inglés"/>
        <TextField placeholder="Frances"/>
        <TextField  placeholder="Portugués"/>
        <TextField placeholder="Chino"/>
      </div>
      </div>
      <div className="flex justify-end px-5">
        <Button variation="primary" isDisabled={true} >Guardar</Button>
      </div>
    </div>
  );
}

export default CreateTags;
