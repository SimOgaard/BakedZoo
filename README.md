# BakedZoo

BakedZoo är en mobilapp skapad för att förenkla beställningen av bakverk riktad till medelåldersfamiljer.

## Förstudier
För att få en bättre förståelse över UX/UI så läste vi igenom [detta material](https://uxdesign.cc/how-to-become-a-ui-ux-designer-self-taught-8a511170fd7c). Detta material och dess länkar gav oss en djupare förståelse om ett par grund begrepp inom UX/UI. Dessa begrepp gav oss nya aspekter för hur man ska designa en sida. Dessutom blev begreppen grundstenen till många utav våra designval så som hur vi väljer att visa rätterna i ett rutnät för att integrera symmetri. I övrigt har vi fokuserat mycket på färg, och hur människans förknippningar till färg skulle kunna gynna designen.

När vi hade läst materialet teoretisera över vilka målgrupper som skulle använda våran zoo app. Vi hittade AZA (Accosiation of Zoos and aquariums) som hade gjort en [demografisk analys](https://www.aza.org/partnerships-visitor-demographics) av besökare på zoo. AZA kom framtill att av deras 183 miljoner besökare var 32% vuxna mellan 21-34år och 57% var barn mellan 0–11 år. Av alla grupper som besökte zoo var 69% barnfamiljer. Med dessa siffror drog vi ett antagande att majoriteten av vår användarbas skulle bestå av hungriga medelålders föräldrar med skrikiga barn. Dessa föräldrar kommer då vilja ha en simpel app där man kan beställa mat utan några jobbiga extravaganta funktioner.

Med denna grund ide började vi designa appen i figma. För inspiration till upplägg och tema så tittade vi på diverse existerande zoo sidor på nätet. Detta tillsammans med materialet gav oss ett bra verktyg för designprocessen. Anledningen att vi använda just figma var för att enkelt skapa en design som vi sedan kunde interagera med funktionalitet med hjälp av quasar.


## Användarupplevelse

Appen har designats för att vara enkel att använda med mobilen fastän designen är responsiv och kan användas på surfplatta eller dator. Vi tillgodosåg mobila användare genom att lägga möjliga tabs längst ner och härma traditionella sätt att visa information via kort vyer. Genom att göra detta lyckades vi presentera informationen på ett tydligt och bekant sätt samt att undvika förvirring när man ska navigera hemsidan. Sedan låg vi fokus på att undvika onödigt många steg och knapptryck. Exempel på hur vi gjorde detta är när du tex lägger en order utan att vara inloggad, det som händer är att du blir frågad att logga in och när du gjort det tar den dig tillbaka till din order istället för hemskärmen.

### Vykort

Appens alla bakverk, medarbetare och gammla beställningar presenteras av varsin ruta. Alla dessa kort är skapta för att vara skiljbara, lätt lästa och lätta att trycka på. För bakverken kan man enkelt lägga till flera bakelser på hemsidan med "Add to cart" knappen som ligger på alla vykort. Om man vill ha mer information om bakelsen kan man trycka på hela kortet.

## Designval

### Färg

Som primärfärg för appen valdes en mörkare grön. Detta eftersom denna färg ofta förknippas med natur och kunden kommer med stor sannolikhet vara ute efter att upptäcka naturen och djur däri med tanke på att de befinner sig på en djurpark/ett zoo. Färgen förknippas även med lugn vilket även är den känska som en fikapaus ska framkalla. För bakgrunden användes en beigeaktig färg, detta för att kombinera egenskaperna från vit och brun. Vit färg ger mycket run åt övriga färger och låter den starka gröna naturfärgen ta fokus medan den bruna färgen förknippas med naturens jord, träd och stenar. Färgen på alla sidans knappar har även betydelse. "Enter"-knappen på de sidorna som förknippas med kontohantering har fått en av bakgrundens komplementfärger för att inte ta för mycket fokus så fort sidan öppnas men även se estetiskt tillfredsställande ut. Ikonen för knappen som lägger till varor i kundvagnen är orange för att avsiktligt dra kundens uppmärksamhet till den. Detta därför att vi vill att kunden ska köpa vår produkt då det kommer vara vårm inkomstkälla. Initiellt var tanken även att inloggningsikonerna skulle ha en lila färg för att komplementera det gröna lövet bakoms färg men färgen på ikonerna togs bort eftersom den simplistiska designen passade bättre med menyknappen i vänstra hörnet.

![Kontohantringssidor från figma](https://github.com/abbsimoga/BakedZoo/blob/master/images/figma%201.png?raw=true)

![Kontohantringssidor från sidan](https://github.com/abbsimoga/BakedZoo/blob/master/images/baked%201.png?raw=true)

### Position och storlek

Positionen på skärmens olika objekt baserades på ett rutnät på 200 pixlar. Den översta delen av rutnätet används till titeltexten samt sidbeskrivningen eller sökrutan på "home"-sidan. Därefter delades det resterande utrymmet på sidan upp till de olika elementen. För att lätt kunna passa in element i detta rutnät visas alla objekt som kort. Detta gör även det lättare för användarent att separera de olika objekten från varandra. Exempelvis så tar korten på "home" sidan upp två 400 pixlar, alltså två rutor i rutnätet, halvla rutan ockuperas av rutans bild och andra halvan inkluderar namnet beskrivningen och priset. I "about us" sidan var det även meningen att varje kort skulle ta upp en halv ruta var men denna design tog sin itne in i den slutliga produkten.

![Beställningshanteringssidor från figma](https://github.com/abbsimoga/BakedZoo/blob/master/images/figma%202.png?raw=true)

![Kontohantringssidor från sidan](https://github.com/abbsimoga/BakedZoo/blob/master/images/baked%202.png?raw=true)

### Komposition

För att försöka få en så balanserad komposition som möjligt har vissa element i designprocessen förskjutits åt sidan. Exempel på detta är korten på de beställningrelaterade sidorna. För att göra plats åt rullningslisten åt höger var planen att de övriga korten skulle förskjutas åt vänster. Detta hände däremot endast i teori.
Andra områden där kompositionen har tänkts mycket på är enterknappen på de kontorelaterade sidorna som placerades på högersidan för att balansera ut den vänsterrtunga texten i inmatningsområdena.
Även i "pending orders"-sidan var det tänkt teoretiskt att det totala priser skulle visas på högra sidan av kortet medan allt annat visades till höger för att balansera. Däremot så kom inte heller denna förändring med i slutprodukten. 

![Övriga sidor från figma](https://github.com/abbsimoga/BakedZoo/blob/master/images/figma%203.png?raw=true)

![Kontohantringssidor från sidan](https://github.com/abbsimoga/BakedZoo/blob/master/images/baked%203.png?raw=true)

### Bakgrundsbild

Med bakgrundsbilden ville vi framhäva naturkänslan som vi ville ha som tema. Därför använde vi oss av en mängd relativt diskreta löv som inte tar allt för mycket uppmärksamhet. Detta visade sig däremot inte spegla djur-aspekten av en djurpark. Först användes en bild av en apa i högra hörnet. Denna visade sig därmot med sin skärande färg ta för mycket uppmärksamhet så fort sidan öppnades. Därför byttes den ut mot två silhouetter av djur i den slutliga produkten.


## Testing
Vid ad hoc testing av produkten upptäcktes ett antal bristfälligheter. Buddy testing, då en utvecklare som var ovan med applikationen testade dess funktionalitet, gav en mängd förbättringsområden. Utvecklaren Brian Nguyen tyckte att det kom naturligt att kunna trycka på varje sidan titel för att återvända till "home"-sidan. Knapparna för att lägga till produkter i varukorgen var inte responsive och det var svårt att upptäcka när de blivit tryckta. Ikonen för login var inte heller uppenbar eftersom det uppkom en fråga om det i samband med testningen. Vid testningen råkade även utvecklaren klicka på "create account" när knappen "login" skulle tryckas och med detta upptäcktes det att knapparna var för nära varandra. Samma problem upptäcktes med nagivationsknapparna på nedre delen av skärmen. När utvecklaren placerade en order noterade han även hur han blev tillbakaskickad till "home"-sidan istället för "place order"-sidan om han inte var inloggad innan ordern placerades. Slutligtvis noterade även utvecklaren att texten som beskriver de olika bakverken var mycket liten och svår att läsa. 

Utöver buddy testing utfördes även monkey testing då applikationens alla knappar trycktes slumpmässigt. Inga bristfälligheter upptäcktes däremot under denna testning.
