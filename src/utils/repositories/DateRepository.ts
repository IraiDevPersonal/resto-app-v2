import dayjs, { Dayjs } from "dayjs";

export class DateRepository {
	private date: Dayjs;

	constructor(date: Dayjs = dayjs()) {
		this.date = date;
	}

	parse({ date = this.date, format }: { date?: Dayjs; format: DateFormat }) {
		return dayjs(date).format(DATE_FORMAT[format]);
	}
}

type DateFormat = keyof typeof DATE_FORMAT;

const DATE_FORMAT = {
	amd: "YYYY-MM-DD",
	dma: "DD-MM-YYYY",
	amdh: "YYYY-MM-DD",
	dmah: "DD-MM-YYYY hh:mm",
	dmonth: "DD MMM",
	time_24: "HH:mm",
	time_12: "hh:mm",
	yy: "YY",
	yyyy: "YYYY",
	mm: "MM",
	mmmm: "MMMM",
	dd: "DD",
	dddd: "DDDD",
	hhmm: "hh:mm",
	hhmmss_12: "hh:mm:ss A",
	ddddmmmYYYY: "ddd D, MMMM YYYY"
};
