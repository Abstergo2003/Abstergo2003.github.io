function dc2(id) {
    var desc = document.getElementById('dc_desc2')
    if (id == 'dnd') {
        desc.innerHTML = "Ten bot zawiera usługi <b>DnD</b>! Możesz rzucać kostką, tworzyć kanały tekstowe dla swoich gier(potrzebujesz roli game-master) oraz zapraszać ludzi do wspólnej gry!<br><br><b>Tworzenie własnego kanału tekstowego </b>pozwala na prowadzenie wszystkich gier na jednym serwerze, dzięki czemu twoi gracze będą mieli idealna miejsce do role-play’a i publicznego (w obrębie gry) rzucania kostką.<br><br>Istnieje <b>specjalny kanał</b> widoczny tylko dla ludzi szukających gry(mających rolę 'invite-me'), na nim znajdują się wszystkie zaproszenia do gier.<br><br>Jeżeli dodasz reakcje do wiadomości na kanale ‘roles’ dostaniesz role korespondującą do użytej emotki <br>(użyj by pokazać ludziom swoją <b>ulubioną klasę</b>)<br><br>Jak wcześniej wspomniałem mżesz <b>rzucać kością</b>tak by wynik był widoczny dla każdego gracza,już nikt nie oskarży cię o oszystwo. Dostępne kości: <b>4,6, 8, 10, 12, 20, 100 i custom’owa</b>.Za pomocą jednej komendy możesz rzucić wielokrotnie.<br><br><b>Randomizery</b> - narzędzia dla gema master’a. można wylosować: imię (męskie, damskie), walkę (losowy przeciwnik itp.), spotkanie (pojawia się losowa osoba i ma dla ciebie zadanie) albo sposób na śmierć gracza (jeśli brak ci sposbu by ukatrupić tego jednego denerwującego gracza, to to jest rozwiązaniem)"
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '420px'
    } else if (id == 'spotted1') {
        desc.innerHTML = "Ten bot tworzy <b> infrastrukturę spotted </b> na twoim serwerze.Gdy bot dołaczy stworzy 2 kanały I jedną rolę<br><br>1. Kanał Spotted – gdy użytkownik użyje komendy /spotted jej treść zostanie tu anonimowo zamieszczona<br>2. Kanał logs – widoczny tylko dla admina<br>&nbsp;&nbsp;&nbsp;&nbsp;- tu wydyłane są wszystkie informacja o każdym spocie<br>&nbsp;&nbsp;&nbsp;&nbsp;- jedyny sposób na gnojenie trolli<br>3. Rola Damn Troll	- jako, że każdy może domyślnie używać spotted, rola powstała by oznaczyć ludzi którzy zostali zbanowani<br><br><b>Dodatek NSFW</b><br><br>tworzy jeden kanał i jedną rolę:<br>1. Kanał nsfw- dokładnie taki jak spotted ale do ineego kontentu (ukryty dla każdego bez roli)<br>2. Rola nsfw spotter – uprawnia cię do dostępu do kanału nsfw(admin zdecyduje kto ją dostanie)<br>"
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '320px'
    } else if (id == 'backup') {
        desc.innerHTML = 'Odkąd ten bot jest na twoim serwerze każda wysłana wiadomość, jest kopiowana do<b> bezpiecznej bazy danych</b>, byś mógł ją w <b>każdej chwili przywrócić</b>. Możesz także kazać botowi stworzyć <b>piękny backup</b>, który wygląda dokładnie tak jak czat Discorda.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'mod') {
        desc.innerHTML = 'Moderator Bot pozwala na <b>planowanie streamów</b>,<b>live chat</b>(zamyka się po zakończeniu stream), i <b>piękny backup</b> dla tegoż czatu.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    } else if (id == 'spotted2') {
        desc.innerHTML = 'Nie wspomagana wersja, podobna do wersji worldwide z jedyną różnicą: bot wysyła wiadomość którą od ciebie otrzymał, nie używa się komend.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    }
}
function extensions2(id) {
    var desc = document.getElementById('chrome_desc2')
    if (id == 'bc') {
        desc.innerHTML = 'Better Chromium składa się z <b>3 oddzielnych rozszerzeń: NewTab, History, Bookmarks</b>. Główne funkcje takiej jak: <b>Notatnik, centrum aplikacji lub aplikacja pogody </b> znajdują się w NewTab, reszta z rozszerzeń została napisana w ramach ćwiczeń Chrome API. NewTab ma także wbudowany stoper, minutnik i zegar.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '70px'
    } else if (id == 'epp') {
        desc.innerHTML = 'Every Project Planned jest przeznaczony do <b>zarządzania projektami</b> i ich aspektami takimi jak: <b>budżet, cele oraz terminy</b>. Rozszerzenie ma wbudowaną <b>synchronizację z Google Kalendarzem</b> i łatwo <b>dostępne notatki</b>. (w trakcie rozwoju, tylko wersje beta)'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'nt') {
        desc.innerHTML = 'Note##, to <b>ulepszona</b> wersja poprzedniego "Notatnika" z wbudowaną funkcją <b>rysownych notatek</b>. Mam zamiar dodać funkcję <b>"to do"</b> wkrótce.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    } else if (id  == 'rh') {
        desc.innerHTML = 'Random Hentai to rozszerzenie  losujące wpis na stronie <b>nhentai.net</b>. Zamierzam wprowadzić <b>losowanie z uwzględnieniem tagów</b>, oraz <b>podgląd okładki</b> w niedługim czasie.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'he') {
        desc.innerHTML = 'Jeżeli strona na którą często wchodzisz posiada elementy które chciałbyś ukryć wypróbuj to rozszerzenie. Wciskając "alt" i klikając w dowolny element sprawisz iż zniknie on na zawsze. No nie na zawsze, jeżeli wejdziesz w okienko popup rozszezenia zobaczysz swoje ukryte elementy i będziesz mógł je przywrócić'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '80px'
    }
}
function mobile2(id) {
    var desc = document.getElementById('mobile_desc2')
    if (id == 'clc') {
        desc.innerHTML = 'Kalkulator, to bardzo prosta aplikacja, którą mam zamiar przekształcić w pełny naukowy kalkulator, w niedalekiej przyszłości. Został on z początku stworzony by nauczyć się budować aplikacje z Cordova.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'nt') {
        desc.innerHTML = 'Notatnik to aplikacja stworzona by ćwiczyć localStorage, z Cordova. Ta jego wersja została stworzona tak by wyglądać bardziej nowocześnie.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    }
}
function template2(id) {
    var desc = document.getElementById('html_desc2')
    if (id == 'cv') {
        desc.innerHTML = 'Templatka CV. <b>Nowoczesne, minimalistyczne</b>, dobre na każdą okazję. Możesz przekonwertować do <b>PDF</b> lub wysłać tak jak jest.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    } else if (id == 'github') {
        desc.innerHTML = 'Pliki źródłowe tej strony, nic więcej.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    } else if (id == 'shop') {
        desc.innerHTML = 'Cała templatka sklepu online... kiedyś.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    } else if (id == 'paint') {
        desc.innerHTML = 'W pełni działająca aplikacja typu Paint w twojej przeglądarce, <b>rysuj, wymazuj, pisz i zapisuj</b> a to wszystko w tym małym folderze.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '30px'
    }
}
function desktop2(id) {
    var desc = document.getElementById('desktop_desc2')
    if (id == 'snake') {
        desc.innerHTML = 'Snake## to po prostu gra typu wężyk. Nie jestem dobry w pisaniu gier, oraz JS nie jest językiem do tego stworzonym, więc wężyk jest tak naprawdę linią rysowaną w canvasie, tak samo jak wszystkie przeszkody. Mimo tego, dzięki swojej prostocie gra będzie działać płynnie. Możesz zbierać jabłka, ale z każdą zmianą kierunku wąż będzie zrzucał skórę, tworząc dla siebie przeszkody. Gdy dobijesz do 2000 punktów, losowe przeszkody zaczną się pojawiać na mapie. Gdy przekroczysz 5000, dostaniesz możliwość zdobycia super mocy, która sprawi że będziesz nieśmiertelny przez jakieś 10s. Możesz też wyczyścić mapę ze wszystkich przeszkód, za koszt jabłek.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '120px'
    } else if (id =='RH') {
        desc.innerHTML = 'Aplikacja Random Hentai została stworzona na bazie poprzedniego rozszerzenia o tej samej nazwie. Gdy poznałem lepiej JS, nauczyłem się webscraping’u. Sprawiłem więc by rozszerzenie było w stanie zdobyć okładkę i tagi hentajca. Niestety, zostałem zablokowany przez politykę CORS, zdecydowałem wtedy że stworzę z tego aplikacje komputerową. Ale oznaczało to, że muszę dodać więcej funkcji. Dodałem więc, sekcje „Ulubione”, „Pobieranie” które nie wymaga torrenta. Możesz także randomizować hentajce zwierające dane tagi'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '100px'
    } else if (id == 'MH') {
        desc.innerHTML = 'MangaHouse to platforma internetowa do sprzedaży/kupna mangi czy novelek. W zestawie jest wyspecjalizowany serwer. Aplikacja ma wbudowany moduł TTS (tekst-do-mowy). MangaHouse pozwala na komentowanie i ocenianie produktów.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '50px'
    } else if (id == 'dnd') {
        desc.innerHTML = 'DnD## to aplikacja zaprojektowana z myślą o tworzeniu arkuszy postaci oraz grania online. Ma ona mnóstwo wbudowanych funkcji, mimo to game master jest wicąż potrzebny, nie ma tu systemu tur i nic nie zatrzymuje cię od wykonania ruchu w dowolnym momencie więc system jest bardzo elastyczny. Pamiętaj jednak że z każdej podjętej czynności będzie wysyłany log.'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '90px'
    } else if(id == 'gmt'){ 
        desc.innerHTML = 'DnD GM Tools## to aplikacja wypełniona po brzegi każdą możliwą użyteczną funkcją stworzoną specjalnie dla mistrzów gry DnD, zarządzaj questami, twórz mapy lub itemy, lub postacie. Każda możliwa funkcja jest juz w aplikacji. W przyszłości zostanie dodana funkcja śledzenia historii campanii, a także możliwość dzielenia się mapami w intenecie. Miłej zabawy!'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '70px'
    } else {
        desc.innerHTML = 'brak opisu'
        desc.style.display = 'block'
        desc.style.padding = '2%'
        desc.style.height = '70px'
    }
}