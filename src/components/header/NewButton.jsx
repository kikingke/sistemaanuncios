import React from 'react'
import { Link } from "react-router-dom";

export default function NewButton() {
  return (
    <Link  to="/new/">
      <button className="btnd btnNew"><i className="bi bi-plus-circle"></i> Publicar Anuncio</button>
    </Link>
  )
}
