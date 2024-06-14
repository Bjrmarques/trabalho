function batalha(jog, ini){
    console.log(jog.nome+" VS "+ini.nome)
    while(jog.hp>0 && ini.hp>0){
        jog.hp--
        ini.hp--
    }
    console.log("jogador:"+jog.hp)
    console.log("inimigo:"+ini.hp)
}


let jogador = {
    nome: "",
    classe: "",
    hp: 10,
    forca: 0,
    def: 0,
    mag: 0,
    des: 0,
    inventario: [],
}


let inimigo = {
    tipo: 'rato',
    nome: 'Mestre Splinter',
    hp: 20,
    def: 0,
    forca: 5
}
console.log("===Bem vindo(a)=====\nVamos criar seu personagem.")


jogador.nome = prompt("Primeiro, qual seu nome?")


console.log("Agora, vamos escolher a sua classe.\n[1] Mago:\n[2] Arqueiro\n[3] Guerreiro\n[4] Bardo")


let esc = Number(prompt("Digite o número da classe escolhida:"))
switch(esc){
    case 1:
        jogador.classe = "Mago"
        jogador.hp = jogador.hp+10
        jogador.forca = jogador.forca+5
        jogador.def = jogador.def+7
        jogador.mag = jogador.mag+20
        jogador.des = jogador.des+3
        jogador.inventario = ["varinha", "chapéu de mago", "livro"]
        break
    case 2:
        jogador.classe = "Arqueiro"
        jogador.hp = jogador.hp+12
        jogador.forca = jogador.forca+8
        jogador.def = jogador.def+8
        jogador.mag = jogador.mag+5
        jogador.des = jogador.des+20
        jogador.inventario = ["arco", "aljava", "chapéu de arqueiro"]
        break
    case 3:
        jogador.classe = "Guerreiro"
        jogador.hp = jogador.hp+20
        jogador.forca = jogador.forca+15
        jogador.def = jogador.def+10
        jogador.mag = jogador.mag+0
        jogador.des = jogador.des+2
        jogador.inventario = ["espada", "escudo", "chapéu de guerreiro"]
        break
    case 4:
        jogador.classe = "Bardo"
        jogador.hp = jogador.hp+15
        jogador.forca = jogador.forca+5
        jogador.def = jogador.def+10
        jogador.mag = jogador.mag+16
        jogador.des = jogador.des+8
        jogador.inventario = ["flauta", "gaita", "chapéu de bardo", "alaude", "triângulo", "ratos"]
        break
    default:
        jogador.classe = "Indigente"
        jogador.hp = jogador.hp + 5
        jogador.forca = jogador.forca + 5
        jogador.def = jogador.def + 5
        jogador.mag = jogador.mag + 5
        jogador.inventario = ["graveto", "chapéu de indigente"]
        break
}


batalha(jogador, inimigo)
