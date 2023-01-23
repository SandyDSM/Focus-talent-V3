import {
  CheckboxField,
  Expander,
  ExpanderItem,
  ThemeProvider,
  Theme,
  Button,
} from "@aws-amplify/ui-react";
import React from "react";

function TestCheck() {

  return (
    <div className="card m-auto">
      <div className="m-4">
        <h2 className="text-xl">EVALUACIONES</h2>
        <Button width={"100%"} variation="link" size="small" >Seleccionar todo</Button>
      </div>
      <div className="flex flex-col gap-2">
        <CheckboxField label="Talento 1" name="Talento1" value="Talento1" />
        <CheckboxField label="Talento 2" name="Talento2" value="Talento2" />
        <CheckboxField label="Talento 3" name="Talento3" value="Talento3" />
        <CheckboxField label="Talento 4" name="Talento4" value="Talento4" />
      </div>
      <div className="flex gap-4 my-4">
          <Button width={"100%"} size="small">Limpiar</Button>
          <Button width={"100%"} variation="primary" size="small" >Ver</Button>
        </div>

    </div>
  );
}

export default TestCheck;
