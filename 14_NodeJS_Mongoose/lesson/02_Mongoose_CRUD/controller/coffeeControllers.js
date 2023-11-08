import Coffee from "../model/Coffee.js";

export const getAllCoffee = async (req, res) => {
  try {
    const allCoffee = await Coffee.find().select({name: 1, _id: 0});
    res.status(200).json(allCoffee);
  } catch (error) {
    res.send(error.message);
  }
};
export const createCoffee = async (req, res) => {
  try {
    const newCoffee = await Coffee.create(req.body);

    res.json({msg: "the coffee is created ", newCoffee});
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
export const updateCoffeeById = async (req, res) => {
  try {
    // const {id} = req.params

    // await Coffee.updateOne({_id: req.params.id},{$set:{name: req.body.name}})

    // const updatedCoffee = await Coffee.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   {new: true}
    // );

    const updatedCoffee = await Coffee.findByIdAndUpdate(
      req.params.id,
      //   {name: req.body.name, $addToSet: {ingredients: req.body.ingredients}},
      {name: req.body.name, $push: {ingredients: req.body.ingredients}},

      {new: true}
    );

    res.status(203).send(updatedCoffee);
  } catch (error) {
    res.status(error.statusCode).send(error.message);
  }
};
export const deleteCoffeeById = async (req, res) => {
  await Coffee.findByIdAndDelete(req.params.id);

  res.send("the coffee with that ID is deleted");
};

export const findByName = async (req, res) => {
  const coffeeByName = await Coffee.find({name: req.params.name});

  res.send(coffeeByName);
};
