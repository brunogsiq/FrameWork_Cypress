        A parte 5 pode vir primeiro.
        
        Parte 1 - Em MinhaBranch

            Desenvolvi novos testes, novos arquivos, alterações no projeto.
                Clico em Icone do git.
                    Em "message", colo uma mensagem de aviso do que foi feito.
                        Clico na seta de droplist, escolho a opção Commit and Push e clico em Yes.

        Parte 2 - No Repositorio - Site GitHub (Poderiam ser outros como gitlab, gitbucket)

            Atualiza página e vou para Home do projeto.
                No dorplist de branchs, escolho a minha.
                    Clico na opção aheado of main
                        Deverá aparecer a opção para Create Pull Request
                            Insiro a mensagem do PR.
                                Avisa QA Lead para autorizar a sua mudança/atualização.

        Parte 3 - QA Lead

            Autoriza ou solicita correção do Merge

        Parte 4 - Vs Code

            Depois que o QA Lead faz toda a modificação e te informa

        Parte 5 - Vs Code 
        
            Preciso atualizar meu projeto, então, troco da minhaBranch para Main (Local, ou seja ícone do git).
                Vou na opção do git (ícone no vscode)
                    Escolhe a opção "Pull, Push", depois Pull From, Escolhe Origin Main (ícone nuvem).
                        Sincroniza
                            Troca para a branchLocal lá em baixo a esquerda.
                                Hora de atualizar sua branch e deixar igual sua Main (tudo local, pois já trouxemos da nuvem)
                                    Escolhe a opção Merge, e quando aparece a lista de branchs, escolhe a Main Local.

        Resumo:
            Nesta última parte fizemos o seguinte:
                Trouxemos da nuvem as atualizações
                Atualizamos sua Main local
                Atualizamos sua branch de acordo com a branch

***Verificar o tutorial abaixo:


🚀 Tutorial – Commit até atualização da branch (VS Code)
1. Fazer Commit

Abra o Source Control (ícone de “raminho” no menu lateral ou Ctrl+Shift+G).

Digite uma mensagem de commit no campo superior.

Clique no botão Commit (✔️).

Isso grava suas alterações apenas localmente.

2. Enviar Commit para o GitHub (Push)

Clique com o botão direito no painel do Source Control.

Vá em Pull, Push → Push

ou use Push to… para escolher manualmente a branch remota.

O VS Code vai enviar seus commits locais para o repositório remoto no GitHub.

3. Criar ou Trocar de Branch

Clique com o botão direito no painel do Source Control.

Vá em Branch → Create Branch…

Digite o nome (ex.: feature/login).

Isso cria e muda para a nova branch.

Se a branch já existe no remoto, escolha Checkout to… e selecione.

4. Publicar Branch no GitHub

Depois de criar a branch local, publique-a.

Clique em Branch → Publish Branch…

Isso cria a branch também no GitHub.

Agora ela já pode ser usada em Pull Requests.

5. Atualizar Branch Local

Sempre que quiser trazer as últimas mudanças da main ou da sua própria branch:

Clique com o botão direito no painel do Source Control.

Vá em Pull, Push → Pull.

Isso traz atualizações da branch remota para sua branch local.

Se quiser atualizar todas, pode usar Pull from… ou Sync.

👉 Esse fluxo cobre Commit → Push → Branch → Atualizar direto pelo VS Code, sem precisar do terminal