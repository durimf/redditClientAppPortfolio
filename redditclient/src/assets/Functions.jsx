

export function kFormatter(num) {
 return Math.abs(num) > 999
  ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
  : Math.sign(num) * Math.abs(num)
}


export function postCreationTimeFormatter(UTCSeconds) {

 var date = new Date(0) // The 0 there is the key, which sets the date to the epoch
 date.setUTCSeconds(UTCSeconds)
 var today = new Date()
 const daysPassed = Math.abs(today.getDate() - date.getDate())
 const hoursPassed = Math.abs(date.getHours() - today.getHours())
 let postInHours =
  hoursPassed > 1 ? hoursPassed + ' hours ago' : hoursPassed + ' hour ago'
 let postInDays =
  daysPassed > 1 ? daysPassed + ' days ago' : daysPassed + ' day ago'

 let postTime = ''

 if (daysPassed === 0) {
  postTime = postInHours
 } else {
  postTime = postInDays
 }
 return postTime
}