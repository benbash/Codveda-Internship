import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://localhost:3000/api/meals";

function App() {
  const [meals, setMeals] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
  });

  const [editingId, setEditingId] = useState(null);


  // GET meals
  const fetchMeals = async () => {
    try {
      const response = await axios.get(API_URL);

      setMeals(response.data.data);
    } catch (error) {
      console.error("Failed to fetch meals:", error);
    }
  };


  useEffect(() => {
    fetchMeals();
  }, []);


  // Handle input
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  // CREATE / UPDATE
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editingId) {
        const response = await axios.patch(
          `${API_URL}/${editingId}`,
          {
            ...formData,
            price: Number(formData.price)
          }
        );

        console.log("Meal updated:", response.data);

      } else {
        const response = await axios.post(
          API_URL,
          {
            ...formData,
            price: Number(formData.price)
          }
        );

        console.log("Meal created:", response.data);
      }

      setFormData({
        name: "",
        description: "",
        price: "",
        category: ""
      });

      setEditingId(null);

      await fetchMeals();

    } catch (error) {

      console.error(
        "Meal request failed:",
        error
      );

      if (error.response) {
        console.error(
          "Server response:",
          error.response.data
        );

        alert(
          error.response.data.message ||
          "The server rejected the request."
        );

      } else if (error.request) {

        alert(
          "Could not connect to the MealMate server. Make sure the backend is running."
        );

      } else {

        alert(
          "An unexpected error occurred."
        );
      }
    }
  };
  // EDIT
  const handleEdit = (meal) => {
    setEditingId(meal._id);

    setFormData({
      name: meal.name,
      description: meal.description,
      price: meal.price,
      category: meal.category
    });
  };


  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      fetchMeals();
    } catch (error) {
      console.error("Failed to delete meal:", error);
    }
  };


  return (
    <div className="container">

      <header>
        <h1>MealMate</h1>
        <p>Meal Management Dashboard</p>
      </header>


      <section className="form-section">

        <h2>
          {editingId ? "Update Meal" : "Add New Meal"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Meal name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Meal description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {editingId ? "Update Meal" : "Add Meal"}
          </button>

        </form>

      </section>


      <section className="meals-section">

        <h2>Available Meals</h2>

        <div className="meal-grid">

          {meals.map((meal) => (

            <article className="meal-card" key={meal._id}>

              <h3>{meal.name}</h3>

              <p>{meal.description}</p>

              <strong>
                ₦{meal.price}
              </strong>

              <span>
                {meal.category}
              </span>

              <div className="actions">

                <button
                  onClick={() => handleEdit(meal)}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(meal._id)
                  }
                >
                  Delete
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
}

export default App;