// import React, { useState } from "react";
// import Field from "./Field";

// const initialData = [
//   { name: "Field 1", type: "String" },
//   { name: "Field 2", type: "Number" },
//   { name: "Field 3", type: "Boolean" },
//   {
//     name: "Field 4",
//     type: "Object",
//     fields: [
//       { name: "Subfield 1", type: "String" },
//       { name: "Subfield 2", type: "Number" }
//     ]
//   }
// ];

// const App = () => {
//   const [data, setData] = useState(initialData);

//   const handleFieldChange = (index, fieldValue) => {
//     const newData = [...data];
//     newData[index] = fieldValue;
//     setData(newData);
//   };

//   const handleAddField = () => {
//     const newData = [...data, { name: "", type: "String" }];
//     setData(newData);
//   };

//   const handleDeleteField = index => {
//     const newData = [...data];
//     newData.splice(index, 1);
//     setData(newData);
//   };

//   const handleAddSubfield = index => {
//     const newData = [...data];
//     newData[index].fields.push({ name: "", type: "String" });
//     setData(newData);
//   };

//   const handleDeleteSubfield = (fieldIndex, subfieldIndex) => {
//     const newData = [...data];
//     newData[fieldIndex].fields.splice(subfieldIndex, 1);
//     setData(newData);
//   };

//   const handleSave = () => {
//     console.log(data);
//   };

//   return (
//     <div>
//       {data.map((field, index) => (
//         <div key={index}>
//           <Field
//             name={field.name}
//             type={field.type}
//             value={field}
//             onChange={fieldValue => handleFieldChange(index, fieldValue)}
//             onDelete={() => handleDeleteField(index)}
//             onAddSubfield={() => handleAddSubfield(index)}
//             onDeleteSubfield={subfieldIndex =>
//               handleDeleteSubfield(index, subfieldIndex)
//             }
//           />
//         </div>
//       ))}
//       <button onClick={handleAddField}>Add Field</button>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import Field from "./Field";
import "./App.css";

const initialData = [
  { name: "Field 1", type: "String" },
  { name: "Field 2", type: "Number" },
  { name: "Field 3", type: "Boolean" },
  {
    name: "Field 4",
    type: "Object",
    fields: [
      { name: "Subfield 1", type: "String" },
      { name: "Subfield 2", type: "Number" }
    ]
  }
];

const App = () => {
  const [data, setData] = useState(initialData);

  const handleFieldChange = (index, fieldValue) => {
    const newData = [...data];
    newData[index] = fieldValue;
    setData(newData);
  };

  const handleAddField = () => {
    const newData = [...data, { name: "", type: "String" }];
    setData(newData);
  };

  const handleDeleteField = index => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleAddSubfield = index => {
    const newData = [...data];
    newData[index].fields.push({ name: "", type: "String" });
    setData(newData);
  };

  const handleDeleteSubfield = (fieldIndex, subfieldIndex) => {
    const newData = [...data];
    newData[fieldIndex].fields.splice(subfieldIndex, 1);
    setData(newData);
  };

  const handleSave = () => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Dynamic Form</h1>
      <div className="form">
        {data.map((field, index) => (
          <div key={index}>
            <Field
              name={field.name}
              type={field.type}
              value={field}
              onChange={fieldValue => handleFieldChange(index, fieldValue)}
              onDelete={() => handleDeleteField(index)}
              onAddSubfield={() => handleAddSubfield(index)}
              onDeleteSubfield={subfieldIndex =>
                handleDeleteSubfield(index, subfieldIndex)
              }
            />
          </div>
        ))}
        <button className="btn" onClick={handleAddField}>
          Add Field
        </button>
        <button className="btn save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default App;
