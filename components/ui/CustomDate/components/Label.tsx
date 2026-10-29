import { monthLiteral } from "@/constants";
import { FaCalendar } from "react-icons/fa";

interface LabelProps {
    initialMonth: string | number,
    endMonth: string | number,
    initialYear: string | number,
    endYear: string | number
}

export const Label = (props: LabelProps) => {
    return (
    <div className="flex items-center gap-2 p-2 whitespace-nowrap">
        <FaCalendar size={14} />
        <span>
        {monthLiteral[Number(props.initialMonth)]} {props.initialYear} -
        </span>
        <span>
        {" "}
        {monthLiteral[Number(props.endMonth)]} {props.endYear}
        </span>
    </div>
    )
};
