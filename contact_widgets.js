(function () {var options = {
  whatsapp: "+60198908285",
  telegram: "lerryws",
  email: "lerryws.xyz@outlook.com",
  call_to_action: "Question or Inquiry?",
  button_color: "#6dcc6e",
  position: "right",
  order: "whatsapp,telegram,email",
};
var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
