function name() {
    const time = document.querySelectorAll('.span')
    const input = document.querySelector('.game-3__input')
    const button = document.querySelector('.game-3__button')
    let c = 0
    let f = 0
    let  a = 0
    button.addEventListener('click', e => {
        if(Math.round(Number(input.value / 60 )) >= 1){
            if(f >= 60){
                f = 0
                c +=1
        }
        if(c >= 24){
            c = 0
            a++
            time[0].textContent = a +'ДН'
            console.log(a);
        }
            f += Number(input.value % 60)
           c += (Number(Number(input.value)  - Number(input.value) % 60) / 60)
            time[1].textContent =  c +'год'
            time[2].textContent = f + 'МИН'
    }
    })
}
name()