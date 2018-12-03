import utility from 'utility'

export function getRedictPath(page, infos) {
  switch(page) {
    case 'login':
      if(infos.needFillInfo) {
        return 'info'
      } else {
        return 'dashbord'
      }
    case 'register':
      return 'info'
    default:
      return null;
  }
  
}

export function md5encryption(psw){
  return utility.md5(utility.md5( 'wS#$%@#$%^&$%^asdfhhIUG2435hn' + psw + 'wS#$%@#$%zJmA23124_=`}@#$%@enehn'))
}