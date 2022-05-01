import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ControllableStates(props) {
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");

  const options = props.data;
  
  return (
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.textRegion(newValue);
        }}
        name={props.placeholder}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 310,marginTop:"15px" }}
        renderInput={(params) => <TextField placeholder="Quelle est votre ville" {...params} variant="outlined" />}
      />
    </div>
  );
}
