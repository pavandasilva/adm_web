import { darken, linearGradient } from 'polished';
import styled from 'styled-components';
import { increasingHeight } from '../../styles/themes/animations';

interface BarStylesProps {
  percent: number
  color: 'success' | 'danger' | 'warning' | 'ok'
}

interface SquareSubtitleStylesProps {
  color: 'success' | 'danger' | 'warning' | 'ok'
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 400px;
  background-color: ${(props) => props.theme.colors.mainBackground};
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  > header {
    padding: 0px 18px;
    display: flex;
    align-items: center;
    height: 54px;
    font-weight: 500;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1.4px;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
  }
`;

export const Charts = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
`;

export const Bar = styled.div<BarStylesProps>`
  padding: 1px;
  position: relative;
  width: 8px;
  border-top-right-radius : 2px;
  border-top-left-radius : 2px;
  height: ${(props) => `${props.percent - 0.5}%`};
  background-color: ${(props) => props.theme.colors[props.color]};


  background-color:  ${(props) => linearGradient({
    colorStops: [`${props.theme.colors[props.color]} 0%`, `${darken(0.18, props.theme.colors[props.color])} 100%`],
    toDirection: '45deg',
  })};

  &:hover {
    > div {
      opacity: 1;
    }
  }

  animation: ${increasingHeight()} 600ms cubic-bezier(0.68, -0.05, 0.27, 1.05) forwards;
  transform-origin: bottom center;
`;

export const Info = styled.div`
  position: absolute;
  opacity: 0;
  z-index: 3;
  padding: 5px;
  height: 20px;
  background-color:  rgba(0, 0, 0, 0.4);
  font-size: 8px;
  min-width: 50px;
  top: -23px;
  border-radius: 4px;
  color: #FFF;
  transition-delay: 0.04s;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  padding: 30px 30px;
  align-items: flex-end;
  width: 100%;
  flex: 1;
`;

export const Sections = styled.div`
  position: absolute;
  z-index: 2;
  left: 70px;
  bottom: 85px;
  width: calc(100% - 100px);
  display: flex;
  justify-content: space-between;
  height: 53.5%;

  > section {
    text-align: center;
    width: auto;
    position: relative;

    & + section {
      margin-left: 75px;
    }

    & > span {
      display: block;
      font-weight: normal;
      font-size: 11px;
      color: ${(props) => props.theme.colors.font.primary};
      margin-top: 15px;
    }
  }
`;

export const CartesianPlane = styled.div`
  width: 100%;
  padding: 1px;
  height: 100%;

  & > div {
    height: 46px;
    width: 100%;
    border-bottom: dashed  1px ${(props) => props.theme.colors.font.secondary};
    position: relative;

    h2 {
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 1.1px;
      color: ${(props) => props.theme.colors.font.quintenary};
      display: block;
      min-width: 60px;
      position: absolute;
      left: -10px;
    }

    > span {
      background-color: ${(props) => props.theme.colors.mainBackground};
      min-width: 60px;
      position: absolute;
      left: -10px;
      top: -10px;
      font-weight: normal;
      font-size: 11px;
      line-height: 18px;
      letter-spacing: 1.1px;
    }
  }

  & > div:nth-last-of-type(1) {
    border-bottom: none;
  }
`;

export const SubTitles = styled.div`
  position: absolute;
  top: 65px;
  right: 60px;

  > div + div {
    margin-top: 10px;
  }

  > div {
    display: flex;
    align-items: center;

    > span {
      margin-left: 8px;
      font-size: 11px;
      line-height: 18px;
      letter-spacing: 1.1px;
      color: ${(props) => props.theme.colors.font.secondary};
    }
  }
`;

export const SquareSubtitle = styled.div<SquareSubtitleStylesProps>`
  background-color: ${(props) => linearGradient({
    colorStops: [`${props.theme.colors[props.color]} 0%`, `${darken(0.18, props.theme.colors[props.color])} 100%`],
    toDirection: '45deg',
  })};

  width: 15px;
  height: 15px;
  border-radius: 2px;
`;
