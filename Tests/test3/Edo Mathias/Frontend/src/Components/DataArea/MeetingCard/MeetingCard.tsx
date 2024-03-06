import { Card, CardContent, Typography } from '@mui/material';
import { MeetingModel } from '../../../Models/meeting-model';
import { TeamModel } from '../../../Models/team-model';
import './MeetingCard.css';

type MeetingCardProps = {
  meeting: MeetingModel;
  currentTeam: TeamModel;
};

const MeetingCard = ({ meeting, currentTeam }: MeetingCardProps) => {
  const averageTime = (startTime: string, endTime: string) => {
    const difference = new Date(
      new Date(endTime).getTime() - new Date(startTime).getTime()
    );
    return difference.toISOString().substring(11, 16);
  };

  return (
    <Card className="meeting-card">
      <CardContent>
        <Typography variant="h5" component="h2">
          {currentTeam.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {meeting.description}
        </Typography>
        <Typography>
          From: {meeting.startDateTime.replace('T', ' - ').split('.')[0]}
        </Typography>
        <Typography>
          To: {meeting.endDateTime.replace('T', ' - ').split('.')[0]}
        </Typography>
        <Typography>
          Total time: {averageTime(meeting.startDateTime, meeting.endDateTime)}
        </Typography>
        <Typography variant="body2" component="p">
          Room: {meeting.roomName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MeetingCard;
