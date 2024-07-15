import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Loading from "./components/loading";
import SearchResult from "./components/SearchResult";
import { fetchFoodData } from "./mockAPI"; // Import fetchFoodData from mockAPI

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchFoodData();
        setData(fetchedData);
        setFilteredData(fetchedData);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.error("Error fetching food data", error);
        setError("Unable to fetch food data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value.toLowerCase();
    console.log(searchValue);

    if (searchValue === "") {
      setFilteredData(data);
      return; // Early return if search input is empty
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue)
    );
    console.log(filter);
    setFilteredData(filter);

    if (!filter) {
      return <div>No Dish Found</div>;
    }
  };

  const filteredFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    } else {
      const filter = data?.filter((food) => food.type === type);
      setFilteredData(filter);
      setSelectedBtn(type);
    }
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search for food"
              onChange={searchFood}
            />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button
            selected={selectedBtn === "all"}
            onClick={() => filteredFood("all")}
          >
            All
          </Button>
          <Button
            selected={selectedBtn === "breakfast"}
            onClick={() => filteredFood("breakfast")}
          >
            Breakfast
          </Button>
          <Button
            selected={selectedBtn === "lunch"}
            onClick={() => filteredFood("lunch")}
          >
            Lunch
          </Button>
          <Button
            selected={selectedBtn === "dinner"}
            onClick={() => filteredFood("dinner")}
          >
            Dinner
          </Button>
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} /> {/* Pass fetched data to SearchResult */}
    </>
  );
}

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      color: white;
      &::placeholder{
        color:white;
      }
  
      }
    }
  

  @media (0 < width < 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
  }
`

const FilterContainer = styled.section`
  display: flex;
  padding-bottom: 30px;
  justify-content: center;
  gap: 12px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.selected ? "#990808" : "#ff4343")};
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  border: ${(props) => (props.selected ? "1px solid white" : "none")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #990808;
  }
`;
