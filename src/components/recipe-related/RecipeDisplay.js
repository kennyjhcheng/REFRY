import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";

const RecipeDisplay = (props) => {
  return (
    props.array &&
    props.array.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)
  );
};

export default RecipeDisplay;
