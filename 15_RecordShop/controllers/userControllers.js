import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import crypto from "crypto";
//http is a stateless protocol
//every request for server is unique
export const login = async (req, res, next) => {
  /* 
    "email":"test@gmail.com",
    "password":"12345" */
  try {
    const foundUser = await User.findOne({
      email: req.body.email,
    });
    /* 
    {
      "firstName": "Syed",
    "lastName": "Naqvi",
    "email": "test@gmail.com",
    "password": "$2b$10$nR/cAZRI7b2z5KOV2ZAZF..dFg97jVz2AUMlOC2je94D9n.lvjnjq",
    } */

    if (foundUser) {
      //"12345"  === "$2b$10$nR/cAZRI7b2z5KOV2ZAZF..dFg97jVz2AUMlOC2je94D9n.lvjnjq"
      const check = await bcrypt.compare(req.body.password, foundUser.password);

      if (check) {
        //authentication process
        // jwt.sign(payload,secretkey,options)
        const token = jwt.sign(
          {_id: foundUser._id, email: foundUser.email},
          process.env.SECRET_KEY,
          {issuer: "Naqvi", expiresIn: "24h"}
        );
        console.log(token);

        //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzM2I2NzllMzZlMWUwNzRjNTc1Y2YiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjk5OTU4NTYzLCJleHAiOjE2OTk5NjIxNjMsImlzcyI6Ik5hcXZpIn0.uAu44QFLVlRQNkHbgwYF9SPCRGQOQwvUO8Ho07Lo1Us

        /*       res.send({msg: "welcome back", foundUser, token}); */
        res.header("token", token).send({success: true, data: foundUser});
        /* res.cookie("token",token).send({msg: "welcome back", foundUser}); */
      } else {
        res
          .status(401)
          .send({success: false, message: "password doesn't match!"});

        /*   res.send({success:false, message:"something wrong"})
        res.send({success:true, data:user}) */
      }
    } else {
      // if there is no user found, then send this response
      res.send({success: false, message: "Make sure your email is correct!"});
      /* res.json("Make sure your email is correct!") */
    }
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    //   "hello" E4wnd46S
    // "@h§4jkjgfjHello"
    /* const salt = bcrypt.genSaltSync(10)
    console.log(salt)
    const hashedPassword = await bcrypt.hash(req.body.password,salt) */
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);

    const newUser = await User.create({...req.body, password: hashedPassword});

    // create a random token and saved ,

    const randomTokenCrypto = crypto.randomBytes(32).toString("hex");

    newUser.randomToken = randomTokenCrypto;
    newUser.save();
    // create a verify link
    const baseUrl = req.protocol + "://" + req.get("host");
    const verifyLink = `${baseUrl}/api/users/verify/${newUser._id}/${newUser.randomToken}`;
    // create a transporter object through nodemailer and gmail service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.MYEMAIL,
        pass: process.env.GMAILPASS,
      },
    });
    //
    await transporter.sendMail({
      from: `"Fred Foo 👻" <alaani.hiba@gmail.com>`,
      to: `${newUser.email}`,
      subject: "Thanks for Joining our website",
      text: "Hello there",
      html: `<h1>click  <a href=${verifyLink}>here</a> to verify your email</h1>`,
    });

    res.status(200).send(newUser);
  } catch (err) {
    next(err);
  }
};

export const verifyUser = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate(
      {_id: req.params.id, randomToken: req.params.randomToken},
      {$unset: {randomToken: 1}, $set: {isVerify: true}},
      {new: true}
    );

    if (user) {
      res.status(200)
        .send(`<div style="background-color:  #e6ffe6; padding: 10px; border-radius: 5px;">
          <h3 style="color: green;">You have been successfully registered!</h3>
          <p style="color: #333;">You can now proceed to login.</p>
        </div>`);
    } else {
      res.send(`<div style="background-color: #e6ffe6; padding: 10px; border-radius: 5px;">
          <h3 style="color: red;">You have error!</h3>
         
        </div>`);
    }
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(203).send(user);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  "/api/users/delete/awjg4qk3j4g24252j45kj24g5kj3";
  try {
    const userId = req.params.id;
    const deleteUser = await User.findByIdAndDelete(userId);
    res.send(deleteUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    //interaction with db is asynchronous
    const allUsers = await User.find(); //  asynchronous
    res.send(allUsers); //  synchronous
  } catch (err) {
    /*  res.status(500).send(err) */
    next(err);
  }
};
