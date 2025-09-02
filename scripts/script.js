const botoes = document.querySelectorAll('.add-carrinho')
const contador = document.querySelector('.item-count')

let produtos = JSON.parse(localStorage.getItem('carrinho')) || []
contador.innerText = produtos.length

    botoes.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const produto = document.querySelectorAll('.produto h3')[index].innerText
            produtos.push(produto)
            contador.innerText = produtos.length
            localStorage.setItem('carrinho', JSON.stringify(produtos))
        })
    })

    // Zoom nas imagens
    document.querySelectorAll('.produto-imagem').forEach(imagem => {
        imagem.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        imagem.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Clique nos produtos
    document.querySelectorAll('.produto').forEach(produto => {
        produto.addEventListener('click', function() {
            this.style.boxShadow = '0 0 15px #8a5a44';
            setTimeout(() => {
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }, 300);
        });
    });

    const lista = document.getElementById("lista-carrinho")
    const msgVazio = document.getElementById("mensagem-vazio")

    function carregarCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

        lista.innerHTML = ""
        if (carrinho.length === 0) {
            msgVazio.style.display = "block"
            return
        } else {
            msgVazio.style.display = "none"
        }

        carrinho.forEach((item, index) => {
            const li = document.createElement("li")
            li.textContent = item

            const btnExcluir = document.createElement("button")
            btnExcluir.textContent = "Excluir"
            btnExcluir.style.marginLeft = "10px"
            btnExcluir.addEventListener("click", () => removerItem(index))

            li.appendChild(btnExcluir)
            lista.appendChild(li)
            contador.innerHTML = carrinho.length
        })
    }

    function removerItem(index) {
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
        carrinho.splice(index, 1)
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        carregarCarrinho()
    }

    carregarCarrinho()