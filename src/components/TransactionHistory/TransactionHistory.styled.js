import styled from 'styled-components';

export const Table = styled.table`
  width: 70%;
  margin-bottom: 20px;
  border: 1px solid #dddddd;
  border-collapse: collapse;
`;
export const TableHeader = styled.th`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  text-shadow: ${p => p.theme.shadows.text};
  padding: 10px;
  background-color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.normal};
`;
export const TableInfo = styled.th`
  border: ${p => p.theme.borders.normal};
  padding: 10px;
  font-size: ${p => p.theme.fontSizes.m};
`;
export const TableString = styled.tr`
  :nth-child(even) {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
