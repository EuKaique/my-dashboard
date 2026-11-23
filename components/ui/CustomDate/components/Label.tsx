import { months } from "@/constants";
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
        {months[Number(props.initialMonth)].slice(0, 3)} {props.initialYear} -
        </span>
        <span>
        {" "}
        {months[Number(props.endMonth)].slice(0, 3)} {props.endYear}
        </span>
    </div>
    )
};
