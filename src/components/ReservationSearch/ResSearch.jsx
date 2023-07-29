import React from "react";
import { useState } from "react";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";
import moment from "moment";
import { GoDash } from "react-icons/go";
import {
  PiCaretDownLight,
  PiCaretRightLight,
  PiCaretLeftLight,
} from "react-icons/pi";

const ResSearch = () => {
  const today = moment();
  const tomorrow = moment(today).add(1, "days");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [focusedInput, setFocusedInput] = useState();
  const renderCalendarInfo = () => {
    return (
      <div>
        <span className="no-check-in">
          <div className="check-key1"></div>
          <span className="checkinout-info">No Check-in</span>
          <div className="check-key2"></div>
          <span className="checkinout-info">No Check-out</span>
        </span>
      </div>
    );
  };

  return (
    <div className="res-search-wrapper">
      <div className="res-search-bar small-size-only">
        <div className="top-stay-bar">
          Your Stay:
          <div className="date-range">
            <DateRangePicker
              className="date-range-picker"
              startDate={startDate}
              startDateId="start-date"
              endDate={endDate}
              endDateId="end-date"
              onDatesChange={({ startDate, endDate }) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
              focusedInput={focusedInput}
              onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
              displayFormat="ddd, MMM D, YYYY"
              noBorder
              customArrowIcon={<GoDash />}
              numberOfMonths={1}
              withPortal
              daySize={50}
              keepOpenOnDateSelect
              renderCalendarInfo={renderCalendarInfo}
            />
          </div>
          <div className="stay-info">
            CA 0.00 <PiCaretDownLight />
          </div>
        </div>
        <div className="bottom-guest-bar">Guest:</div>
      </div>
    </div>
  );
};
export default ResSearch;
