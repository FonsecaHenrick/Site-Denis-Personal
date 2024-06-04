window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
 })

 function abrirModal(){
    const modal = document.getElementById('janela_modal')
    modal.classList.add('abrir')

    modal.addEventListener('click',(e) => {
      if(e.target.id =='fechar' || e.target.id == 'janela_modal'){
        modal.classList.remove('abrir')
      }
    }
    )}




  const observer = new IntersectionObserver( entries => {
    console.log(entries)
  })

  observer.observe(document.querySelector('.init-hidden'))