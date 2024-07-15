import React from 'react'
import styled from 'styled-components'
import Loading from './loading'
import { Container } from '../App'
// import { BASE_URL } from '../App'

const SearchResult = ({data:foods}) => {
    console.log(foods)
  return (
    <FoodCardsContainer>
        <Container>
        <FoodCards>
        { foods && foods.length>0 ? 
            foods.map((food,index)=>
            (
                <FoodCard key={index} >
                   <div className="food_image">
                   <img src={food.image} alt={food.name} />
                   </div>
                   <div className="food-info">
                    <div className="info">
                        <h3>{food.name}</h3>
                        <p>{food.text}</p>
                       
                    </div>
                    <Button>Price: ${food.price.toFixed(2)}</Button>
                    {/* <p>Type: {food.type}</p> */}
                   </div>
                    
          
                </FoodCard>
            )
            )

            : 
            (<Loading/>)
        }
    </FoodCards>
        </Container>
  </FoodCardsContainer>

  )
}

export default SearchResult



const FoodCardsContainer = styled.section`
background-image: url("/bg.png");
min-height:calc(100vh - 200px);
/* width: 100vw; */
background-size: cover;
/* display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 20px;
padding: 20px; */
`

const FoodCards = styled.div`
display: flex;
  flex-wrap: wrap;
  row-gap:32px ;
  column-gap: 20px;
  justify-content: center;
  align-content: center;
  padding-top: 80px;

`

const Button = styled.button`
  background-color: #ff4343;
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  
`;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;

