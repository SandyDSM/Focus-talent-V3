import React, { Fragment, useState, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { X, Home, ClipboardList, Tag, Bell, ShieldCheck, Users } from "lucide-react";
import Header from "./Header";
import CollaboratorsContext from "../context/collaborators";

const AVATAR = "https://pruebabucketsawspruebas.s3.amazonaws.com/Phototest/Avatar.png";

const navItems = [
  { label: "Inicio",       icon: Home,          to: "/" },
  { label: "Evaluaciones", icon: ClipboardList,  to: "/test" },
  { label: "Etiquetas",    icon: Tag,            to: "/tags" },
  { label: "Notificaciones", icon: Bell,         to: "/notif" },
  { label: "Permisos",     icon: ShieldCheck,    to: "/permissions" },
  { label: "Mi Equipo",    icon: Users,          to: "/myteam" },
];

function NavHeader() {
  const [open, setOpen] = useState(false);
  const { UserLog, usuarioActualDatos, photo, isAdmin } = useContext(CollaboratorsContext);

  useEffect(() => {
    UserLog();
  }, []);

  return (
    <>
      <Header isAdmin={isAdmin} onMenuOpen={() => setOpen(true)} />

      {/* Side drawer */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setOpen}>
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-72 bg-white shadow-xl flex flex-col">
                    {/* Drawer header */}
                    <div className="flex items-center justify-between px-5 py-4 bg-bmb-blue">
                      <div className="flex items-center gap-3">
                        <img
                          src={photo || AVATAR}
                          alt="avatar"
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-white/30 shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-white font-semibold text-sm leading-tight truncate">
                            {usuarioActualDatos.NOMBRE} {usuarioActualDatos.APELLIDOS}
                          </p>
                          <p className="text-bmb-blue-20 text-xs truncate">
                            {usuarioActualDatos.PUESTO}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setOpen(false)}
                        aria-label="Cerrar menú"
                        className="text-white/80 hover:text-white transition-colors p-1 rounded cursor-pointer"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {/* Nav items */}
                    <nav className="flex-1 py-4 overflow-y-auto">
                      {navItems.map(({ label, icon: Icon, to }) => (
                        <Link
                          key={to}
                          to={to}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 text-text-primary text-sm font-medium
                                     hover:bg-bmb-blue-light hover:text-bmb-blue transition-colors duration-150 cursor-pointer"
                        >
                          <Icon size={18} className="text-bmb-secundary shrink-0" />
                          {label}
                        </Link>
                      ))}
                    </nav>
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
