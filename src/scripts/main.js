window.addEventListener('DOMContentLoaded', function() {

  // CONTADOR

  const dataEvento = new Date('Jun 27, 2025 00:00:00')

  const atualizaAsHoras = this.setInterval(function() {

    const dataAtual = new Date()
    const diferencaDasHoras = dataEvento.getTime() - dataAtual.getTime()

    const tempoEmMs = {
      dias: 1000*60*60*24,
      horas: 1000*60*60,
      minutos: 1000*60,
      segundos: 1000
    }

    const dias = Math.floor(diferencaDasHoras / (1000 * 60 * 60 * 24))
    const horas = Math.floor((diferencaDasHoras % tempoEmMs.dias) / tempoEmMs.horas)
    const minutos = Math.floor((diferencaDasHoras % tempoEmMs.horas) / tempoEmMs.minutos)
    const segundos = Math.floor((diferencaDasHoras % tempoEmMs.minutos) / tempoEmMs.segundos)

    if (diferencaDasHoras < 0) {
      clearInterval(atualizaAsHoras)
      document.getElementById('timeToEvent').parentNode.innerHTML = `O evento foi finalizado em <span id="timeToEvent">${dataEvento.toLocaleString().split(',')[0]} às ${('0' + dataEvento.getHours()).slice(-2)}:${('0' + dataEvento.getMinutes()).slice(-2)}</span>`
    } else {
      document.getElementById('timeToEvent').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`
    }

  }, 1000)

  // MODAL

  const modal = document.getElementById('modal')
  const modalContent = document.querySelector('.modal__content')
  const itens = document.querySelectorAll('.ambientes__grid__list__item')

  for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', function(e) {

      modalContent.firstElementChild.src = e.target.src

      modal.style.display = 'flex';
    })
  }

  window.addEventListener('click', function(e) {
    if(e.target == modal) {
      modal.style.display = 'none';
    }
  })

})