function hideAll() {
  document.querySelectorAll(".box").forEach(b => b.style.display = "none");
}

function show(id) {
  hideAll();
  document.getElementById(id).style.display = "block";
}

hideAll();

function addUser() {
  const u = userCode.value;
  userOut.textContent = `USER CREATED: ${u}`;
  log(`USER CREATED: ${u}`);
}

function addSite() {
  const s = siteCode.value;
  siteOut.textContent = `SITE CREATED: ${s}`;
  log(`SITE CREATED: ${s}`);
}

function processNet() {
  netOut.textContent = "NET TRANSFER PROCESSED";
  log("NET TRANSFER PROCESSED");
}

function refreshReport() {
  reportOut.textContent = "REPORT UPDATED";
}

function log(msg) {
  logOut.textContent += msg + "\n";
}

