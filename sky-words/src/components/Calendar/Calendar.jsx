export function Calendar({
    month = "Сентябрь 2023",
    value = "08.09.2023",
    periodText = "Выберите срок исполнения",
    selectedDate = null,
    onDateSelect = null
}) {
    const days = [
        28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30, 1
    ];

    const handleCellClick = (day) => {
        if (!onDateSelect) return;
        const formatted = day < 10 ? `0${day}.10.23` : `${day}.10.23`;
        onDateSelect(formatted);
    };

    return (
        <div className="pop-new-card__calendar calendar">
            <p className="calendar__ttl subttl">Даты</p>
            <div className="calendar__block">
                <div className="calendar__nav">
                    <div className="calendar__month">{month}</div>
                    <div className="nav__actions">
                        <div className="nav__action" data-action="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                            </svg>
                        </div>
                        <div className="nav__action" data-action="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="calendar__content">
                    <div className="calendar__days-names">
                        <div className="calendar__day-name">пн</div>
                        <div className="calendar__day-name">вт</div>
                        <div className="calendar__day-name">ср</div>
                        <div className="calendar__day-name">чт</div>
                        <div className="calendar__day-name">пт</div>
                        <div className="calendar__day-name -weekend-">сб</div>
                        <div className="calendar__day-name -weekend-">вс</div>
                    </div>
                    <div className="calendar__cells">
                        {days.map((day, i) => {
                            const isOtherMonth = i < 3 || i >= 34;
                            const isWeekend = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34].includes(i);
                            const isSelected = selectedDate && parseInt(selectedDate.split('.')[0], 10) === day && !isOtherMonth;

                            return (
                                <div
                                    key={i}
                                    className={`calendar__cell ${isOtherMonth ? '_other-month' : '_cell-day'} ${isWeekend ? '_weekend' : ''} ${isSelected ? '_current' : ''}`}
                                    onClick={() => !isOtherMonth && handleCellClick(day)}
                                    style={{ cursor: isOtherMonth ? 'default' : 'pointer' }}
                                >
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <input type="hidden" id="datepick_value" value={value} />
                <div className="calendar__period" style={{ textAlign: 'left' }}>
                    <p className="calendar__p date-end">
                        {periodText}
                        {selectedDate ? (
                            <span className="date-control">{selectedDate}</span>
                        ) : (
                            <span className="date-control">(не указана)</span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}