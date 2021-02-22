import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 256px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBackground};
  position: fixed;

  > header {
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 0px 25px;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};

    > span {
      font-weight: 600;
      color: ${(props) => props.theme.colors.font.quintenary};
      font-size: 18px;
    }
  }

  > footer {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 24px;
    left: 24px;
    cursor: pointer;

    &:hover {
      > span {
        color: ${(props) => props.theme.colors.font.quintenary};
        transition-delay: 100ms;
      }

      transition-delay: 100ms;
    }

    > span {
      margin-left: 14px;
      color: ${(props) => props.theme.colors.font.secondary};
    }


    > svg {
      fill: ${(props) => props.theme.colors.font.tertiary};
    }
  }

`;

export const User = styled.div`
  margin: 25px 20px;
  display: flex;
  align-items: center;
  flex: 1;
  font-weight: 500;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  height: 100%;
  overflow: hidden;
  width: 100%;


  span {
    color: ${(props) => props.theme.colors.font.primary};

  }
  p {
    font-size: 10px;
    color: ${(props) => props.theme.colors.font.secondary};
  }
`;

export const Avatar = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.mainBackgroundDarked};

  img {
    border-radius: 50%;
    height: 45px;
    width: 45px;
    object-fit: contain;
  }
`;

export const Menu = styled.div`
  padding: 25px 24px 40px;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
`;
export const SubMenu = styled.div`
  padding: 0px 24px;
  margin-top: 27px;
`;

interface LiProps {
  active?: boolean
}

export const Li = styled.li<LiProps>`
  display: flex;
  height: 20px;
  font-weight: 500;
  cursor: pointer;

  > svg {
    fill: ${(props) => props.theme.colors.mainBackground};
    stroke-width: 1.5px;
    stroke:${(props) => props.theme.colors.font.tertiary};
    font-size: 18px;
  }

  > span {
    margin-left: 14px;
    letter-spacing: 1px;
  }


  &:hover {
    color: ${(props) => props.theme.colors.font.quintenary};

    > svg {
      stroke: ${(props) => props.theme.colors.font.quintenary};
      transition-delay: 100ms;
    }

    transition-delay: 100ms;
  }

  + li {
    margin-top: 17px;
  }

  ${(props) => props.active && css`
    > span {
      transition-delay: 100ms;
      color: ${props.theme.colors.font.quintenary};
    }

    > svg {
      stroke: ${props.theme.colors.font.quintenary};
      transition-delay: 100ms;
    }
  `}
`;
