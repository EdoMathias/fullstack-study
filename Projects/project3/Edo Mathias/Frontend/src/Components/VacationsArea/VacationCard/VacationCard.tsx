import { useNavigate } from 'react-router-dom';
import VacationModel from '../../../Models/VacationModel';
import './VacationCard.css';
import { vacationService } from '../../../Services/VacationService';
import { notify } from '../../../Utils/Notify';
import useDateFormat from '../../../Hooks/useDateFormat';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from '@mui/material';

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
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: 340,
        minHeight: 340,
        fontFamily: 'Mantinia Regular',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.vacation.imageUrl}
          alt={props.vacation.destination}
        />
        <CardContent sx={{ p: 1 }}>
          <Typography
            sx={{ fontFamily: 'Mantinia Regular' }}
            variant="h5"
            component="div"
          >
            {props.vacation.destination}
          </Typography>
          <Typography
            sx={{ fontFamily: 'Mantinia Regular' }}
            variant="subtitle1"
            color="text.primary"
          >
            PRICE: {props.vacation.price} Runes
          </Typography>
          <Typography
            sx={{ fontFamily: 'Mantinia Regular' }}
            variant="subtitle2"
            color="text.secondary"
          >
            {useDateFormat(props.vacation.startDate)} -{' '}
            {useDateFormat(props.vacation.endDate)}
          </Typography>
          <Typography
            sx={{ fontFamily: 'Mantinia Regular' }}
            variant="body2"
            color="text.primary"
            className="description"
          >
            {props.vacation.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 0 }}>
        {props.roleId === 1 ? (
          <>
            <Button
              sx={{ fontFamily: 'Mantinia Regular' }}
              size="small"
              color="primary"
              onClick={editProduct}
            >
              Edit
            </Button>
            <Button
              sx={{ fontFamily: 'Mantinia Regular' }}
              size="small"
              color="error"
              onClick={() => handleDelete(props.vacation.id)}
            >
              Delete
            </Button>
          </>
        ) : (
          <>
            <Button size="small" color="primary">
              Follow
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}

export default VacationCard;
