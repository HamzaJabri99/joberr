import Category from "../models/category.model.js";
import errorHandle from "../utils/errorHandle.js";

// export const createCategory = async (req, res, next) => {
//   const category = new Category({
//     ...req.body,
//   });
//   try {
//     if (!category) return next(errorHandle(500, "something went wrong"));
//     await category.save(category);
//     return res.status(201).json(category);
//   } catch (error) {
//     next(error);
//   }
// };

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};
