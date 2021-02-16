import React from 'react';

import {
  Container, HeaderCell, BodyCell, RowBody, BreakLine, CheckBox,
} from './styles';

export type HeaderType = {
  title: string
  reference: string
  contrast?: boolean
  width?: number,
}

export type DataType = any[]

interface TableProps {
  data: any[]
  header: HeaderType[]
  editable?: boolean
  title: string
}

const Table = ({
  data, header, editable = false, title: titleTable,
}: TableProps) => (
  <Container>
    <span>{ titleTable }</span>

    <header>
      { editable && <CheckBox /> }
      { header.map(({ title }) => <HeaderCell collumns={header.length} editable>{title}</HeaderCell>) }
    </header>

    <BreakLine />

    {data.map((item) => (
      <RowBody>
        { editable && <CheckBox><input type="checkbox" name="" id="" /></CheckBox> }
        {
          header.map(({ reference, contrast = false }) => (
            <BodyCell collumns={header.length} contrast={contrast} editable>
              {item[reference]}
            </BodyCell>
          ))
        }
      </RowBody>

    ))}

  </Container>
);

export default Table;
