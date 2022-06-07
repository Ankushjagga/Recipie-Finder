import React, { useState } from "react";
import { DialogTitle } from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import "./Recipie-list.css";

function Recpielist({ recpie }) {
  const [show, setshow] = useState(false);

  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-slide-title">Ingridents</DialogTitle>
        <DialogContent>
          <div className="label">{recpie.recipe.label}</div>
          <table>
            <thead>
              <th>Ingredient</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recpie.recipe.ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
 
                  <td>{ingredient.text}</td>
                  <td>{Math.floor(ingredient.weight)}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <div
            className="ingridentText"
            onClick={() => window.open(recpie.recipe.url)}
          >
            See More
          </div>
          <div className="seemore" onClick={() => setshow("")}>
            Close
          </div>
        </DialogActions>
      </Dialog>

      <div className="container">
        <div className="recpielist">
          <img src={recpie.recipe.image} alt="recipie-pic" />
          <span className="name">{recpie.recipe.label}</span>
          <span className="ingridentText" onClick={() => setshow(true)}>
            ingrident
          </span>
          <span
            className="seemore"
            onClick={() => window.open(recpie.recipe.url)}
          >
            see more
          </span>
        </div>
      </div>
    </>
  );
}

export default Recpielist;
