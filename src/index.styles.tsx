import styled from "styled-components";

export const NavLink = styled.p<{ $active?: boolean }>`
  color: #8f9db1;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.3s ease;

  &:hover {
    color: #22d3ee;
  }

  ${({ $active }) =>
    $active &&
    `
    color: #22d3ee;
    font-weight: 600;
  `}
`;

export const DmSherif = styled.p`
  font-family: "DM Serif Display", serif !important;
`;

export const PlayFair = styled.p`
  font-family: "Playfair Display", serif !important;
`;

export const JetBrains = styled.p`
  font-family: "JetBrains Mono", monospace !important;
`;

export const MainSectionContainer = styled.div`
  padding: 10rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: inherit;
`;

export const AboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: start;
  gap: 20px;
  background-color: inherit;
`;

export const ProjectsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
  gap: 30px;
  background-color: inherit;
`;
