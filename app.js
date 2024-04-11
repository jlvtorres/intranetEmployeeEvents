// Import express
const express = require("express");

// Initialize express app
const app = express();

app.use(express.static(__dirname + "/public/images"));

app.set("view engine", "ejs");

// Specify a port
const PORT = process.env.PORT || 2000;

app.get("/easter-2023", (req, res) => {
      const data = [
            {
                  name: "Alicia Careno ",
                  desc: "Date Night Basket Winner",
                  img: "1.jpg",
            },
            {
                  name: "Christina Myrick",
                  desc: "Winning a Basket",
                  img: "2.jpg",
            },
            {
                  name: "EDD Prizes",
                  desc: "",
                  img: "3.jpg",
            },
            {
                  name: "EDD Table",
                  desc: "",
                  img: "4.jpg",
            },
            {
                  name: "Juan Quiroz",
                  desc: "Winning a Basket",
                  img: "5.jpg",
            },
            {
                  name: "Linda Melendez",
                  desc: "Wine Basket Winner",
                  img: "6.jpg",
            },
            {
                  name: "MFS Team",
                  desc: "Spring",
                  img: "7.jpg",
            },
            {
                  name: "Nicolle Felsk",
                  desc: "Road Trip Basket Winner",
                  img: "8.jpg",
            },
      ];

      res.render("easter2023", { data: data, title: "Spring Hunt 03-2024", backImg: "easter2024.jpg" });
});

app.get("/padres-2023", (req, res) => {
      const data = [
            {
                  name: "Arlem Gomez - Gena Merrells ",
                  desc: "",
                  img: "1.jpg",
            },
            {
                  name: "Ashleigh Ashton - Nate Lucas - Brittani Arias",
                  desc: "",
                  img: "2.jpg",
            },
            {
                  name: "Brittani Arias - Ashleigh Ashton - Amee Klobchar -  Shaun Lucas",
                  desc: "",
                  img: "3.jpg",
            },
            {
                  name: "Arlem Gomez - Shaun Lucas",
                  desc: "",
                  img: "4.jpg",
            },
            {
                  name: "Dayana Saucedo and Family",
                  desc: "",
                  img: "5.jpg",
            },
            {
                  name: "Dayana Saucedo",
                  desc: "",
                  img: "6.jpg",
            },
            {
                  name: "Erin Crew - Amee Klobchar - Sydney Klobchar",
                  desc: "",
                  img: "7.jpg",
            },
            {
                  name: "Executive Team",
                  desc: "",
                  img: "8.jpg",
            },
            {
                  name: "Gina Frame - Eric Daughtery",
                  desc: "",
                  img: "9.jpg",
            },
            {
                  name: "Its a private event",
                  desc: "",
                  img: "10.jpg",
            },
            {
                  name: "Matt Yager - Sam Archila",
                  desc: "",
                  img: "11.jpg",
            },
            {
                  name: "MFS Guests",
                  desc: "",
                  img: "12.jpg",
            },
            {
                  name: "Our View",
                  desc: "",
                  img: "13.jpg",
            },
            {
                  name: "Servicing Dept",
                  desc: "",
                  img: "14.jpg",
            },
      ];

      res.render("padres2023", {
            data: data,
            title: "padres game",
            backImg: "padres2023.jpg",
            title: "Padres Game 08/2023",
      });
});

app.get("/san-diego-humane-society-volunteer-day", (req, res) => {
      const data = [
            {
                  name: "Amee Klobchar - Sydney Klobchar",
                  desc: "",
                  img: "1.jpg",
            },
            {
                  name: "Bagging Food",
                  desc: "",
                  img: "2.jpg",
            },
            {
                  name: "Donation Drive",
                  desc: "",
                  img: "3.jpg",
            },
            {
                  name: "Erica Wagner",
                  desc: "",
                  img: "4.jpg",
            },
            {
                  name: "MFS Volunteer Team",
                  desc: "",
                  img: "5.jpg",
            },
            {
                  name: "Pets",
                  desc: "",
                  img: "6.jpg",
            },
            {
                  name: "Polo - Sam - Gaby ",
                  desc: "volunteering",
                  img: "7.jpg",
            },
            {
                  name: "Randall - Sydney",
                  desc: "",
                  img: "8.jpg",
            },
            {
                  name: "Sam - Yanis - Virna ",
                  desc: "packing food",
                  img: "9.jpg",
            },
            {
                  name: "Its a private event",
                  desc: "",
                  img: "10.jpg",
            },
            {
                  name: "Matt Yager - Sam Archila",
                  desc: "",
                  img: "11.jpg",
            },
            {
                  name: "MFS Guests",
                  desc: "",
                  img: "12.jpg",
            },
            {
                  name: "Our View",
                  desc: "",
                  img: "13.jpg",
            },
            {
                  name: "Servicing Dept",
                  desc: "",
                  img: "14.jpg",
            },
      ];

      res.render("volunteerDay2023", {
            data: data,
            backImg: "padres2023.jpg",
            title: "San Diego Humane Society Volunteer Day 08-2023",
      });
});

app.get("/fileNames", (req, res) => {
      const fs = require("fs");
      const path = require("path");

      // Function to print all file names in the given directory
      function printFileNames(dirPath) {
            // Check if the given path is a directory
            fs.stat(dirPath, (err, stats) => {
                  if (err) {
                        console.error("Error accessing the path:", err);
                        return;
                  }

                  if (stats.isDirectory()) {
                        // Read the contents of the directory
                        fs.readdir(dirPath, (err, files) => {
                              if (err) {
                                    console.error("Error reading the directory:", err);
                                    return;
                              }

                              // Iterate over the directory contents
                              files.forEach((file) => {
                                    // Construct the full path of the file
                                    let fullPath = path.join(dirPath, file);

                                    // Check if the current item is a file
                                    fs.stat(fullPath, (err, stats) => {
                                          if (err) {
                                                console.error("Error accessing the file:", err);
                                                return;
                                          }

                                          // If the item is a file, print its name
                                          if (stats.isFile()) {
                                                console.log(file);
                                          }
                                    });
                              });
                        });
                  } else {
                        console.log(`${dirPath} is not a directory.`);
                  }
            });
      }

      // Usage example
      printFileNames("./public/images/08-2023 - SDHU Volunteer Day");
});

// Start the server
app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
});
