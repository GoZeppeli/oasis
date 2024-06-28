import React, { useState, useEffect,  useRef } from "react";
import {useParams} from "react-router-dom";
import Admin from "./Admin";
import Header from "./Header";



export default function Test() {

  

  function scrollinto(x){
    var number = x.innerHTML.replace("[", "").replace("]", "")
    var foot = document.querySelector(`#foot${number}`)
    if(foot){
        foot.scrollIntoView({behavior: 'smooth'})
    }
  }

  function scrollback(x){
    
    var number = x.id.replace("foot", "")
    var note = document.querySelector(`#note${number}`)
    if(note){
        note.scrollIntoView({behavior: 'smooth'})
    }
  }

  setTimeout(()=>{
    var spans = [...document.querySelectorAll('span.scroll')]
    var backs = [...document.querySelectorAll('p.scrollback-wrapper')]
    spans.map((s, index) => {
      var number = index + 1
      s.id = `note${number}`
      s.innerHTML = `[${number}] `
      s.addEventListener("click", () => {
        scrollinto(s)
      })
    })

    backs.map((b, index) => {
      var number = index + 1
      b.id = `foot${number}`
      b.firstChild.innerHTML = `[${number}] `
      if(b.querySelector("span.scrollback")){
        b.querySelector("span.scrollback").addEventListener("click", () => {
        scrollback(b)
        })
      }
      
    })
  }, 2)

  function inputRange(){
    var val = document.querySelector(".slider").value
    var disP = [...document.querySelectorAll("#display p")]
    var disH1 = [...document.querySelectorAll("#display h1")]
    var disBQ = [...document.querySelectorAll("#display blockquote")]
    var disH2 = [...document.querySelectorAll("#display h2")]
    var disFOOT = [...document.querySelectorAll("#display span.scroll")]
    var val50 = val - 50
    if(val50 >= 0){
        var addP = val50 * (1/100) * 24 + 24
        disP.map((dp) => {
            dp.style.fontSize = `${addP}px`
        })
        var addH1 = val50 * (1/100) * 45 + 45
        disH1.map((dh1) => {
            dh1.style.fontSize = `${addH1}px`
        })
        var addBQ = val50 * (1/100) * 20 + 20
        disBQ.map((dbq) => {
            dbq.style.fontSize = `${addBQ}px`
        })
        var addH2 = val50 * (1/100) * 25 + 25
        disH2.map((dh2) => {
            dh2.style.fontSize = `${addH2}px`
        })
    } else {
        var addP = val50 * (1/150)* 24 + 24
        disP.map((dp) => {
            dp.style.fontSize = `${addP}px`
        })
        var addH1 = val50 * (1/150) * 45 + 45
        disH1.map((dh1) => {
            dh1.style.fontSize = `${addH1}px`
        })
        var addBQ = val50 * (1/150) * 20 + 20
        disBQ.map((dbq) => {
            dbq.style.fontSize = `${addBQ}px`
        })
        var addH2 = val50 * (1/150) * 25 + 25
        disH2.map((dh2) => {
            dh2.style.fontSize = `${addH2}px`
        })
    }

    if(window.innerWidth <= 600){
        var arr = [{'name': "p", "px": "24"}, {'name': "h1", "px": "45"}, {'name': "blockquote", "px": "20"}, {'name': "h2", "px": "25"}]
        arr.map((a) => {
            if(document.querySelector(`#display ${a.name}`)){
                window['dis' + a.name] = [...document.querySelectorAll(`#display ${a.name}`)];
                window['style' + a.name] = getComputedStyle(document.querySelector(`#display ${a.name}`)).fontSize
                window['nopx' + a.name] = window['style' + a.name].replace("px", "")
                window['dis' + a.name].map((d) => {
                    d.style.fontSize = `${window['nopx' + a.name] - (a.px /2)}px` 
                })
            }
        })
    }

    
    // <span class="scroll"></span>
    // <span class="scrollback"> ↩</span>
      

    disFOOT.map((df) => {
        var base = getComputedStyle(document.querySelector(`#display p`)).fontSize
        var nopx = base.replace("px", "")
        if((nopx - 8) >= 8) {
            df.style.fontSize = `${nopx - 8}px`
        } else {
            df.style.fontSize = `${nopx - 2}px`
        }
    })
}
  

    return (
      <>  
        <h1 className="page-title"><svg id="page-flower" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316.7 326.17"><defs></defs><path class="cls-1" d="M412.22,216.4c-7.85-26.84-31.41-45.83-61.47-53.39-7.31-41.08-33.47-72.92-68.58-78-30.37-4.39-60,12.36-79.49,41.13-30.52-8.1-60.87-2.65-80.8,17.59-24.59,25-26.39,65.51-8,102.31-19.85,33.53-21.5,71.81-.74,98.24s58.73,34,96.21,22.38c22,32.05,55.86,49.67,88.52,42.08,36.74-8.54,60.81-46.36,62.19-91.5C400.58,294.17,423.08,253.52,412.22,216.4Z" transform="translate(-98.24 -84.33)"/></svg>La polarisation sociale et politique, une menace pour les démocraties et les sociétés actuelles</h1>
        <div className="font-size">
            <h3 className="begin">A</h3>
            <input type="range" onChange={() => inputRange()} className="slider"></input>
            <h3 className="end">A</h3>
        </div>
        <div id="display">
        <div class="page-body"><p id="0c7018d3-289f-4c48-bd71-a6eb62620460" class="">Depuis vingt ans, j’exerce la fonction de prêtre et même de curé dans une paroisse de deux mille habitants. Je travaille aussi trois jours par semaine dans une entreprise de construction métallique.</p><p id="9b01198a-cffa-4175-ad94-9771395903b1" class="">Je suis connu, ici, par un bon nombre de gens comme anarchiste. La question “Comment arrives-tu à concilier ces deux pratiques chrétien et anar ?” m’est posée.</p><p id="1a94d8a9-1c7a-48aa-aa87-daa18cadf0d4" class="">Non seulement je ne ressens aucune opposition entre ma foi chrétienne et mes convictions anarchistes, mais ma connaissance de Jésus de Nazareth me pousse vers l’anarchie et me donne parfois le courage de la pratiquer.</p><p id="64ffc6bc-da08-44fa-96b4-58633b7636e5" class="">« Ni Dieu ni maître » et « Je crois en Dieu le père tout-puissant », ces deux convictions me tiennent à coeur.</p><p id="41498776-2aae-44f6-ba75-a7fe1497f0ad" class="">Aucune personne n’existe comme maître d ’une autre personne, au sens où elle est supérieure, personne ne peut imposer sa volonté à personne et j’ignore totalement Dieu comme maître suprême.</p><p id="7494d830-fc94-4fd2-bf36-ecb076968c45" class=""><strong>Non à la hiérarchie entre les hommes</strong></p><p id="35242f99-6953-4230-b5ad-695007ae84b5" class="">Jean-Paul Sartre a bien exprimé la valeur unique de chaque être humain : « Un homme vaut tous les hommes et n’importe qui vaut cet homme. »</p><p id="9236834b-db73-4221-b109-e1928814e189" class="">Bien avant lui, Jésus ne faisait aucune différence entre les hommes, les gens de pouvoir étaient dérangés par l’attitude de Jésus et voulaient sa mort, ils l’abordaient en lui disant : «Tu parles sans te préoccuper de qui que ce soit, car tu ne regardes pas au rang des personnes. » Cf. Matthieu chapitre XXII.</p><p id="736e5037-18e0-4e5f-aff3-fa479f625cbc" class="">La vie de chacun passe avant toutes les lois qui veulent organiser la société ; les livres des Evangiles : Matthieu, Marc, Luc et Jean, sont pleins du récit des affrontements de Jésus avec les autorités, parce que continuellement il viole la loi par souci de la vie de chacun.</p><p id="c9c82e75-2a01-4d26-ba7e-5ddec8d338ce" class="">C’est dans cet esprit que nous avons, par exemple, récolté un certain nombre de signatures pour la liberté de circulation des humains, à la revendication suivante : « Elena Bonner, épouse Sakharov, doit pouvoir se rendre en Occident si elle le juge nécessaire à sa santé; les affamés des pays du sud doivent pouvoir se rendre dans les pays du nord s’il le jugent nécessaire à leur vie. »</p><p id="e156890b-8362-4ef1-87ed-340e39796e96" class=""><strong>Non à la hiérarchie entre les hommes et Dieu</strong></p><p id="5ecd7368-4465-4d6c-a5e3-165e3550c05f" class="">Dieu, du moins celui qu’un homme comme Jésus appelle « Père » et nous demande d’appeler « Père », ne s’est jamais présenté en maître, imposant sa volonté aux hommes, il n&#x27;a jamais considéré les hommes comme inférieurs à lui ; pour Jésus, entre le père et le fils, il n ’y a aucun rapport hiérarchique, il dit: « Le Père et moi nous ne sommes qu’un, lui en moi et moi en lui. »</p><p id="b8aeca4a-302d-4b73-927c-af186b16c0b7" class="">Des hommes religieux qui ne pouvaient penser qu’en termes de rivalité, de supériorité, d’égalité, d’infériorité, portent alors contre Jésus l’accusation de se faire l’égal de Dieu. Ils étaient incapables d’imaginer qu’un homme, Jésus, puisse être Dieu avec son père et que la vocation de chaque homme est d’être Dieu avec le père.</p><p id="1759b370-a2e2-44f3-9ad5-2e7eedcebfa5" class="">L’auteur du livre de la Genèse (se référer à la Bible) voit la faute de l’homme dans cette attitude qui consiste à ambitionner de devenir comme des dieux pour connaître le bien et le mal au lieu d’être avec Dieu à jouir de la vie et à prendre plaisir à créer de la vie. Cette attitude de l’homme préoccupé de lui-même et de son rang engendre tous les malheurs: Les hommes se retrouvent seuls, nus et honteux, s’accusant mutuellement, travaillant dans la peine pour eux-mêmes, à la création et à la procréation en semant la mort, en s’affrontant pour la domination ou en acceptant la domination dans la peur. Sans cesse des hommes, les prophètes, proposent de vivre en alliance avec Dieu; mais les peuples sous l’emprise des autorités préfèrent s’affirmer en affrontant les autres.</p><p id="7d8eaa18-b943-4c2f-9dc0-d45b52368733" class="">Voici dans la Bible, par exemple, le premier livre de Samuel, chapitre VIII : « Les anciens dirent à Samuel : Donne-nous un roi pour nous gouverner... Dieu dit à Samuel: Donne satisfaction au peuple pour tout ce qu’il demande... C’est moi qu’ils rejettent car ils ne veulent pas que je règne sur eux. Samuel rapporta toutes les paroles de Dieu au peuple qui lui demandait un roi: Voici quel sera le statut du roi qui va régner sur vous. Il prendra vos fils, il les affectera à ses chars et à ses chevaux, et les fera courir devant son char. Il les utilisera comme chef de mille hommes et comme chef de cinquante ; il les fera labourer et moissonner à son profit, fabriquer ses armes de guerre et ses attelages. II prendra vos filles pour la préparation de ses parfums pour sa cuisine et pour sa boulangerie. Il prendra vos champs, vos vignes et vos oliveraies les meilleures, pour les donner aux gens de sa maison. Sur vos cultures et vos vignes, il prélèvera la dîme pour la donner à ses ministres et aux gens de sa maison. Les meilleurs de vos serviteurs, de vos servantes, de vos boeufs et de vos ânes les prendra et les fera travailler pour lui. Il prendra la dîme de vos troupeaux et vous-mêmes deviendrez ses esclaves. Alors vous pousserez des cris pour vous plaindre du roi que vous avez voulu, mais alors Dieu ne vous répondra pas. »</p><p id="6a9edcfe-ad60-4f58-8511-815cdf12cda7" class=""><strong>Je crois en Dieu, pourquoi?</strong></p><p id="a95850c4-42c5-4b7c-be2e-ad2d62519bb5" class="">Je crois en un seul Dieu et ce Dieu c&#x27;est un homme, Jésus. Beaucoup disent qu’il est mort, je réponds qu’il est vivant, j’en ai la preuve déterminante et irréfutable : c’est que, croyant en Jésus vivant avec moi, j’ai le goût de vivre, et, dans les moments où j’oublie sa présence, je ne vis plus, je n ’ai plus le moral. Et naturellement, je choisis de vivre...</p><p id="aa9fafa2-9926-4457-b5dc-9bd2123f800c" class="">Jésus est donc Dieu pour moi puisqu’avec lui je peux vivre.</p><p id="d294189d-3f11-4534-9642-063830791235" class="">Dans le chapitre VIII de La Philosophie de la misère, je comprends très bien Pierre-Joseph Proudhon ; il n ’a envisagé qu’un seul Dieu, Etre suprême, dominateur de l’homme. Il ne pouvait donc que le nier, car ce Dieu ne pouvait que l’empêcher de vivre: «Dieu, s&#x27;il existe, est essentiellement hostile à notre nature humaine... Dieu à la fin se trouvera-t-il être quelque chose?... J’ignore si je le saurais jamais... Si un jour je dois me réconcilier avec Dieu, cette réconciliation, impossible tant que je vis et dans laquelle j’aurais tout à gagner, rien à perdre, ne se peut accomplir que dans ma destruction.)»</p><p id="cb3297d8-4053-471b-b34e-fe3c581c99b8" class=""><strong>Vanité des philosophies et des théologies</strong></p><p id="980f419a-57f4-40a7-9de9-00597aa80972" class="">Finalement affirmer ou nier l’existence de Dieu est sans intérêt, ce qui compte c’est d ’avoir le goût et la joie que donne la vie.</p><p id="4eed70af-fcf4-43e4-901b-f10d614ded52" class="">Elles sont vaines les discussions des philosophes et des théologiens cherchant à prouver q u ’ils ont raison et s’imposant comme des maîtres penseurs.</p><p id="27fca24c-4a22-45d8-b78f-17bbf9d8d187" class="">Avec Paul de Tarse) dans sa Lettre aux Corinthiens, chapitre in , je constate que les raisonnements des sages «ne sont que du vent... ils sont pris au piège de leur propre habileté». Par exemple, un homme comme Socrate est amené à se donner lui-même la mort pour respecter la démocratie qu&#x27;il a conçue.</p><p id="a6279c84-e079-4532-b16f-1b071db16b8e" class="">Avec Jean, un ami de Jésus, dans sa première lettre au chapitre iv , je pense q u ’il n&#x27;y a rien à dire sur Dieu, car «Dieu, personne ne l&#x27;a jamais vu mais aimons-nous les uns les autres puisque l’amour est de Dieu et que quiconque aime est né de Dieu et connaît Dieu. Celui qui n ’aime pas n ’a pas connu Dieu, car Dieu est amour... Si quelqu&#x27;un dit q u ’il aime Dieu et q u ’il déteste son frère, c’est un menteur... Si quelqu’un jouissant des richesses du monde voit son frère dans la nécessité et lui ferme ses entrailles, comment demeurerait-il en lui. »</p><p id="856b49dc-b513-4da6-a816-78e27553c7ac" class="">Nous croyons en Jésus et nous le reconnaissons comme notre Dieu, nous l’appelons Dieu, ce n ’est pas parce que nous voyons chez cet homme les qualités qui seraient celles de Dieu : la toute-puissance, la transcendance, l’éternité, etc. Mais par son attitude d ’amour envers tout homme, qui nous entraîne également à vivre dans cet esprit et nous donne le goût de vivre.</p><p id="2af2e26a-7114-4a13-accb-c3115af1bd8f" class=""><strong>Pour une révolution, laquelle?</strong></p><p id="7ffac5c6-0417-4fa6-a5d6-e91830df398b" class="">Je ne puis condamner les opprimés qui pour se révolter prennent les armes et se lancent dans la violence, mais je pense leur révolte inefficace pour une réelle révolution: ou bien les opprimés seront écrasés par les forces des gens du pouvoir, ou bien, quand le pouvoir en place sera renversé, ils auront acquis le goût du pouvoir par les armes, ils deviendront alors les nouveaux oppresseurs et tout sera à refaire.</p><p id="76225370-c333-447c-962c-5cde3c3e5b7b" class="">Pour une véritable révolution, il faut trouver le moral de s’engager à faire disparaître ce qui est à l’origine de toutes les violences: l’esprit de hiérarchie et la peur; la peur qu’éprouvent les dominants de ne plus pouvoir vivre s’ils ne dominent plus, les pousse à la violence pour maintenir leur domination. La peur qu’éprouvent les dominés de ne plus pouvoir vivre s’ils renversent leurs maîtres, les pousse à accepter la violence qu’ils subissent. Ils trouvent eux-mêmes une compensation en cherchant à dominer sur d ’autres, toujours au prix de la violence dans le cycle infernal de révolte-répression...</p><p id="dde51c3d-ba4f-4e5e-a440-fec6a3c10dcd" class="">Dans l’esprit de Jésus, nous combattons la violence en nous attaquant à la peur. Jésus dit aux opprimés : « Si on te frappe sur la joue droite, tend la joue gauche », il cherche ainsi à les libérer de la peur devant la violence de leurs oppresseurs. Lui-même une fois qu’il est libéré de la peur, recevant une gifle, ne tend pas l’autre joue, il demande des explications: « Si j’ai mal parlé, montre ce que j’ai dit de mal, si j’ai bien parlé, pourquoi me frappes-tu ? » Il n’a pas peur de la mort que l’on va lui faire subir.</p><p id="62666bf7-c203-4727-8342-82b6e2a81294" class="">Jésus dit encore: «Si on te prend ton manteau, donne encore ta chemise; si on te réquisitionne pour un mile, fais-en deux.» Il veut que les opprimés se libèrent de la peur d ’être incapables de vivre sans maître. Ils seront alors capables comme il l’a fait, de traiter les maîtres d ’hypocrites, engeance de vipère, (salauds), jusqu’à ce que ces gens ne puissent plus tenir dans leur esprit de dominateur (lire chapitre XXIII du livre de Matthieu). Un maître est toujours fier de lui lorsqu’il domine, obligeons-le à prendre conscience de sa bassesse et il sera contraint d ’abandonner sa position car personne ne peut vivre en se méprisant.</p><p id="40be11c7-d975-4559-b21e-e57e2598af36" class=""><strong>Gandhi, Lama del Vasto, Lech Walesa et Jésus</strong></p><p id="d9f03913-31f5-4cdc-8d0a-38618d804c3e" class="">C’est une imposture de présenter Gandhi comme un non-violent à la manière de Jésus: si Gandhi s’est servi de la non-violence, c’est pour mettre en place le pouvoir oppresseur de l’Etat indien. Il emploie la non-violence face au plus fort, «le pouvoir anglais», mais face au plus faible, il se sert des armes de guerre. Avec les dirigeants de l’Inde, ses disciples, il envoyait la police contre les Indiens de la tendance de ceux qui l’ont assassiné.</p><p id="1dca2b65-67c8-4012-b25f-b559e155260e" class="">Un jour de Noël, il lançait un appel à la guerre contre le peuple sikh revendiquant son indépendance au Pendjab. Les belles pensées de Gandhi masquent la violence qui sort du coeur de tout chef.</p><p id="998fdc2a-1246-40b8-85a8-7cb1a289f3e4" class="">De même, la non-violence de Jésus est très éloignée de celle d’un Lanza del Vasto et aujourd’hui de celle de Lech Walesa. Ils ont peur de la violence et se tiennent à l’écart du monde de la violence. Ils refusent de s’attaquer à u n pouvoir oppresseur en faisant éclater au grand jour la violence de celui-ci.</p><p id="f2c2b641-3283-4d75-8c48-8b1972b82799" class="">En 1976, alors que nous avions pénétré sur le site de Malville, Lanza del Vasto avait peur de voir les CRS nous charger avec violence, ce maître de sagesse nous a alors demandé d ’être gentils et de nous replier. La peur de la violence des CRS lui faisait accepter la violence du pouvoir et du nucléaire.</p><p id="4837f277-2452-4c94-9d0a-444469e592a7" class="">On peut admirer le formidable mouvement « Solidarité » que Lech Walesa a lancé en Pologne. Malheureusement, aujourd’hui, il freine cet élan de libération : parce que le pouvoir menace de réagir violemment, de faire couler le sang, il ordonne de renoncer à certaines manifestations. Ainsi se perpétue la violence quotidienne de l’Etat.</p><p id="30269dc2-2123-4a27-be99-c1722b752259" class="">Au contraire, Jésus recherche une paix qui passe obligatoirement par la lutte et donc la provocation des autorités. Il sait q u ’en prenant le parti des opprimés, il déclenche automatiquement la violence contre lui; il ne recule pas, car dans la relation qu’il entretient avec son père, il trouve la force de faire son choix. Autrement, il ne pourrait pas vivre : « Celui qui veut sauver sa vie la perd » (voir le chapitre xvi du livre de Matthieu).</p><p id="36cfcc84-1317-4cac-a134-671deea38e63" class="">Lanza del Vasto manquait de respect envers les C.R.S., il refusait de dénoncer leur comportement de S.S., c’est-à-dire leur abandon de toute responsabilité pour obéir avec discipline à des ordres supérieurs. Jésus au contraire, traite ses ennemis de ce qu’ils sont afin de leur permettre de retrouver leur personnalité humaine. Lanza del Vasto a manqué de respect envers les manifestants: lui, ce sage nous jugeait incapables de prendre nos responsabilités, incapables d’apprécier quels risques nous étions en mesure de prendre pour nous. Jésus, au contraire, avertit ses amis des difficultés, leur indique où prendre la force et laisse à chacun sa liberté.</p><p id="5be05c9a-6757-48b5-aefa-466b4c993d62" class=""><strong>Alvavaro Ulcué Chocuê et Jésus</strong></p><p id="b354073d-53dc-417a-8daf-a1e13260059a" class="">De nos jours, je vois des hommes qui s’insèrent dans l’histoire d’un peuple animé d’un esprit catholique, c’est-à-dire universel, reconnaissant en chaque homme, un frère. Parmi ceux-là, certains affirment reconnaître Dieu en Jésus de Nazareth. Ils le voient ne se prétendant pas Être Supérieur aux autres hommes; ils le voient par amour des uns et des autres, prendre toujours le parti des opprimés face aux oppresseurs, travaillant à détruire toute hiérarchie, tout pouvoir de l’homme sur l’homme.</p><p id="a12a6f58-fe89-4b86-bb41-f23064b0da61" class="">Voici un texte publié en mars 1985 : « Alvaro Ulcué Chocué, seul prêtre indien en Colombie, a été assassiné en novembre 1984. Déjà en 1982, sa soeur avait été tuée par la police. Avant sa mort, parlant une fois de la violence institutionnalisée, il disait: “Les chrétiens, que faisons-nous? nous assistons en spectateurs et nous approuvons par notre silence, car nous avons peur d’annoncer l’Evangile de manière radicale.” » (voir Témoignage chrétien du 11 février 1985).</p><p id="0f3e91ef-4623-429a-9514-f2e31917477d" class="">Chrétiens de la paroisse de Bozel et du Planay, avec notre curé, après avoir cherché à analyser la situation dans le monde actuel, nous condamnons la violence des Etats.</p><p id="946f6925-126f-487c-9c5b-c066adf607a5" class="">Nous constatons que cette violence s’exerce par les banques, les armées et les polices.</p><p id="d3ff69eb-8d07-4b8f-8bbc-9cf44b12c39c" class="">Nous avons été amenés à reconnaître et à dénoncer la pratique des taux d’intérêt comme la cause essentielle de la violence : on peut même parler d’une forme d’assassinat de ceux qui meurent de faim.</p><p id="37aa3ff3-e93e-4508-91fb-6b7e356affda" class="">Nous dénonçons particulièrement les budgets militaires, la fabrication et la vente des armes.</p><p id="747ee605-e17e-49bb-a3cc-6dc9454e77b6" class="">Nous avons également constaté les violences policières que subissent surtout les pauvres et les opposants au pouvoir en place : prisons, tortures...</p><p id="bf1bd453-c656-4034-a73b-755b8a1c7aeb" class="">Nous interpellons nos évêques et les autres communautés chrétiennes pour que soit exprimé le refus de cette violence des Etats.</p><p id="6e650d86-886b-4894-9289-723999e499e1" class="">Espérant votre réponse, nous vous disons notre union en Jésus.</p><p id="51d5a422-fb93-43af-98cd-501263aa3d8a" class="">Pour multiplier leurs actions, je pense que chrétiens et anars auraient avantage à mieux se connaître.</p><p id="8091eefa-5a9d-4f1d-8f26-b1255de14faa" class="">Si cet article est publié par des libertaires, c’est peut-être qu’ils ont l’esprit plus ouvert que des catholiques dont le nom signifie pourtant: «Ouvert à tous».</p><p id="d8b7f7c1-85d2-4271-9a46-24b814d41552" class=""><em><strong>Adrien Duchosal</strong></em></p></div>
            <div className="credentials">
            <div className="credentials-wrapper">
                <svg className="slide-arrow" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.66 28.18"><defs></defs><path class="cls-1" d="M229.73,263.64c6.11-1.61,13.17-2.49,17.58-7.47a17.17,17.17,0,0,0,3.88-7.39c.59-2.51.86-5.77-.5-8.09a3.89,3.89,0,0,0-6.86,0,7.84,7.84,0,0,0-.11,7.35c2.58,5.44,9.73,6.35,14.94,4.82,6.22-1.83,11.31-8.17,8.9-14.83-.65-1.8-3.55-1-2.89.8,1.54,4.25-1,8.44-4.82,10.36-3.59,1.81-9.05,2.16-12.18-.75a5.54,5.54,0,0,1-1.75-4.89c.1-.58.49-1.9,1.19-2,1.12-.19,1.42,1.76,1.48,2.48a13.71,13.71,0,0,1-4.15,10.79,15,15,0,0,1-6.64,3.56c-2.94.84-5.91,1.57-8.87,2.34a1.51,1.51,0,0,0,.8,2.9Z" transform="translate(-227.87 -235.51)"/><path class="cls-1" d="M261,244a9.2,9.2,0,0,0,3.55-2.93,10.35,10.35,0,0,0,.87-2c0-.06.05-.13.08-.19s-.16.36,0,.07a2.38,2.38,0,0,1,.2-.39,2.12,2.12,0,0,1,.12-.2c.15-.24-.24.27-.05.06s.48-.42.09-.13a1.59,1.59,0,0,0,.69-.9,1.5,1.5,0,0,0-.15-1.15,1.52,1.52,0,0,0-2-.54,4.46,4.46,0,0,0-1.49,1.84c-.16.38-.31.76-.46,1.15l-.16.42c.13-.42.08-.17,0-.07l-.11.22a3.26,3.26,0,0,1-.24.4c-.19.28.12-.13,0,0l-.14.16a4.31,4.31,0,0,1-.37.37l-.2.17-.06.06.09-.07a2.63,2.63,0,0,0-.4.28l-.42.26-.93.53a1.51,1.51,0,0,0-.54,2A1.54,1.54,0,0,0,261,244Z" transform="translate(-227.87 -235.51)"/><path class="cls-1" d="M264.38,238.42c.5.21,1,.52,1.44.77a9,9,0,0,0,1.78.7,9.34,9.34,0,0,0,3.83.19,1.5,1.5,0,0,0,.89-.69,1.57,1.57,0,0,0,.16-1.16,1.59,1.59,0,0,0-.69-.9,1.79,1.79,0,0,0-1.16-.15c.46-.06,0,0-.11,0l-.35,0c-.26,0-.51,0-.77,0l-.3,0c.23,0,.26,0,.1,0l-.2,0c-.24,0-.47-.1-.7-.17a5.3,5.3,0,0,1-.67-.23c-.15-.06-.13-.05.07,0l-.18-.09-.27-.14c-.46-.24-.88-.52-1.36-.72a1.59,1.59,0,0,0-1.15-.15,1.49,1.49,0,0,0-.9.69,1.52,1.52,0,0,0,.54,2Z" transform="translate(-227.87 -235.51)"/></svg>
                <h3>Adrien Duchosal</h3>
            </div>
          </div>
        </div>

          
      </>
    );
  }