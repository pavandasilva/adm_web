import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { startAttendance } from '../../store/attendance/actions';
import Button from '../Button';

// import { Container } from './styles';

const Teste = () => {
  const dispatch = useDispatch();

  const handleAtenderOnClick = () => {
    dispatch(startAttendance({
      currentButtonActive: 'general',
      customer: {
        address: 'teste',
        contact: {
          id: 2,
          name: 'Meu Contato',
        },
        id: 3,
        name: 'Cliente 3',
      },
    }));
  };

  const attendence = useSelector<AppState>((state) => state.attendance);
  console.log(attendence);

  return <Button color="primary" onClick={handleAtenderOnClick}>Atender</Button>;
};

export default Teste;
