import styled, { css } from 'styled-components';

interface DayStylesProps {
  isToday?: boolean
  isActive?: boolean
}

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainBackground};
  height: 150px;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 11px 18px;

  > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1.4px;
    color: ${(props) => props.theme.colors.font.primary};
  }
`;

export const Days = styled.div`
  padding: 40px 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Day = styled.div<DayStylesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;


  span {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 19px;
    letter-spacing: 1px;
    color: ${(props) => (props.isToday ? props.theme.colors.font.quintenary : props.theme.colors.font.secondary)};


  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    font-weight: normal;
    font-size: 11px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1.1px;
    color: ${(props) => (props.isToday ? props.theme.colors.font.quintenary : props.theme.colors.font.secondary)};
    border-radius: 50%;
    cursor: pointer;

    ${(props) => props.isActive && css`
      background-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.font.reverse};
      transition-delay: 0.06s;
    `}

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.font.reverse};
      font-weight: 500;

      transition-delay: 0.06s;
    }

    &:active {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;
