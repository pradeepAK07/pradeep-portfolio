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
