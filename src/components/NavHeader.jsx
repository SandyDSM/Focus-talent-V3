import React, { Fragment, useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import { useContext, useEffect } from "react";
import CollaboratorsContext from "../context/collaborators";


import { Dialog, Transition } from "@headlessui/react";
import BannerUser from "./BannerUser";

function NavHeader() {
  const [open, setOpen] = useState(false);
  const {UserLog, usuarioActualDatos, photo, isAdmin, showPerson} = useContext(CollaboratorsContext)

  useEffect(() => {
    UserLog();
  }, []);

  const sendOverridesHeader = {
    gb_min: {
      src: "https://pruebabucketsawspruebas.s3.amazonaws.com/logo_GBT_.png",
    },
    "Frame 13982":{
      style: { cursor: "pointer" },
    },
    iconMenuHam: {
      style: { cursor: "pointer" },
      onClick: () => setOpen(true),
    },
  };

  const sendOverridesMenu = {
    name:{children: `${usuarioActualDatos.NOMBRE} ${usuarioActualDatos.APELLIDOS}`},
    puesto:{children:`${usuarioActualDatos.PUESTO}`},

    "image 3": {
      src: photo,
    },
    "ep:close-bold": {
      style: { cursor: "pointer" },
      onClick: () => setOpen(false),
    },
    FraHome: {
      className:"hover:bg-sky-100",
      style: { cursor: "pointer" },
      onClick: () => setOpen(false),
    },
    FraTest: {
      className:"hover:bg-sky-100",
      style: { cursor: "pointer" },
      onClick: () => setOpen(false),
    },
    FraTags: {
      className:"hover:bg-sky-100",
      style: { cursor: "pointer" },
      onClick: () => setOpen(false),
    },
    FraNotif: {
      className:"hover:bg-sky-100",
      style: { cursor: "pointer" },
      onClick: () => setOpen(false),
    },

    FraPermission: {
      className:"hover:bg-sky-100",
      style: { cursor: "pointer" },
      onClick: () => setOpen(false),
    },

    FraTeam: {
      onClick: () => setOpen(false),
    },

    "Frame 451": {
      className:"hover:bg-sky-100",
      style: { cursor: "pointer" },
    },
    "Frame 13982":{
      className:"hover:bg-sky-100",
      style: { cursor: "pointer" },
    }
  };

  return (
    <>
      <Header width={"100vw"} type={`${isAdmin ? "menu" : "noMenu"}`} overrides={sendOverridesHeader} />
      {showPerson && 
      <div className="my-3">
          <BannerUser/>
      </div>
      }
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-400 bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-min">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"></div>
                    </Transition.Child>
                    <div className="h-full">
                      <Menu height={"100%"} overrides={sendOverridesMenu} />
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default NavHeader;
