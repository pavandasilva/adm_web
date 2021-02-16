import styled from 'styled-components';

interface TableHeaderStyles {
  collumns: number
  editable: boolean
}

interface TableHeaderBodyStyles {
  contrast: boolean
  collumns: number
  editable: boolean
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.mainBackground};
  border-radius: 5px;
  overflow: hidden;

  > span {
    display: flex;
    align-items: center;
    height: 70px;
    padding-left: 25px;
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.font.secondary};
    width: 100%;
    letter-spacing: 1.3px;
  }

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const HeaderCell = styled.div<TableHeaderStyles>`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1.2px;
  color: ${(props) => props.theme.colors.font.primary};
  height: 70px;
  width: calc((100% - ${(props) => (props.editable ? '60px' : '0px')}) / ${(props) => props.collumns});
`;

export const BodyCell = styled.div<TableHeaderBodyStyles>`
  display: flex;
  padding: 0px 10px;
  align-items: center;
  font-size: ${(props) => (props.contrast ? '13px' : '12px')};
  color: ${(props) => (props.contrast ? props.theme.colors.font.primary : props.theme.colors.font.secondary)};
  font-weight:  ${(props) => (props.contrast ? '600' : 'normal')};
  height: 77px;
  letter-spacing: 1.2px;
  width: calc((100% - ${(props) => (props.editable ? '60px' : '0px')}) / ${(props) => props.collumns});
  overflow: hidden;
`;

export const RowBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.font.quaternary};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.mainBackgroundLight};
    transition: all 0.4s;
    transition-delay: 0.04s;
  }
`;

export const BreakLine = styled.div`
  width: 100%;
  padding : 1px;
`;

export const CheckBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 60px;
`;
