function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DFCD7K0SL9":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbx-JddlWKbgZyhYnMawL5l1PTUIIIZF0MhFzLaFLaERUxBwZ__IqZLtDkk1tpUHw1QS/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v11q4attempts:player.GetVar("v11q4attempts"),v11q4answeredcorrect:player.GetVar("v11q4answeredcorrect")})
	}
	)
}

