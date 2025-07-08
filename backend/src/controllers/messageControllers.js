import User from "../models/userModel.js";
import Message from "../models/messageModel.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user_id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } });
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
