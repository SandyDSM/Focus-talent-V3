import React from "react";
import { useState, useEffect } from "react";
import { Button, Divider, Heading, SelectField } from "@aws-amplify/ui-react";

import HeadAdmin from "../components/HeadAdmin";
import TableNotif from "../components/TableNotif";
import EditorNotification from "../components/EditorNotification";
import Modal from "../components/Modal";
import { TextField } from "@aws-amplify/ui-react";
import Swal from 'sweetalert2'


function Notif() {
  const [open, setOpen] = useState(false);
  const [cuerpo, setCuerpo] = useState("");
  const [notificaciones, setNotificaciones] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [idioma, setIdioma] = useState("idioma");
  const [idiomaDes, setIdiomaDes] = useState("");

  useEffect(() => {
    GetNotificaciones();
  }, [open]);

  const GetNotificaciones = async () => {
    try {
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_notificaciones.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            TOKEN: "8da9aebd984ef3897b280ff7efabf83d931f591b",
          }),
        }
      );
      const datos = await respdesemp.json();
      setNotificaciones(datos);
      console.log(datos);
    } catch (error) {
      setNotificaciones([]);
    }
  };

  const Insertar = async () => {
    alert(document.getElementById("idioma").value);
    try {
      const respdesemp = await fetch(
        `https://talento-itzahuia.com/SAC/gb_notificaciones.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ACCION: "Inserta",
            TITULO: document.getElementById("prueba").value,
            ASUNTO: document.getElementById("prueba").value,
            CUERPO: cuerpo,
            IDIOMA: document.getElementById("idioma").value,
            TOKEN: "8da9aebd984ef3897b280ff7efabf83d931f591b",
          }),
        }
      );
      Swal.fire({
        icon: 'success',
        text: 'La Notificación se ha guardado',
        confirmButtonText: "Entendido",
        confirmButtonColor:"#004B85"
      }).then((result) => {
        if (result.isConfirmed) {
          setOpen(false)
        }
      })
      const datos = await respdesemp.json();
    } catch (error) {
      console.log(error);
    }
  };

  function openModal(idioma) {
    setOpen(true);
    // alert(document.getElementById("prueba").defaultValue);
    const notificacion = notificaciones?.filter((e) => e.IDIOMA == idioma);
    notificacion.map((not) => {
      setTitulo(not.TITULO);
      if (idioma === "English (US)") {
        setIdioma("English (US)");
        setIdiomaDes("Inglés");
      } else if (idioma === "French (Canada)") {
        setIdioma("French (Canada)");
        setIdiomaDes("Francés");
      } else if (idioma === "Spanish (Latin America)") {
        setIdioma("Spanish (Latin America)");
        setIdiomaDes("Español");
      } else if (idioma === "Chinese (Simplified)") {
        setIdioma("Chinese (Simplified)");
        setIdiomaDes("Chino");
      } else if (idioma === "Portuguese (Brazil)") {
        setIdioma("Portuguese (Brazil)");
        setIdiomaDes("Portugués");
      } else {
        setIdioma("");
        setIdiomaDes("Seleciona");
      }
      setCuerpo(not.CUERPO);
    });
  }

  

  return (
    <div className="flex flex-col gap-4">
      <HeadAdmin title={"Administrar notificaciones"} />
      <main className="px-11 flex flex-col gap-8 mt-4">

        <Modal
          open={open}
          setOpen={setOpen}
          elementBody={
            <div className="w-full py-6 px-12 ">
              <Heading level={6}> Crear Notificación</Heading>
              <Divider />
              <div className="flex gap-6 items-end my-6">
                <TextField
                  width={"100%"}
                  id="prueba"
                  label="Asunto"
                  defaultValue={titulo}
                />
                <div className="w-full">
                  <SelectField
                    id={"idioma"}
                    placeholder="Selecciona el idioma"
                    width={"100%"}
                  
                  onChange={(e)=>setIdioma(e.target.value)}
                  >
                    
                    <option value="English (US)" >Inglés</option>
                    <option value="French (Canada)">Francés</option>
                    <option value="Spanish (Latin America)">Español</option>
                    <option value="Chinese (Simplified)">Chino</option>
                    <option value="Portuguese (Brazil)">Portugués</option>
                  </SelectField>
                </div>
              </div>
              <EditorNotification cuerpo={setCuerpo} defcuerpo={cuerpo} />
              <div
                className="flex flex-row items-center gap-6 justify-end"
                style={{ marginTop: 50, marginBottom: 50 }}
              >
                <Button onClick={()=>setOpen(false)}>Cancelar</Button>
                <Button variation="primary" style={{backgroundColor:"#004B85"}} onClick={() => Insertar()}>
                  Guardar
                </Button>
              </div>
            </div>
          }
        />

        <TableNotif
          notif={notificaciones}
          handleOpen={openModal}
          limpia={setIdioma}
        />
      </main>
    </div>
  );
}

export default Notif;
