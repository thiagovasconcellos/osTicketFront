import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Celtaware" width={178} height={100} />
      </Link>
      <FaUserCircle size={32} width={32} height={128} color="red" />
    </Container>
  );
}
