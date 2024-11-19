import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Poppins", sans-serif;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`;

export const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
`;

export const CategoryButton = styled.button`
  padding: 15px;
  font-size: 1rem;
  border: none;
  background-color: #f0f7da;
  color: #234d20;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #cfe4ba;
    transform: translateY(-5px);
  }
`;

export const FAQSection = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const FAQItem = styled.div`
  margin-bottom: 15px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FAQQuestion = styled.div`
  padding: 15px;
  background-color: #fafafa;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: bold;

  span {
    font-size: 1rem;
    font-weight: bold;
    color: #234d20;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #3a7c2d;
  }
`;

export const FAQAnswer = styled.div`
  padding: 15px;
  background-color: #ffff;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
