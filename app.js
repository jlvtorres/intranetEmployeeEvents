// Import express
const express = require("express");
const { dirname } = require("path");
const virtualPath = "other";
// Initialize express app
const app = express();
const path = require("path");

//app.use(express.static(`${__dirname}/public/images`));
app.use(`/${virtualPath}/public`, express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

// Specify a port
const PORT = process.env.PORT || 2000;

app.get(`/${virtualPath}/`, (req, res) => {
      res.send(`${__dirname}/public/images`);
});
app.get(`/${virtualPath}/company-events-image-gallery`, (req, res) => {
      const data = [
            {
                  cardTitle: `Spring Hunt 03-2024`,
                  img: `/${virtualPath}/public/images/easter2024.jpg`,
                  url: `/${virtualPath}/easter-2024`,
            },
            {
                  cardTitle: "Ugly Sweater Contest and Tree Decor 12-2023",
                  img: `/${virtualPath}/public/images/christmas2023.jpg`,
                  url: `/${virtualPath}/christmas-2023`,
            },

            {
                  cardTitle: "Halloween 10-2023",
                  img: `/${virtualPath}/public/images/halloween2023.jpg`,
                  url: `/${virtualPath}/halloween-2023`,
            },
            {
                  cardTitle: "Padres Game 08-2023",
                  img: `/${virtualPath}/public/images/padres2023.jpg`,
                  url: `/${virtualPath}/padres-2023`,
            },
            {
                  cardTitle: "San Diego Humane Society Volunteer Day 08-2023",
                  img: `/${virtualPath}/public/images/sdhs2023.jpg`,
                  url: `/${virtualPath}/san-diego-humane-society-volunteer-day-2023`,
            },
      ];

      res.render("galleryPage", { data: data, title: "employee events image gallery", backImg: "none" });
});

app.get(`/${virtualPath}/easter-2024`, (req, res) => {
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

      const pathToImages = `/${virtualPath}/public/images/03-2024 - Spring Hunt`;
      res.render("easter2024", {
            data: data,
            title: "Spring Hunt 03-2024",
            backImg: `/${virtualPath}/public/images/easter2024.jpg`,
            pathToImages: pathToImages,
      });
});

app.get(`/${virtualPath}/padres-2023`, (req, res) => {
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

      const pathToImages = `/${virtualPath}/public/images/08-2023 - Padre Game`;

      res.render("padres2023", {
            data: data,
            title: "padres game",
            backImg: "padres2023.jpg",
            title: "Padres Game 08-2023",
            pathToImages,
      });
});

app.get(`/${virtualPath}/san-diego-humane-society-volunteer-day-2023`, (req, res) => {
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
                  name: "Sam - Gaby",
                  desc: "",
                  img: "10.jpg",
            },
            {
                  name: "Sam Archila",
                  desc: "",
                  img: "11.jpg",
            },
            {
                  name: "SDHU Coordinator - MFS Coordinator",
                  desc: "",
                  img: "12.jpg",
            },
            {
                  name: "SDHU Employee",
                  desc: "",
                  img: "13.jpg",
            },
            {
                  name: "Sydney Klobchar",
                  desc: "",
                  img: "14.jpg",
            },
            {
                  name: "Virna Morales",
                  desc: "",
                  img: "15.jpg",
            },
            {
                  name: "Yanis - Virna",
                  desc: "",
                  img: "16.jpg",
            },
            {
                  name: "Yanis Bojorquez",
                  desc: "",
                  img: "17.jpg",
            },
      ];

      const pathToImages = `/${virtualPath}/public/images/08-2023 - SDHU Volunteer Day`;

      res.render("volunteerDay2023", {
            data: data,
            backImg: "padres2023.jpg",
            title: "San Diego Humane Society Volunteer Day 08-2023",
            pathToImages,
      });
});

