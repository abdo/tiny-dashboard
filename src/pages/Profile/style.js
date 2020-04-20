import styled from 'styled-components';

export const TypicalFlexDiv = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
