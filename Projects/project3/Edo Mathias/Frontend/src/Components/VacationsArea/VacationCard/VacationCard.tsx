import { NavLink } from "react-router-dom";
import VacationModel from "../../../Models/VacationModel";
import "./VacationCard.css";

type VacationCardProps = {
    vacation: VacationModel;
};

function VacationCard(props: VacationCardProps): JSX.Element {
    return (
        <div className="VacationCard">
            <div>
                <img src={props.vacation.imageUrl} />
                {props.vacation.destination}
                <br />
                {props.vacation.startDate}
                <br />
                {props.vacation.endDate}
                <br />
                {props.vacation.description}
                <br />
                Price: {props.vacation.price}
            </div>
        </div>
    );
}

export default VacationCard;
