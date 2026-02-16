// //RESTFUL API
// const express = require("express")
// const users = require("./MOCK_DATA.json")
// const fs = require("fs")
// const mongoose = require("mongoose")
// const { type } = require("os")
// const PORT = 3000
// const app = express()

// //Connection
// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1').then(() => console.log("Mongoose Connnected")).catch((err) => console.log("Mongo Error", err));

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     jobTitle: {
//         type: String,
//     },
//     gender: {
//         type: String,
//     }
// })

// const User = mongoose.model("user", userSchema)

// app.use(express.json())
// //Middleware
// app.use(express.urlencoded({ extended: false }))
// app.use((req, res, next) => {
//     fs.appendFile("log.txt", `\n${Date.now()}:${req.method}:${req.path}`, (err, data) => {
//         next()
//     })
// })

// //Routes
// app.get("/", (req, res) => {
//     return res.send("Welcome to HomePage !")
// })

// app.get("/users", (req, res) => {
//     const html = `
//     <ul>
//    ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
//     </ul>
//     `
//     res.send(html)
// })

// app.get("/api/users", (req, res) => {
//     res.setHeader("X-MyName", "Ashish")  //Custom Header
//     return res.json(users)
// })


// app
//     .route("/api/users/:id")
//     .get((req, res) => {
//         const id = Number(req.params.id);
//         const user = users.find((user) => user.id === id);
//         if (!user) return res.status(404).json({ error: "User not found" })
//         return res.json(user)
//     })
//     .patch((req, res) => {
//         const id = Number(req.params.id);
//         const body = req.body;
//         const userIndex = users.findIndex(user => user.id === id);
//         if (userIndex === -1) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         // merge old data with new data
//         users[userIndex] = { ...users[userIndex], ...body };
//         fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
//             if (err) {
//                 return res.status(500).json({ message: "Failed to update user" });
//             }
//             return res.json({
//                 status: "Success",
//                 updatedUser: users[userIndex]
//             });
//         }
//         );
//     })
//     .delete((req, res) => {
//         const id = Number(req.params.id);
//         const userIndex = users.findIndex(user => user.id === id);
//         if (userIndex === -1) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         const deletedUser = users[userIndex];
//         users.splice(userIndex, 1);

//         fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
//             if (err) {
//                 return res.status(500).json({ message: "Failed to delete user" });
//             }
//             return res.json({ status: "Success", deletedUser });
//         }
//         );
//     });

// app.post("/api/users", (req, res) => {
//     const body = req.body
//     if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
//         return res.status(400).json({ msg: 'All feilds required! ' })
//     }
//     users.push({ ...body, id: users.length + 1 })
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//         return res.json({ Status: "Success", id: users.length })
//     })
// })


// app.listen(PORT, () => {
//     console.log("Server Started")
// })



//Clean code
// const express = require("express");
// const mongoose = require("mongoose");
// const fs = require("fs");

// const app = express();
// const PORT = 3000;

// /* -------------------- DATABASE CONNECTION -------------------- */
// mongoose
//   .connect("mongodb://127.0.0.1:27017/youtube-app-1")
//   .then(() => console.log("Mongoose Connected"))
//   .catch((err) => console.error("Mongo Error:", err));

// /* -------------------- SCHEMA & MODEL -------------------- */
// const userSchema = new mongoose.Schema(
//   {
//     firstName: { type: String, required: true },
//     lastName: String,
//     email: { type: String, required: true, unique: true },
//     jobTitle: String,
//     gender: String,
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);

// /* -------------------- MIDDLEWARE -------------------- */
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Logging Middleware
// app.use((req, res, next) => {
//   fs.appendFile(
//     "log.txt",
//     `\n${Date.now()} : ${req.method} : ${req.path}`,
//     () => next()
//   );
// });

// /* -------------------- ROUTES -------------------- */

// // Home
// app.get("/", (req, res) => {
//   res.send("Welcome to HomePage!");
// });

// // Get all users (HTML)
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     const html = `
//       <ul>
//         ${users
//           .map(
//             (u) => `<li>${u.firstName} ${u.lastName} - ${u.email}</li>`
//           )
//           .join("")}
//       </ul>
//     `;
//     res.send(html);
//   } catch (err) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // Get all users (JSON)
// app.get("/api/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // Get, Update, Delete by ID
// app
//   .route("/api/users/:id")
//   .get(async (req, res) => {
//     try {
//       const user = await User.findById(req.params.id);
//       if (!user) return res.status(404).json({ error: "User not found" });
//       res.json(user);
//     } catch {
//       res.status(400).json({ error: "Invalid ID" });
//     }
//   })

//   .patch(async (req, res) => {
//     try {
//       const updatedUser = await User.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//       );
//       if (!updatedUser)
//         return res.status(404).json({ error: "User not found" });
//       res.json({ status: "Success", data: updatedUser });
//     } catch {
//       res.status(400).json({ error: "Invalid ID" });
//     }
//   })

//   .delete(async (req, res) => {
//     try {
//       const deletedUser = await User.findByIdAndDelete(req.params.id);
//       if (!deletedUser)
//         return res.status(404).json({ error: "User not found" });
//       res.json({ status: "Success" });
//     } catch {
//       res.status(400).json({ error: "Invalid ID" });
//     }
//   });

// // Create user
// app.post("/api/users", async (req, res) => {
//   try {
//     const { first_name, last_name, email, job_title, gender } = req.body;

//     if (!first_name || !email || !gender || !job_title)
//       return res.status(400).json({ msg: "All required fields missing!" });

//     const user = await User.create({
//       firstName: first_name,
//       lastName: last_name,
//       email,
//       jobTitle: job_title,
//       gender,
//     });

//     res.status(201).json({ msg: "Success", data: user });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// /* -------------------- SERVER -------------------- */
// app.listen(PORT, () => {
//   console.log(`Server Started on http://localhost:${PORT}`);
// });
