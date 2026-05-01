import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const LOGO = "https://pruebabucketsawspruebas.s3.amazonaws.com/logo_GBT_.png";
const GB_TALENT_URL =
  "https://grupobimbo.csod.com/LMS/catalog/Welcome.aspx?tab_page_id=-67&tab_id=-1";

export default function Header({ isAdmin, onMenuOpen }) {
  return (
    <header className="w-full bg-bmb-blue flex items-center px-5 py-2.5 gap-3">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/">
          <img src={LOGO} alt="GB Talent" className="h-9 w-auto object-contain" />
        </Link>
      </div>

      {/* GB Talent link (only when not admin) */}
      {!isAdmin && (
        <a
          href={GB_TALENT_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-white text-xs hover:text-bmb-blue-20 transition-colors duration-180"
        >
          GB Talent
          <ExternalLink size={12} />
        </a>
      )}

      {/* Hamburger (admin only) */}
      {isAdmin && (
        <button
          onClick={onMenuOpen}
          aria-label="Abrir menú"
          className="flex flex-col gap-1.5 p-1.5 rounded hover:bg-white/10 transition-colors duration-180 cursor-pointer"
        >
          <span className="block w-5 h-0.5 bg-white rounded-full" />
          <span className="block w-5 h-0.5 bg-white rounded-full" />
          <span className="block w-5 h-0.5 bg-white rounded-full" />
        </button>
      )}
    </header>
  );
}
