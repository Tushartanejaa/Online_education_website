import React, { useState } from "react";
import "./ResourcesPage.css";

function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [searchTerm, setSearchTerm] = useState("");
  const resources = [
    {
      id: 1,
      title: "Coding",
      category: "Coding",
      link: "https://youtu.be/yRpLlJmRo2w ",
    },
    {
      id: 2,
      title: "Data Analytics",
      category: "Data Analytics",
      link: "https://youtu.be/rGx1QNdYzvs",
    },
    {
      id: 3,
      title: "Data Scientist",
      category: "Data Science",
      link: "https://www.youtube.com/live/Ewx1bo3Vyzg?feature=share",
    },
    {
      id: 4,
      title: "UPSC",
      category: "Upsc",
      link: "https://youtu.be/JL_grPUnXzY",
    },
    {
      id: 5,
      title: "JEE",
      category: "Jee",
      link: "https://youtu.be/BrJbJIw6KhE",
    },
    {
      id: 6,
      title: "NEET",
      category: "Neet",
      link: "https://youtu.be/6cCkrYuqOdE",
    },
  ];

  const filteredResources =
    selectedCategory === "Category"
      ? resources
      : resources.filter((resource) => resource.category === selectedCategory);

  // Filter the resources based on the search term
  const searchedResources = filteredResources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  return (
    <div className="container">
      <div className="resources-container">
        <h1><b><i>Resources</i></b></h1>

        <div className="resources-filter">
          {/* <label>Category:</label> */}
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="Category">Category</option>
            <option value="Coding">Coding</option>
            <option value="Data Science">Data Science</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Upsc">Upsc</option>
            <option value="JEE">JEE</option>
            <option value="Neet">Neet</option>
          </select>
        </div>

        <div className="resources-search">
          {/* <label>Search:</label> */}
          <input
            placeholder="Search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="resources-list">
          {searchedResources.map((resource) => (
            <li key={resource.id}>
              <a href={resource.link}>{resource.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResourcesPage;
