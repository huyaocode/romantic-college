import utility from 'utility'

export function getRedictPath(infos) {
  if(! infos.major){
    return 'info'
  }
  return null;
}

export function md5encryption(psw){
  return utility.md5(utility.md5( 'wS#$%@#$%^&$%^asdfhhIUG2435hn' + psw + 'wS#$%@#$%zJmA23124_=`}@#$%@enehn'))
}