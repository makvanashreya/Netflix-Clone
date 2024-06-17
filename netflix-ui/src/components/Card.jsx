import React from 'react';
import styled from 'styled-components'; 

function Card({moviesData, isLiked=false}) {
  return (
    <Container>
      <img src={`https://image.tmdb.org/t/p/w500${moviesData.image}`} alt="movie" />
    </Container>
  )
}
const Container = styled.div`
`;

export default Card;