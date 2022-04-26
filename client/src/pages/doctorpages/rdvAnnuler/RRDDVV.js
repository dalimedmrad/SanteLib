import React from "react";

const RRDDVV = ({ rdv, key }) => {
  return (
    <tr key={key}>
      <td>{rdv.client_name}</td>
      <td>{rdv.phone}</td>
      <td>{rdv.mode}</td>
      <td>
        {rdv.date.substring(0, 10)} à {rdv.heure}
      </td>
    </tr>
  );
};

export default RRDDVV;
