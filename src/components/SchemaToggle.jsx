import React from "react";

export default function SchemaToggle(props) {
  const modeSchemaClass = {
    true: "dark",
    false: "light"
  }

  return (
    <div className="schema-toggle">
      <p>Light</p>
      <input id="SchemaSlider" type="checkbox" value={props.darkSchema}
          onChange={props.toggleDarkMode}/>
      <label className={modeSchemaClass[!props.darkSchema]} htmlFor="SchemaSlider" />
      <p>Dark</p>
    </div>
  );
}