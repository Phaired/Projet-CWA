import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'component-DatePicker',
    templateUrl: './datepicker.component.html',
})
export class DatePickerComponent implements OnInit {
    MONTH_NAMES = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    showDatepicker = false;
    datepickerValue!: string;
    month!: number; // !: mean promis it will not be null, and it will definitely be assigned
    year!: number;
    no_of_days = [] as number[];
    blankdays = [] as number[];

    constructor() {}

    ngOnInit(): void {
        this.initDate();
        this.getNoOfDays();
    }
    @Output() dateSelected = new EventEmitter<string>();

    onDateSelected(date: number) {
        const selectedDate = new Date(
            this.year,
            this.month,
            date,
        ).toDateString();
        this.datepickerValue = selectedDate;
        this.showDatepicker = false;
        this.dateSelected.emit(selectedDate); // Emit the selected date
    }

    initDate() {
        let today = new Date();
        this.month = today.getMonth();
        this.year = today.getFullYear();
        this.datepickerValue = new Date(
            this.year,
            this.month,
            today.getDate(),
        ).toDateString();
    }

    isToday(date: any) {
        const today = new Date();
        const d = new Date(this.year, this.month, date);
        return today.toDateString() === d.toDateString();
    }

    getDateValue(date: any) {
        let selectedDate = new Date(this.year, this.month, date);
        this.datepickerValue = selectedDate.toDateString();
        this.showDatepicker = false;
    }

    onNextMonthClick() {
        if (this.month === 11) {
            // December
            this.month = 0; // January
            this.year++;
        } else {
            this.month++;
        }
        this.getNoOfDays();
    }

    onPrevMonthClick() {
        if (this.month === 0) {
            // January
            this.month = 11; // December
            this.year--;
        } else {
            this.month--;
        }
        this.getNoOfDays();
    }
    getNoOfDays() {
        let i;
        const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

        // find where to start calendar day of week
        let dayOfWeek = new Date(this.year, this.month).getDay();
        let blankdaysArray = [];
        for (i = 1; i <= dayOfWeek; i++) {
            blankdaysArray.push(i);
        }

        let daysArray = [];
        for (i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }

        this.blankdays = blankdaysArray;
        this.no_of_days = daysArray;
    }

    trackByIdentity = (index: number, item: any) => item;
}
