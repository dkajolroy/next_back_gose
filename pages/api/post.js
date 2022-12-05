import UserModel from "../../Models/UserModel";

const handler = async (req, res) => {
  const user = await UserModel.find();
  res.send(user);
};

export default handler;
