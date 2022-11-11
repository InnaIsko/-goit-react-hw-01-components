import styled from 'styled-components';

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-shadow: ${p => p.theme.shadows.text};
  margin-left: 20px;
`;
export const StatusFriend = styled.span`
  width: 20px;
  height: 20px;
  margin-bottom: auto;
  margin-top: auto;
  margin-right: 20px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.isOnline ? p.theme.colors.statusGreen : p.theme.colors.statusRed};
`;
