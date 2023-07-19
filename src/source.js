var global$1 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window : {});

var xhr$1;

function checkTypeSupport(type) {
  if (!xhr$1) {
    console.log(global$1);
    xhr$1 = new global$1.XMLHttpRequest();
    // If location.host is empty, e.g. if this page/worker was loaded
    // from a Blob, then use example.com to avoid an error
    xhr$1.open('GET', global$1.location.host ? '/' : 'https://example.com');
  }
  try {
    xhr$1.responseType = type;
    return xhr$1.responseType === type
  } catch (e) {
    return false
  }

}

checkTypeSupport('arraybuffer');

module.exports = function forTestingPurposes () {
  return true;
}
