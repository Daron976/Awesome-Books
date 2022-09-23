import { DateTime } from '/node_modules/luxon/src/luxon.js';

const luxury = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  const printDate = document.querySelector('.date');
  printDate.innerHTML = date;
};

export default luxury;