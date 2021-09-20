import { useContext, useState } from "react";
import { DatePicker } from "react-rainbow-components";
import { showCalendar } from "../../context/DataActions";
import DataContext from "../../context/DataContext";
import moment from "moment";
import { getPhotoFromDate } from "../../api";

const CalendarModal = () => {
  const [date, setDate] = useState(undefined);
  const today = new Date();
  const [formatDate, setFormatDate] = useState<string>("");
  const context = useContext(DataContext);

  const onChange = (date: any) => {
    setFormatDate(moment(date).format("YYYY-MM-DD"));
    setDate(date);
  };

  const searchPhotoByDate = () => {
    getPhotoFromDate(formatDate)
      .then((data) => context?.setData(data))
      .finally(() => context?.setShowPhoto(true));
  };

  return (
    <div className="w-2/4 mx-auto my-12">
      <DatePicker
        id="datePicker-1"
        value={date}
        onChange={onChange}
        formatStyle="large"
        maxDate={today}
      />
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="inline-flex mr-2 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-green-700 bg-green-200 hover:bg-green-600 hover:text-white focus:outline-none"
          onClick={() => showCalendar(context)}
        >
          Cancel
        </button>
        <button
          onClick={() => searchPhotoByDate()}
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green hover:bg-green-700 focus:outline-none"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default CalendarModal;
