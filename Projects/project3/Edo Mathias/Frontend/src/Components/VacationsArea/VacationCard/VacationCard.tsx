import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VacationModel from '../../../Models/VacationModel';
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
  Tooltip,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { likesService } from '../../../Services/LikeService';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import './VacationCard.css';

type VacationCardProps = {
  vacation: VacationModel;
  roleId: number;
};

function VacationCard(props: VacationCardProps): JSX.Element {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  async function handleLike() {
    if (props.vacation.isLiked) {
      await likesService.removeLike(props.vacation);
    } else {
      await likesService.addLike(props.vacation);
    }
  }

  function editVacation() {
    navigate(`/edit/${props.vacation.id}`);
  }

  async function handleDelete(vacationId: number) {
    try {
      await vacationService.deleteVacation(vacationId);
      setIsDeleteModalOpen(false);
    } catch (error) {
      notify.error(error);
    }
  }

  return (
    <div className="card-container">
      <Card
        sx={{
          maxWidth: 450,
          minWidth: 450,
          maxHeight: 340,
          minHeight: 340,
          fontFamily: 'Mantinia Regular',
          backgroundColor: '#E2C799',
        }}
      >
        <CardActionArea disableRipple>
          <CardMedia
            component="img"
            height="140"
            image={props.vacation.imageUrl}
            alt={props.vacation.destination}
          />
          <Tooltip title={props.vacation.description} placement="top">
            <CardContent
              sx={{
                p: 1,
              }}
            >
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
                sx={{ fontFamily: 'Mantinia Regular', pointerEvents: 'none' }}
                variant="body2"
                color="text.primary"
                className="description"
              >
                {props.vacation.description}
              </Typography>
            </CardContent>
          </Tooltip>
        </CardActionArea>
        <CardActions sx={{ p: 0 }}>
          {props.roleId === 1 ? (
            <>
              <Button
                sx={{
                  fontFamily: 'Mantinia Regular',
                  color: '#E2C799',
                  border: '1px solid #E2C799',
                  backgroundColor: '#3D405B',
                  pointerEvents: 'auto',
                  '&:hover': {
                    backgroundColor: '#565d7e',
                    color: '#E2C799',
                  },
                }}
                size="small"
                color="primary"
                onClick={editVacation}
              >
                Edit
              </Button>
              <Button
                sx={{
                  fontFamily: 'Mantinia Regular',
                  color: '#E2C799',
                  border: '1px solid #E2C799',
                  backgroundColor: '#3D405B',
                  pointerEvents: 'auto',
                  '&:hover': {
                    backgroundColor: '#565d7e',
                    color: '#E2C799',
                  },
                }}
                size="small"
                color="error"
                onClick={() => setIsDeleteModalOpen(true)}
              >
                Delete
              </Button>
            </>
          ) : (
            <>
              <Button
                disableRipple
                size="small"
                color="error"
                onClick={() => handleLike()}
              >
                {props.vacation.isLiked ? (
                  <FavoriteIcon
                    sx={{
                      color: 'red',
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    sx={{
                      color: 'black',
                    }}
                  />
                )}
                <span>{props.vacation.likesCount}</span>
              </Button>
            </>
          )}
        </CardActions>
      </Card>
      <DeleteConfirmationModal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => handleDelete(props.vacation.id)}
      />
    </div>
  );
}

export default VacationCard;
