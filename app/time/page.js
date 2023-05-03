export default function Time() {
  const now = new Date();
  const year = now.getFullYear(); // 년도를 가져옵니다.
  const month = now.getMonth() + 1; // 월을 가져옵니다. 0부터 시작하므로 1을 더합니다.
  const day = now.getDate(); // 일을 가져옵니다.
  const hours = now.getHours(); // 시간을 가져옵니다.
  const minutes = now.getMinutes(); // 분을 가져옵니다.

  return (
    <div>
      <h4>
        오늘은 {year}년 {month}월 {day}일 입니다
      </h4>
      <h4>
        지금은 {hours}시 {minutes}분 입니다
      </h4>
    </div>
  );
}
