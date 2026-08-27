import Meal from "../models/Meal.js"; 

// CREATE
export const createMeal = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category
        } = req.body;

        const slug = createSlug(name);

        const meal = await Meal.create({
            name,
            slug,
            description,
            price,
            category
        });

        res.status(201).json({
            success: true,
            message: "Meal created successfully",
            data: meal
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to create meal",
            error: error.message
        });
    }
};


// READ ALL
export const getMeals = async (req, res) => {
    try {
        const meals = await Meal.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: meals.length,
            data: meals
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch meals",
            error: error.message
        });
    }
};


// READ ONE
export const getMealById = async (req, res) => {
    try {
        const meal = await Meal.findById(req.params.id);

        if (!meal) {
            return res.status(404).json({
                success: false,
                message: "Meal not found"
            });
        }

        res.status(200).json({
            success: true,
            data: meal
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch meal",
            error: error.message
        });
    }
};


// UPDATE
export const updateMeal = async (req, res) => {
    try {
        const meal = await Meal.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!meal) {
            return res.status(404).json({
                success: false,
                message: "Meal not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Meal updated successfully",
            data: meal
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update meal",
            error: error.message
        });
    }
};


// DELETE
export const deleteMeal = async (req, res) => {
    try {
        const meal = await Meal.findByIdAndDelete(req.params.id);

        if (!meal) {
            return res.status(404).json({
                success: false,
                message: "Meal not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Meal deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete meal",
            error: error.message
        });
    }
};

const createSlug = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
};