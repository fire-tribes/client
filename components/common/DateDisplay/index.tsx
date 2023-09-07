function DateDisplay() {
  const currentDate = new Date();
  return <p>{currentDate.toDateString()}</p>;
}

export default DateDisplay;