app.get(`/${virtualPath}/halloween-2023`, (req, res) => {
      const data = [
            {
                  name: "Ari Ausage",
                  desc: "1st Place Pumpkin Winner",
                  img: "1.jpg",
            },
            {
                  name: "Ashleigh Ashton",
                  desc: "2nd Place Pumpkin Winner",
                  img: "2.jpg",
            },
            {
                  name: "Sandy Huntington",
                  desc: "3rd Place Pumpkin Winner",
                  img: "9.jpg",
            },
            {
                  name: "Oscar Arias",
                  desc: "First Place Winner",
                  img: "6.jpg",
            },
            {
                  name: "Randall Whitmore",
                  desc: "2nd Place Costume Winner",
                  img: "8.jpg",
            },
            {
                  name: "Jerena Bryd",
                  desc: "3rd place winner",
                  img: "4.jpg",
            },
            {
                  name: "Best Group Costume Winners",
                  desc: "Collections",
                  img: "3.jpg",
            },
            {
                  name: "Operations Group",
                  desc: "",
                  img: "5.jpg",
            },
            {
                  name: "Pumpkin Carving Contests",
                  desc: "",
                  img: "7.jpg",
            },
      ];

      const pathToImages = `/${virtualPath}/public/images/10-2023 - Halloween`;

      res.render("halloween2023", {
            data: data,
            backImg: `/${virtualPath}/public/images/halloween2023.jpg`,
            title: "Halloween 10-2023",
            pathToImages,
      });
});

app.get(`/${virtualPath}/christmas-2023`, (req, res) => {
      const data = [
            {
                  name: "Juan Quiroz",
                  desc: "1st Place Ugly Sweater",
                  img: "1.jpg",
            },
            {
                  name: "-Alicia Carreno - ",
                  desc: "2nd Place Ugly Sweater",
                  img: "2.jpg",
            },
            {
                  name: "Deisy Gracida",
                  desc: "3rd Place Ugly Sweater",
                  img: "3.jpg",
            },
            {
                  name: "Collections",
                  desc: "Ugly Sweater",
                  img: "4.jpg",
            },
            {
                  name: "Companywide",
                  desc: "Ugly Sweater",
                  img: "5.jpg",
            },
            {
                  name: "CSS - AS",
                  desc: "Ugly Sweater",
                  img: "6.jpg",
            },
            {
                  name: "EDD ",
                  desc: "Christmas Sweaters",
                  img: "7.jpg",
            },
            {
                  name: "Mark",
                  desc: "Collections Ugly Sweater",
                  img: "8.jpg",
            },
            {
                  name: "MFS Toy Drive 2023",
                  desc: "",
                  img: "9.jpg",
            },
            {
                  name: "Servicing Sweaters",
                  desc: "",
                  img: "10.jpg",
            },
            {
                  name: "Supervisors",
                  desc: "Christmas Sweaters",
                  img: "11.jpg",
            },
            {
                  name: "Tree",
                  desc: "",
                  img: "13.jpg",
            },
            {
                  name: "Vaneesa Moreno - Stephanie Gilmore",
                  desc: "",
                  img: "12.jpg",
            },
      ];

      const pathToImages = `/${virtualPath}/public/images/12-2023 - Ugly Sweater and Tree Decor`;

      res.render("christmas2023", {
            data: data,
            backImg: `/${virtualPath}/public/images/christmas2023.jpg`,
            title: "Ugly Sweater Contest and Tree Decor 12-2023",
            pathToImages,
      });
});

app.get(`/${virtualPath}/fileNames`, (req, res) => {
      const fs = require("fs");
      const path = require("path");

      // Function to print all file names in the given directory
      function printFileNames(dirPath) {
            const fileNames = [];
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
                                                fileNames.push(file);
                                          }
                                    });
                              });
                        });
                  } else {
                        console.log(`${dirPath} is not a directory.`);
                  }
            });

            return fileNames;
      }

      const payLoad = {
            fileNames: printFileNames(`/${virtualPath}/public/images/12-2023 - Ugly Sweater and Tree Decor`),
            virtualPath: virtualPath,
      };
      // Usage example
      res.send(JSON.stringify(payLoad));
});

// Start the server
app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
});

{
      /* <img src="/myapp/public/images/example.jpg" alt="Example Image"> */
}
