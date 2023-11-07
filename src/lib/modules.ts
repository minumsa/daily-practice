// 페이지 총 수를 받아서 무작위 페이지 번호를 반환하는 함수
export const getRandomPage = (totalCount: number) => {
  return Math.floor(Math.random() * (totalCount - 1)) + 1;
};
