import { DatePicker } from './DatePicker';
export function DateRangePicker() { return <div className="grid gap-3 sm:grid-cols-2"><DatePicker aria-label="Data inicial" /><DatePicker aria-label="Data final" /></div>; }
