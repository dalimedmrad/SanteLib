import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ControllableStates(props) {
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");

  const options = props.data;
  // console.log(props)
  return (
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.textFilter(newValue);
        }}
        name={props.placeholder}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 310, marginTop: "15px" }}
        renderInput={(params) => 
          <TextField
            {...params}
            style={{ fontWeight: "bold" }}
            variant="outlined"
            placeholder="Nom & prénom"
          />
        }
      />
    </div>
  );
}
