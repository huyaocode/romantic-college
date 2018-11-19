import utility from 'utility'

export function getRedictPath(infos) {
  let url = infos.sex === 'boy' ? '/boy': '/girl'
  if(! infos.major){
    url += 'info'
  }
  return url;
}

export function md5encryption(psw){
  return utility.md5(utility.md5( 'wS#$%@#$%^&$%^asdfhhIUG2435hn' + psw + 'wS#$%@#$%zJmA23124_=`}@#$%@enehn'))
}