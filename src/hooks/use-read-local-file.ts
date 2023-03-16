function useReadLocalFile () {
  const getFile = (fileUrl:string) => {
    let xhr = null;
    xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
    const status = document.location.protocol === 'file' ? 0: 200;
    xhr.open('GET',fileUrl,false)
    xhr.overrideMimeType('text/html;charset=utf-8')
    xhr.send(null)
    return  xhr.status === status? xhr.responseText : null;
  }

  return {
    getFile
  }
}

export { useReadLocalFile }