import User from "../models/userSchema.js";

export const login = async (req, res, next) => {
  try {
    const foundUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (foundUser) {
      res.send({msg: "welcome back", foundUser});
    } else {
      // if there is no user found, then send this response
      res.send("Make sure of you email and password");
    }
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    res.status(200).send(newUser);
  } catch (error) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new :true
    });

  
    res.status(203).send(user);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  "/api/users/delete/awjg4qk3j4g24252j45kj24g5kj3"
  try{
    const userId=req.params.id;
    const deleteUser = await User.findByIdAndDelete(userId)
    res.send(deleteUser)
  } 
  catch(err){
    next(err)
  }
};


export const getAllUsers = async (req, res, next) => {
  try{
    //interaction with db is asynchronous
    const allUsers =  await User.find() //  asynchronous
    res.send(allUsers)  //  synchronous
  } 
  catch(err){
   /*  res.status(500).send(err) */
    next(err)
  }
};
