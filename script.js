console.log("Linked");


const myHeaders = new Headers();
myHeaders.append("x-api-key", "aMFouLkMjcxGopFBPmzjWGMKQCkVKPDMsghukTvPHaPWzsqALZZFfGRtpBgvEKVVLGDJjDBavveHcoVKhuqjovsRWhkgGEQiyRmX");
myHeaders.append("x-app-version", "1.0.0");
myHeaders.append("x-apihub-key", "pMT7I6g2e0HPFa6Fhp0JdS1BlNjUV1yDvCUYZJl3BLp0ESJfv6");
myHeaders.append("x-apihub-host", "Currency-Converter.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "f7a950b7-e795-4241-b4ab-1c646fcabadc");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

fetch("https://Currency-Converter.proxy-production.allthingsdev.co/api/v1/currency/list", requestOptions)
   .then((response) => response.text())
   .then((result) => console.log(result))
   .catch((error) => console.error(error));

   console.log("Currency");