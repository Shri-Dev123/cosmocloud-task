import React from "react";

const Field = ({
  name,
  type,
  value,
  onChange,
  onDelete,
  onAddSubfield,
  onDeleteSubfield,
}) => {
  const handleNameChange = (e) => {
    const newValue = { ...value, name: e.target.value };
    onChange(newValue);
  };

  const handleTypeChange = (e) => {
    const newValue = { ...value, type: e.target.value };
    if (e.target.value !== "Object") {
      delete newValue.fields;
    } else {
      newValue.fields = [];
    }
    onChange(newValue);
  };

  const handleSubfieldChange = (subfieldIndex, subfieldValue) => {
    const newValue = { ...value };
    newValue.fields[subfieldIndex] = subfieldValue;
    onChange(newValue);
  };

  const handleSubfieldDelete = (subfieldIndex) => {
    onDeleteSubfield(subfieldIndex);
  };

  const handleAddSubfield = () => {
    const newValue = { ...value };
    if (!newValue.fields) {
      newValue.fields = [];
    }
    newValue.fields.push({ name: "", type: "String" });
    onChange(newValue);
  };

  return (
    <div className="field">
      <div className="field-header">
        <div className="field-name">
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <div className="field-type">
          <label>
            Type:
            <select value={type} onChange={handleTypeChange}>
              <option value="String">String</option>
              <option value="Number">Number</option>
              <option value="Boolean">Boolean</option>
              <option value="Object">Object</option>
            </select>
          </label>
        </div>
        <div className="field-actions">
          <button onClick={onDelete}>Delete</button>
          {type === "Object" && (
            <button onClick={handleAddSubfield}>Add Subfield</button>
          )}
        </div>
      </div>
      {type === "Object" && (
        <div className="subfields">
          {value.fields &&
            value.fields.map((subfield, subfieldIndex) => (
              <div className="subfield" key={subfieldIndex}>
                <Field
                  name={subfield.name}
                  type={subfield.type}
                  value={subfield}
                  onChange={(subfieldValue) =>
                    handleSubfieldChange(subfieldIndex, subfieldValue)
                  }
                  onDelete={() => handleSubfieldDelete(subfieldIndex)}
                  onAddSubfield={() => {
                    const newValue = { ...subfield };
                    if (!newValue.fields) {
                      newValue.fields = [];
                    }
                    newValue.fields.push({ name: "", type: "String" });
                    handleSubfieldChange(subfieldIndex, newValue);
                  }}
                  onDeleteSubfield={(nestedSubfieldIndex) => {
                    const newValue = { ...subfield };
                    newValue.fields.splice(nestedSubfieldIndex, 1);
                    handleSubfieldChange(subfieldIndex, newValue);
                  }}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Field;
