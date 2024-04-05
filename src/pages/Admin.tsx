import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <Link to="/AddRecipe">Add recipe</Link>
      <br />
      <Link to="/DeleteRecipe">Delete recipe</Link>
      </div>
  );
};

export default AdminPage;
