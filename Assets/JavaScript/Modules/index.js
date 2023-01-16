import { AwsomeBooks } from './AwsomeBooks.js';
import { DateTime } from '../luxon.js';

const lux = document.getElementById('myTime');
const now = DateTime.local();
const formatted = now.toFormat('yyyy/M/dd h:mm a');
lux.innerHTML = formatted;

let retData = [];

if (localStorage.bookListStorage !== undefined) {
  retData = JSON.parse(localStorage.bookListStorage);
}
const myBook = new AwsomeBooks(retData);