import date from 'date-and-time';
const passwordGenerator = require('generate-password');
const randomEmailGenerator = require('email-generator');

function randomDate(start, end) {
  return date.format(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())), 'YYYY/MM/DD HH:mm:ss'); 
}

function generateRandomPassword(hasNumber, hasUpperCase, hasLowerCase, length = 10) {
 return passwordGenerator.generate({length: length, numbers: hasNumber, uppercase: hasUpperCase, lowercase: hasLowerCase, strict: true})
}

function generateRandomEmail(additionalCharacters = '') {
  return randomEmailGenerator.generateEmail().replaceAll('"','') + additionalCharacters
}

const cookiesToAccept = 'btVisitedCookie=0; btVisorga=0; dtCookie=v_4_srv_2_sn_7111D5AEA3CBAF55E1AB39C1C6C90E55_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1_rcs-3Acss_0; s_fid=4BCD3D9902FF156F-0A1E4464F7F108C2; _analytics_prev_pagename=con:order:checkout:account-details; bt_cookie_policy={%22performance%22:false%2C%22functional%22:false%2C%22targeting%22:false}; notice_preferences=3:; TAconsentID=0eb46a72-5441-4823-bf14-8f3ea1d2259a; notice_gdpr_prefs=0|1|2|3:; cmapi_gtm_bl=; cmapi_cookie_privacy=permit_1|2|3|4; s_ecid=MCMID%7C80379782631177130742745866684633623979; AMCVS_0AA54673527831890A490D45%40AdobeOrg=1; s_cc=true; at_check=true; AMCV_0AA54673527831890A490D45%40AdobeOrg=-2121179033%7CMCMID%7C80379782631177130742745866684633623979%7CMCAID%7CNONE%7CMCOPTOUT-1657901732s%7CNONE%7CMCAAMLH-1658499332%7C6%7CMCAAMB-1658499332%7Cj8Odv6LonN4r3an7LhD3WZrU1bUpAkFkkiY1ncBR96t2PTI%7CMCSYNCSOP%7C411-19196%7CvVersion%7C5.3.0; mbox=session#6338d9251a5e4426bd02e12035a4ad78#1657896394|PC#6338d9251a5e4426bd02e12035a4ad78.37_0#1721139334; mdLogger=false; kampyle_userid=397b-df3d-7394-72b8-6e5c-ca7e-2b14-5618; Tld-kampyleUserSession=1657894533823; Tld-kampyleUserSessionsCount=1; Tld-kampyleSessionPageCounter=1; Tld-kampyleUserPercentile=73.8985166261857; _ga_19536D3EL2=GS1.1.1657894534.1.0.1657894534.0; _ga=GA1.2.43700898.1657894534; _gid=GA1.2.1300886829.1657894534; _gat_gtag_UA_35439723_1=1; _gcl_au=1.1.791382101.1657894534; smc_uid=1657894534762646; smc_tag=eyJpZCI6MzE0OSwibmFtZSI6ImJ0LmNvbSJ9; smc_tpv=1; smc_spv=1; smc_sesn=1; smct_session=%7B%22s%22%3A1657894535777%2C%22l%22%3A1657894544771%2C%22lt%22%3A1657894542770%2C%22t%22%3A8%2C%22p%22%3A10%7D' 

export { randomDate, generateRandomPassword, generateRandomEmail, cookiesToAccept }