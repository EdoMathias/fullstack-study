import { useNavigate } from 'react-router-dom';
import VacationModel from '../../../Models/VacationModel';
import './VacationCard.css';
import { vacationService } from '../../../Services/VacationService';
import { notify } from '../../../Utils/Notify';
import useDateFormat from '../../../Hooks/useDateFormat';

type VacationCardProps = {
  vacation: VacationModel;
  roleId: number;
};

function VacationCard(props: VacationCardProps): JSX.Element {
  const navigate = useNavigate();

  async function editProduct() {
    navigate(`/edit/${props.vacation.id}`);
  }

  async function handleDelete(vacationId: number) {
    try {
      await vacationService.deleteVacation(vacationId);
    } catch (error) {
      notify.error(error);
    }
  }

  return (
    <div className="VacationCard">
      <img src={props.vacation.imageUrl} />
      {props.vacation.destination}
      <br />
      {useDateFormat(props.vacation.startDate)}
      <br />
      {useDateFormat(props.vacation.endDate)}
      <br />
      {props.vacation.description}
      <br />
      Price: {props.vacation.price}
      <br />
      {props.roleId === 1 ? (
        <>
          <button onClick={() => editProduct()}>Edit</button>
          <button onClick={() => handleDelete(props.vacation.id)}>
            Delete
          </button>
        </>
      ) : null}
    </div>
  );
}

export default VacationCard;
