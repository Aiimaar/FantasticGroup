import models from "../models/index.js";

const { Review } = models;

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createReview = async (req, res) => {
  const { title, comment, star_num, location_id, user_id, is_active } = req.body;

  if (!star_num || !location_id || !user_id || is_active === undefined) {
    return res.status(400).json({ error: "star_num, location_id, user_id, and is_active are required." });
  }

  try {
    const review = await Review.create({
      title,
      comment,
      star_num,
      location_id,
      user_id,
      is_active,
    });
    res.status(201).json(review);
  } catch (error) {
    console.error("Error creating review:", error.message);
    res.status(500).json({ error: "Error creating review." });
  }
};

export const updateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const { title, comment, star_num, location_id, user_id, is_active } = req.body;

    const existingReview = await Review.findByPk(reviewId);

    if (!existingReview) {
      return res.status(404).json({ message: "Review not found." });
    }

    const updatedFields = {};
    if (title !== undefined) updatedFields.title = title;
    if (comment !== undefined) updatedFields.comment = comment;
    if (star_num !== undefined) updatedFields.star_num = star_num;
    if (location_id !== undefined) updatedFields.location_id = location_id;
    if (user_id !== undefined) updatedFields.user_id = user_id;
    if (is_active !== undefined) updatedFields.is_active = is_active;

    const updatedReview = await existingReview.update(updatedFields);

    res.status(200).json(updatedReview);
  } catch (error) {
    console.error("Error updating review:", error.message);
    res.status(500).json({ message: "Error updating review." });
  }
};

export const deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found." });
    }
    await Review.destroy({ where: { id } });
    res.status(200).json({ message: `Review with id ${id} successfully deleted.` });
  } catch (error) {
    console.error("Error deleting review:", error.message);
    res.status(500).json({ error: "Error deleting review." });
  }
};

export const getReviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findByPk(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    console.error("Error getting review:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getReviewsByLocationId = async(req, res) =>{
    try{
        const {locationId} = req.params;
        const reviews = await Review.findAll({where: {location_id: locationId}})
        res.json(reviews);
    }catch(error){
        console.error("Error getting reviews by locationId", error);
        res.status(500).json({error: error.message});
    }
}

export const getReviewsByUserId = async(req, res) =>{
    try{
        const {userId} = req.params;
        const reviews = await Review.findAll({where: {user_id: userId}})
        res.json(reviews);
    }catch(error){
        console.error("Error getting reviews by userId", error);
        res.status(500).json({error: error.message});
    }
}