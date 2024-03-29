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
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { styled } from '@mui/material/styles';

type VacationCardProps = {
  vacation: VacationModel;
  roleId: number;
};

function VacationCard(props: VacationCardProps): JSX.Element {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  async function handleLike() {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  }

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
    <div className="card-container">
      <Card
        sx={{
          maxWidth: 300,
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
              <Button
                disableRipple
                size="small"
                color="error"
                onClick={() => handleLike()}
              >
                {isLiked ? (
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
                <span>{likes}</span>
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default VacationCard;
