import React from "react";
import { Link } from "react-router-dom";
import { Button, Offcanvas } from "react-bootstrap";

export default function Menu({show,handleClose}) {
  return (
    <>
      <Offcanvas style={{window:"1"}} show={show} onHide={handleClose} scroll="true" backdrop= "true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
