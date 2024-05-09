/** @format */

export function getFilmStats(list) {
  const total = list.length;
  const avg_score =
    list.reduce((acc, curr) => acc + Number(curr.rt_score), 0) / total;
  const acc_score = list.reduce((acc, curr) => acc + Number(curr.rt_score), 0);
  const latest = Math.max(...list.map(film => Number(film.release_date)));

  return {avg_score, acc_score, total, latest};
}


