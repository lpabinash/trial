import React, { useState } from "react";
import "./index.css";
import treeData from "./data.json";

const TreeNode = ({ node,parent }) => {
  const [newAnimal, setNewAnimal] = useState("");

  const handleAddAnimal = (event) => {
    if (event.key === "Enter") {
      const newAnimalName = event.target.value;
      const newAnimal = { name: newAnimalName };
      if(node.hasOwnProperty("children")){
        node.children.push(newAnimal);
        console.log(node);
      }else{
        parent.children.push(newAnimal);
        console.log(parent)
      }
      event.target.value = "";
      setNewAnimal(""); 
    }
  };


  return (
    <div className="tree">
      <div className="inputField">
        <p>{node.name}</p>
        <input
          type="text"
          value={newAnimal}
          onChange={(event) => setNewAnimal(event.target.value)}
          onKeyUp={handleAddAnimal}
        />
      </div>
      {node.children &&
        node.children.map((child) => (
          <div className="indent" key={child.name}>
            <TreeNode node={child} parent={node}/>
          </div>
        ))}
    </div>
  );
};

const Tree = () => {
  return (
    <div className="tree-container">
      <TreeNode node={treeData} parent={null}/>
    </div>
  );
};

export default Tree;