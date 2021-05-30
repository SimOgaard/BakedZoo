# BakedZoo

## TODO:
Respons with erros if you input wrong in email password etc fields

se och ändra konto funktionalitet

ignen animation på add to cart button

## Designval


### Användarupplevelse

Appen har designats för att vara enkel att använda med mobilen fastän designen är responsiv och kan användas på surfplatta eller dator. Vi tillgodosåg mobila användare genom att lägga möjliga tabs längst ner och härma traditionella sätt att visa information via kort vyer. Genom att göra detta lyckades vi presentera informationen på ett tydligt och bekant sätt samt att undvika förvirring när man ska navigera hemsidan. Sedan låg vi fokus på att undvika onödigt många steg och knapptryck. Exempel på hur vi gjorde detta är när du tex lägger en order utan att vara inloggad, det som händer är att du blir frågad att logga in och när du gjort det tar den dig tillbaka till din order istället för hemskärmen.

![alt text]https://github.com/abbsimoga/BakedZoo/blob/master/images/figma%201.png?raw=true

### Färg

Som primärfärg för appen valdes en mörkare grön. Detta eftersom denna färg ofta förknippas med natur och kunden kommer med stor sannolikhet vara ute efter att upptäcka naturen och djur däri med tanke på att de befinner sig på en djurpark/ett zoo. Färgen förknippas även med lugn vilket även är den känska som en fikapaus ska framkalla. För bakgrunden användes en beigeaktig färg, detta för att kombinera egenskaperna från vit och brun. Vit färg ger mycket run åt övriga färger och låter den starka gröna naturfärgen ta fokus medan den bruna färgen förknippas med naturens jord, träd och stenar. Färgen på alla sidans knappar har även betydelse. "Enter"-knappen på de sidorna som förknippas med kontohantering har fått en av bakgrundens komplementfärger för att inte ta för mycket fokus så fort sidan öppnas men även se estetiskt tillfredsställande ut. Ikonen för knappen som lägger till varor i kundvagnen är orange för att avsiktligt dra kundens uppmärksamhet till den. Detta därför att vi vill att kunden ska köpa vår produkt då det kommer vara vårm inkomstkälla. Initiellt var tanken även att inloggningsikonerna skulle ha en lila färg för att komplementera det gröna lövet bakoms färg men färgen på ikonerna togs bort eftersom den simplistiska designen passade bättre med menyknappen i vänstra hörnet.

https://github.com/abbsimoga/BakedZoo/blob/master/images/figma%202.png?raw=true

### Position och storlek

Positionen på skärmens olika objekt baserades på ett rutnät på 200 pixlar. Den översta delen av rutnätet används till titeltexten samt sidbeskrivningen eller sökrutan på "home"-sidan. Därefter delades det resterande utrymmet på sidan upp till de olika elementen. För att lätt kunna passa in element i detta rutnät visas alla objekt som kort. Detta gör även det lättare för användarent att separera de olika objekten från varandra. Exempelvis så tar korten på "home" sidan upp två 400 pixlar, alltså två rutor i rutnätet, halvla rutan ockuperas av rutans bild och andra halvan inkluderar namnet beskrivningen och priset. I "about us" sidan var det även meningen att varje kort skulle ta upp en halv ruta var men denna design tog sin itne in i den slutliga produkten.

https://github.com/abbsimoga/BakedZoo/blob/master/images/figma%203.png?raw=true

### Komposition

För att försöka få en så balanserad komposition som möjligt har vissa element i designprocessen förskjutits åt sidan. Exempel på detta är korten på de beställningrelaterade sidorna. För att göra plats åt rullningslisten åt höger var planen att de övriga korten skulle förskjutas åt vänster. Detta hände däremot endast i teori.
Andra områden där kompositionen har tänkts mycket på är enterknappen på de kontorelaterade sidorna som placerades på högersidan för att balansera ut den vänsterrtunga texten i inmatningsområdena.
Även i "pending orders"-sidan var det tänkt teoretiskt att det totala priser skulle visas på högra sidan av kortet medan allt annat visades till höger för att balansera. Däremot så kom inte heller denna förändring med i slutprodukten. 

### Bakgrundsbild

Med bakgrundsbilden ville vi framhäva naturkänslan som vi ville ha som tema. Därför använde vi oss av en mängd relativt diskreta lös som inte tar allt för mycket uppmärksamhet. Detta visade sig däremot inte spegla djur-aspekten av en djurpark. Först användes en bild av en apa i högra hörnet. Denna visade sig därmot med sin skärande färg ta för mycket uppmärksamhet så fort sidan öppnades. Därför byttes den ut mot två silhouetter av djur i den slutliga produkten.


## Testing
Vid ad hoc testing av produkten upptäcktes ett antal bristfälligheter. Buddy testing, då en utvecklare som var ovan med applikationen testade dess funktionalitet, gav en mängd förbättringsområden. Utvecklaren Brian Nguyen tyckte att det kom naturligt att kunna trycka på varje sidan titel för att återvända till "home"-sidan. Knapparna för att lägga till produkter i varukorgen var inte responsive och det var svårt att upptäcka när de blivit tryckta. Ikonen för login var inte heller uppenbar eftersom det uppkom en fråga om det i samband med testningen. Vid testningen råkade även utvecklaren klicka på "create account" när knappen "login" skulle tryckas och med detta upptäcktes det att knapparna var för nära varandra. Med tanke på den målgrupp vi riktar oss åt kommer fel av denna typ vara mycket grova då äldre människor kan ha svårare att att ha precision i sina knapptryck. Samma problem upptäcktes med nagivationsknapparna på nedre delen av skärmen. När utvecklaren placerade en order noterade han även hur han blev tillbakaskickad till "home"-sidan istället för "place order"-sidan om mhan inte var inloggad innan ordern placerades. Slutligtvis noterade även utvecklaren att texten som beskriver de olika bakverken var mycket liten och svår att läsa. 

Utöver buddy testing utfördes även monkey testing då applikationens alla knappar trycktes slumpmässigt. Inga bristfälligheter upptäcktes däremot under denna testning.

Hem om man trycker på baked zoo

Ingen respons på knapparna 

Dålig ikon för login

Enter är för nära create account

Kanske för små knappar där nere

Skicka tillbaks till place order

En knapp till där nere för pending orders

Liten text


Utanför testing: 

Fixa bild när place order trycks

Logout confirm not grön

Logga ut clearas din current order


Com utanför i about us
