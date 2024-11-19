import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #234d20;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2rem;
    color: rgba(0,0,0,.87)
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #234d20;
  border-right: none;
  border-radius: 5px 0 0 5px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #234d20;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #1e3e1a;
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
  color: #fff;
  background-color: #234d20;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #1e3e1a;
  }
`;

export const FAQSection = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #234d20;
  }
`;

export const FAQItem = styled.div`
  margin-bottom: 15px;
  border: 1px solid #234d20;
  border-radius: 5px;
  overflow: hidden;
`;

export const FAQQuestion = styled.div`
  padding: 15px;
  background-color: #234d20;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const FAQAnswer = styled.div`
  padding: 15px;
  background-color: #f5f5f5;
  color: #444;
  font-size: 1rem;
  line-height: 1.6;
`;
