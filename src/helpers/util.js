export default {
  transformTime(dateStr){
  let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
  let time = dateObj.getTime()
  let now = Date.now()
  let diffrence = (now - time)/1000
  let word = ''
  switch(true) {
    case diffrence < 60:
      word = '刚刚'
      break
    case diffrence < 60*60:
      word = Math.floor(diffrence/(60)) + '分钟前'
      break
    case diffrence < 60*60*24:
      word = Math.floor(diffrence/(60*60)) + '小时前'
      break
    default:  
      word = Math.floor(diffrence/(60*60*24)) + '天前'
  }
  return word
},

  ADtime(dateStr){
    let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
    let time = dateObj.toLocaleString()
    return time
  }
} 