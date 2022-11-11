import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 70px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-shadow: ${p => p.theme.shadows.text};
  text-align: center;
`;
export const StatisticsInfoList = styled.li`
  display: flex;
  flex-direction: column;

  width: 75px;
  height: 75px;

  background-color: ${p => p.backgroundColor};
`;
export const StatisticsInfo = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
