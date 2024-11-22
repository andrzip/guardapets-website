import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: #333;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

export const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterTitle = styled.h4`
  font-size: 1rem;
  color: #000;
  margin-bottom: 10px;
`;

export const FooterLink = styled.a`
  display: block;
  text-decoration: none;
  color: #007aff;
  font-size: 0.9rem;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterDivider = styled.hr`
  width: 90%;
  border: none;
  border-top: 1px solid #ddd;
  margin: 20px 0;
`;

export const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: #666;
`;

export const FooterText = styled.p`
  margin: 5px 0;
`;

export const BackToTopButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #f5f5f5;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
`;
