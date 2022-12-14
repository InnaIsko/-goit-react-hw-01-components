import styled from 'styled-components';

export const ImgAvatar = styled.img`
  display: block;
  width: 150px;
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal};
`;
export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: 15px;
  margin-bottom: 0;
  text-shadow: ${p => p.theme.shadows.text};
`;
export const UserInfo = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
  margin-top: 10px;
  margin-bottom: 0;
`;
export const ProfileInfo = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const ProfileName = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
`;
