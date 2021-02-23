import React, { useState } from 'react';

import { Container, Days, Day } from './styles';

interface CalendarProps {
  dayOnClick?: (date: Date) => void
}

const Calendar = () => {
  const [selected, setSelected] = useState(0);

  const handleDayOnClick = (index: number) => {

  };

  return (
    <Container>
      <h2>23 dezembro, domingo</h2>
      <Days>
        <Day isToday isActive={selected === 0} onClick={() => setSelected(0)}>
          <span>Dom</span>
          <p>23</p>
        </Day>
        <Day isActive={selected === 1} onClick={() => setSelected(1)}>
          <span>Seg</span>
          <p>14</p>
        </Day>
        <Day isActive={selected === 2} onClick={() => setSelected(2)}>
          <span>Ter</span>
          <p>15</p>
        </Day>
        <Day isActive={selected === 3} onClick={() => setSelected(3)}>
          <span>Qua</span>
          <p>16</p>
        </Day>
        <Day isActive={selected === 4} onClick={() => setSelected(4)}>
          <span>Qui</span>
          <p>17</p>
        </Day>
        <Day isActive={selected === 5} onClick={() => setSelected(5)}>
          <span>Sex</span>
          <p>18</p>
        </Day>
        <Day isActive={selected === 6} onClick={() => setSelected(6)}>
          <span>Sab</span>
          <p>19</p>
        </Day>
      </Days>
    </Container>
  );
};

export default Calendar;
